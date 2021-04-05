import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic, TopicDocument } from './schemas/topic.schema';

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private readonly topicModel: Model<TopicDocument>
  ) { }

  async create(createTopicDto: CreateTopicDto): Promise<string> {
    const createdTopic = new this.topicModel(createTopicDto)
    return (await createdTopic.save()).toJSON().id;
  }

  findAll(): Promise<Topic[]>{
    return this.topicModel.find().exec();
  }

  async findOne(id: string) {
    return await this.topicModel.findOne({ _id: id });
  }

  async update(id: string, updateTopicDto: UpdateTopicDto): Promise<Topic> {
    return this.topicModel.findByIdAndUpdate({ _id: id }, updateTopicDto).exec();
  }

  async remove(id: string): Promise<Topic> {
    return await this.topicModel.findOneAndDelete({ _id: id }).exec();

  }
}
