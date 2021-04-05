import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>
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

  update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.eventModel.findByIdAndUpdate({ _id: id }, updateEventDto).exec();
  }

  async remove(id: string) {
    return await this.eventModel.findOneAndDelete({ _id: id }).exec();

  }
}
