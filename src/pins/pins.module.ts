import { Module } from '@nestjs/common';
import { PinsService } from './pins.service';
import { PinsController } from './pins.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pin, PinSchema } from './schemas/pin.schema';
import { PinsSeed } from './pins.seed'

@Module({
  imports: [
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
    ])
  ],
  controllers: [PinsController],
  providers: [PinsService, PinsSeed],
  exports: [PinsService, PinsSeed]
}) 
export class PinsModule {}
