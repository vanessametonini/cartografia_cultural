import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRejoinderDto } from './dto/create-rejoinder.dto';
import { UpdateRejoinderDto } from './dto/update-rejoinder.dto';
import { Rejoinder, RejoinderDocument } from './schemas/rejoinders.schema';
import { TopicsService } from '../topics/topics.service';

@Injectable()
export class RejoindersService {
  constructor(
    @InjectModel(Rejoinder.name) private readonly rejoinderModel: Model<RejoinderDocument>,
    private readonly topicsService: TopicsService
  ){}

  async create(createRejoinderDto: CreateRejoinderDto): Promise<string> {
    const createdRejoinder= new this.rejoinderModel(createRejoinderDto);
    const rejoinder = await createdRejoinder.save()
    const { _id, topicId } =  rejoinder;
    await this.topicsService.incrementNumberOfReplies(topicId);
    return _id;
    // const createdRejoinder = new this.rejoinderModel(createRejoinderDto);
    // return (await createdRejoinder.save()).toJSON().id; 
  }

  findAll(): Promise<Rejoinder[]> {
    return this.rejoinderModel.find().exec();

  } 

  async findOne(id: string): Promise<Rejoinder> {
    return await this.rejoinderModel.findOne({ _id: id });
  }

  async findByTopicId(id: string): Promise<Rejoinder[]> {
    return await this.rejoinderModel.find({ topicId: id });
  }

  async findByReplyId(id: string): Promise<any> {
    return await this.rejoinderModel.find({ replyId: id });
  }

  async update(id: string, updateRejoinderDto: UpdateRejoinderDto): Promise<Rejoinder> {
    return this.rejoinderModel.findByIdAndUpdate({ _id: id }, updateRejoinderDto).exec();

  }

  async remove(id: string): Promise<Rejoinder> {
    const rejoinderDeleted = await this.rejoinderModel.findOneAndDelete({ _id: id }).exec();
    this.topicsService.decrementNumberOfReplies(rejoinderDeleted.topicId, 1);
    return rejoinderDeleted
  }

  async deleteMany(obj): Promise<any> {
    return await this.rejoinderModel.deleteMany(obj).exec();
  }
}
