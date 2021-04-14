import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { Reply, ReplyDocument } from './schemas/reply.schema';
import { TopicsService } from '../topics/topics.service';

@Injectable()
export class RepliesService {
  constructor(
    @InjectModel(Reply.name) private readonly replyModel: Model<ReplyDocument>,
    private readonly topicsService: TopicsService,
  ) { }

  async create(createReplyDto: CreateReplyDto): Promise<Reply> {
    const createdReply = new this.replyModel(createReplyDto)
    const reply = await createdReply.save()
    const { _id, topicId } =  reply;
    await this.topicsService.incrementNumberOfReplies(topicId);
    return _id;
    // return (await createdReply.save()).toJSON().id;
  }

  findAll(): Promise<Reply[]> {
    return this.replyModel.find().exec();
  }

  findByTopicId(id: string): Promise<Reply[]>{
    return this.replyModel.find({ topicId: id }).exec();
  }

  async findOne(id: string): Promise<Reply> {
    return await this.replyModel.findOne({ _id: id });
  }

  async update(id: string, updateReplyDto: UpdateReplyDto): Promise<Reply> {
    return this.replyModel.findByIdAndUpdate({ _id: id }, updateReplyDto).exec();

  }

  async remove(id: string): Promise<any> {
    const reply = await this.replyModel.findOneAndDelete({ _id: id }).exec();
    const { topicId } =  reply;
    await this.topicsService.decrementNumberOfReplies(topicId);
    return reply;
  }
}
