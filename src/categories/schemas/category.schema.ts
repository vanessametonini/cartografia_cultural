import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  color: string;

  @Prop()
  label: string;

  @Prop()
  legend: string;

  @Prop()
  value: number;

  @Prop()
  icon: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category)
  .set('toJSON', {
    transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  });