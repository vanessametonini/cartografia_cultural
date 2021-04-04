import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UsersSeed } from './users.seed';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          UserSchema.pre('save', async function (next: Function) {
            const user = this;
            if (!user.isModified('password')) return next();
            const hashedPassword = await bcrypt.hash(user.get('password'), 10);
            user.set({ password: hashedPassword });
            next();
          });

          UserSchema.methods = {
              comparePassword: async function (plainPassword) {
              const user = this;
              return await bcrypt.compare(plainPassword, user.get('password'));
            },
          }

          UserSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
              delete ret.password;
            }
          });

          return UserSchema;
        },
      },
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersSeed],
  exports: [UsersService],
})
export class UsersModule { }
