import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRejoinderDto } from './dto/create-rejoinder.dto';
import { UpdateRejoinderDto } from './dto/update-rejoinder.dto';
import { Rejoinder, RejoinderDocument } from './schemas/rejoinders.schema';

@Injectable()
export class RejoindersService {
  constructor(
    @InjectModel(Rejoinder.name) private readonly rejoinderModel: Model<RejoinderDocument>
  ){}

  async create(createRejoinderDto: CreateRejoinderDto): Promise<string> {
    const createdRejoinder = new this.rejoinderModel(createRejoinderDto);
    return (await createdRejoinder.save()).toJSON().id;
  }

  findAll(): Promise<Rejoinder[]> {
    return this.rejoinderModel.find().exec();

  } 

  async findOne(id: string): Promise<Rejoinder> {
    return await this.rejoinderModel.findOne({ _id: id });
  }

  async update(id: string, updateRejoinderDto: UpdateRejoinderDto): Promise<Rejoinder> {
    return this.rejoinderModel.findByIdAndUpdate({ _id: id }, updateRejoinderDto).exec();

  }

  async remove(id: string): Promise<Rejoinder> {
    return await this.rejoinderModel.findOneAndDelete({ _id: id }).exec();

  }
}
