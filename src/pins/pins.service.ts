import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePinDto } from './dto/create-pin.dto';
import { UpdatePinDto } from './dto/update-pin.dto';
import { Pin, PinDocument } from './schemas/pin.schema';

@Injectable()
export class PinsService {
  constructor(@InjectModel(Pin.name) private pinModel: Model<PinDocument>) {}

  async create(createPinDto: CreatePinDto):Promise<string> {
    const createdUser = new this.pinModel(createPinDto);
    return (await createdUser.save()).toJSON().id;
  }

  findAll(): Promise<Pin[]> {
    return this.pinModel.find().exec();
  }

  async findOne(id: string):Promise<Pin> {
    return await this.pinModel.findOne({ _id: id }); 
  }

  async update(id: string, updatePinDto: UpdatePinDto): Promise<Pin> {
    return this.pinModel.findByIdAndUpdate({ _id: id }, updatePinDto).exec();
  }

  async remove(id: string): Promise<Pin> { 
    return await this.pinModel.findOneAndDelete({ _id: id }).exec();
  }
}
