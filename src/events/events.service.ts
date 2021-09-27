import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Event, EventDocument } from './schemas/event.schema';
import { DeletedEvent, DeletedEventDocument } from './schemas/deleted-events.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
    @InjectModel(DeletedEvent.name) private deletedEventModel: Model<DeletedEventDocument>
  ) { }
  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
      return (await createdEvent.save()).toJSON().id;
  }

  findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findOne(id: string): Promise<Event> {
    return await this.eventModel.findOne({ _id: id });
  }

  update(id: string, updateEvent: CreateEventDto): Promise<Event> {
    return this.eventModel.findByIdAndUpdate({ _id: id }, updateEvent, { new: true }).exec();
  }

  async remove(id: string) {
    const event = await this.eventModel.findOneAndDelete({ _id: id });

    const userId = event.userId;

    const data = {
      categoryId: event.categoryId ? event.categoryId : undefined,
      userId: event.userId ? event.userId : undefined,
      imageIds: event.imageIds ? event.imageIds : undefined,
      title: event.title ? event.title : undefined,
      date: event.date ? event.date : undefined,
      street: event.street ? event.street : undefined,
      neighborhood: event.neighborhood ? event.neighborhood : undefined,
      city: event.city ? event.city : undefined,
      zipcode: event.zipcode ? event.zipcode : undefined,
      number: event.number ? event.number : undefined,
      ticket: event.ticket ? event.ticket : undefined,
      description: event.description ? event.description : undefined,
      local: event.local ? event.local : undefined,
      link: event.link ? event.link : undefined,
      facebook: event.facebook ? event.facebook : undefined,
      instagram: event.instagram ? event.instagram : undefined,
      whatsapp: event.whatsapp ? event.whatsapp : undefined,
      twitter: event.twitter ? event.twitter : undefined
    }

    await this.deletedEventModel.create({ userId, data });
    await event.delete();

    return event;
  }
}
