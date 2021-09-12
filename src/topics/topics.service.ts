import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { DeletedTopic, DeletedTopicDocument } from './schemas/deleted-topics.schema';
import { Topic, TopicDocument } from './schemas/topic.schema';

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private readonly topicModel: Model<TopicDocument>,
    @InjectModel(DeletedTopic.name) private deletedTopicModel: Model<DeletedTopicDocument>
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

  async update(id: string, updatedTopic: UpdateTopicDto): Promise<Topic> {
    return this.topicModel.findByIdAndUpdate({ _id: id }, updatedTopic, { new: true }).exec();
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
    const topic = await this.topicModel.findOne({ _id: id });
    
    const userId = topic.userId;
    
    const data = {
      categoryId: topic.categoryId ? topic.categoryId : undefined,
      userId: topic.userId ? topic.userId : undefined,
      categoriesTagged: topic.categoriesTagged ? topic.categoriesTagged : undefined,
      content: topic.content ? topic.content : undefined,
      title: topic.title ? topic.title : undefined,
      positiveSupports: topic.positiveSupports ? topic.positiveSupports : undefined,
      negativeSupports: topic.negativeSupports ? topic.negativeSupports : undefined,
      numberOfReplies: topic.numberOfReplies ? topic.numberOfReplies : undefined,
      views: topic.views ? topic.views : undefined,
    }

    await this.deletedTopicModel.create({ userId, data });
    await topic.delete();

    return topic;
  }
  
}
