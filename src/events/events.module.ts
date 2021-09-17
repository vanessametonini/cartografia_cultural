import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './schemas/event.schema';
import { DeletedEvent, DeletedEventSchema } from './schemas/deleted-events.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Event.name,
        useFactory: () => {
          EventSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return EventSchema;
        },
      },
      {
        name: DeletedEvent.name,
        useFactory: () => {
          DeletedEventSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
            }
          });
          return DeletedEventSchema;
        },
      },
    ])
  ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],

})
export class EventsModule { }
