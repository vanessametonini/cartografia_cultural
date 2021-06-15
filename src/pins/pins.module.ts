import { HttpModule, Module } from '@nestjs/common';
import { PinsService } from './pins.service';
import { PinsController } from './pins.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pin, PinSchema } from './schemas/pin.schema';
import { UsersModule } from 'src/users/users.module';
import { DeletedPin, DeletedPinSchema } from './schemas/deleted-pins.schema';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    MongooseModule.forFeatureAsync([
      {
        name: Pin.name,
        useFactory: () => {
          PinSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return PinSchema;
        },
      },
      {
        name: DeletedPin.name,
        useFactory: () => {
          DeletedPinSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return DeletedPinSchema;
        },
      },
    ])
  ],
  controllers: [PinsController],
  providers: [PinsService],
  exports: [PinsService]
}) 
export class PinsModule {}
