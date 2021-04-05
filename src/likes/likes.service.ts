import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Like, LikeDocument } from './schemas/like.schema';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like.name) private readonly likeModel: Model<LikeDocument>
  ){}

  async create(createLikeDto: CreateLikeDto): Promise<string> {
    const createdLike = new this.likeModel(createLikeDto);
    return (await createdLike.save()).toJSON().id;
  }

  findAll(): Promise<Like[]> {
    return this.likeModel.find().exec();
  }

  async findOne(id: string): Promise<Like> {
    return await this.likeModel.findOne({ _id: id });
  }

  async update(id: string, updateLikeDto: UpdateLikeDto): Promise<Like> {
    return this.likeModel.findByIdAndUpdate({ _id: id }, updateLikeDto).exec();
  }

  async remove(id: string): Promise<Like> {
    return await this.likeModel.findOneAndDelete({ _id: id }).exec();
  }
}
