import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type EventDocument = Event & Document;

@Schema({
  writeConcern: {},
  timestamps: true
})
export class Event {
    
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', immutable: true })
  userId: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'fs.files'}] })
  imageIds: string[];
  
  @Prop()
  title: string;

  @Prop()
  date: Date;

  @Prop()
  street: string;

  @Prop()
  neighborhood: string

  @Prop()
  city: string;

  @Prop()
  zipcode: number; 

  @Prop()
  number: number;

  @Prop()
  ticket: number;

  @Prop()
  description: string;

  @Prop()
  local: string;

  @Prop()
  link: string;

  @Prop()
  facebook: string;

  @Prop()
  instagram: string;

  @Prop()
  whatsapp: string;

  @Prop()
  twitter: string;

}

export const EventSchema = SchemaFactory.createForClass(Event);