import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { topics } from 'src/seeds/seeds.topics';
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

  async incrementNumberOfSupports(id: string, status: boolean): Promise<Topic> {
    const topic = await this.findOne(id);
    if(status){
      return this.update(id , { positiveSupports: topic.positiveSupports + 1 })
    }
    return this.update(id , { negativeSupports: topic.negativeSupports + 1 })
  }


  async incrementNumberOfReplies(id: string): Promise<Topic> {
    const topic = await this.findOne(id);
    return this.update(id , { numberOfReplies: topic.numberOfReplies + 1 });
  }

  async decrementNumberOfReplies(id: string, n: number): Promise<Topic> {
    const topic = await this.findOne(id);
    return this.update(id , { numberOfReplies: topic.numberOfReplies - n });
  }

  async remove(id: string): Promise<Topic> {
    return await this.topicModel.findOneAndDelete({ _id: id }).exec();
  }
  
}
