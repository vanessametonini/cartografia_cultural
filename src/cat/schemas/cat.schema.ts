import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
  // @Prop()
  // id: MongooseSchema.Types.ObjectId;

  // @Prop()
  // color: string;

  // @Prop()
  // label: string;

  // @Prop()
  // legend: string;

  // @Prop()
  // value: number;

  // @Prop()
  // icon: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat)
  .set('toJSON', {
    transform: function (doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  });