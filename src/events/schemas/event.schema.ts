import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type EventDocument = Event & Document;

@Schema({
  writeConcern: {}
})
export class Event {
    
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'fs.files'}] })
  imageIds: string[];
  
  @Prop()
  firstName: string;

}

export const EventSchema = SchemaFactory.createForClass(Event);