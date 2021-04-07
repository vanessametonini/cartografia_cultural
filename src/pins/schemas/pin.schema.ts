import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type PinDocument = Pin & Document;

@Schema()
export class Pin {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'fs.files'}] })
  imageIds: string[];

  @Prop()
  title: string;

  @Prop()
  email: string;
  
  @Prop()
  phone: number;
  
  @Prop()
  street: string;
  
  @Prop()
  number: number;
  
  @Prop()
  neighborhood: string;
  
  @Prop()
  city: string;
  
  @Prop()
  zipcode: number;
  
  @Prop()
  description: string;
  
  @Prop()
  lat: number;
  
  @Prop()
  long: number;
  
  @Prop()
  link: string;

  @Prop()
  facebook: string;
  
  @Prop()
  instagram: string;
  
  @Prop()
  twitter: string;
  
  @Prop()
  whatsapp: string;

}

export const PinSchema = SchemaFactory.createForClass(Pin);