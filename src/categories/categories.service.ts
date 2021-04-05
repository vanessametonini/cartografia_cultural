import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return (await createdCategory.save()).toJSON().id;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async remove(id: string): Promise<Category>{
    return await this.categoryModel.findOneAndDelete({ _id: id }).exec();
  }
}
