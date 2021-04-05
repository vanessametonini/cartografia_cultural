import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { Support, SupportDocument } from './schemas/support.schema'

@Injectable()
export class SupportsService {
  constructor(
    @InjectModel(Support.name) private readonly supportModel: Model<SupportDocument>
  ) { }

  async create(createSupportDto: CreateSupportDto): Promise<string> {
    const createdSupport = new this.supportModel(createSupportDto);
    return (await createdSupport.save()).toJSON().id;
  }

  findAll(): Promise<Support[]> {
    return this.supportModel.find().exec();
  }

  async findOne(id: string):Promise<Support> {
    return await this.supportModel.findOne({ _id: id });
  }

  async update(id: string, updateSupportDto: UpdateSupportDto): Promise<Support> {
    return this.supportModel.findByIdAndUpdate({ _id: id }, updateSupportDto).exec();
  }

  async remove(id: string): Promise<Support> {
    return await this.supportModel.findOneAndDelete({ _id: id }).exec();
  }
}
