import { Module } from '@nestjs/common';
import { RejoindersService } from './rejoinders.service';
import { RejoindersController } from './rejoinders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rejoinder, RejoinderSchema } from './schemas/rejoinders.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Rejoinder.name,
        useFactory: () => {
          RejoinderSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return RejoinderSchema;
        },
      },
    ])
  ],
  controllers: [RejoindersController],
  providers: [RejoindersService],
  exports:[RejoindersService]
})
export class RejoindersModule {} 
