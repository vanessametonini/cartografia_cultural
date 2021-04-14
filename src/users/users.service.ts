import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto):Promise<any> {
      const createdUser = new this.userModel(createUserDto);
      return (await createdUser.save()).toJSON();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<any> {
    return await this.userModel.findOne({ _id: id });
  }

  async findOneByProp(prop): Promise<any> {
    return await this.userModel.findOne(prop);
  }

  async findByEmail(email: string):Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate({ _id: id }, updateUserDto).exec();
  }

  async findOneAndUpdate( updateUser, fields): Promise<any> {
    return this.userModel.findOneAndUpdate(updateUser, fields).exec();
  }

  async remove(id: string): Promise<User>{
    return await this.userModel.findOneAndDelete({ _id: id }).exec();
  }

  async changePassword(id: string, password: string) {
    const user = await this.findOne(id);
    user.password = await this.hashPassword(password, 10);
    user.recoverToken = null;
    this.update(id,  user)
  }

  private async hashPassword(password: string, salt: number): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
