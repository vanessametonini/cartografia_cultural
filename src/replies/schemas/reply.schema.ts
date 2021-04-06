import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ReplyDocument = Reply & Document;

@Schema()
export class Reply {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
  topicId: string;

  @Prop()
  content: string;

  @Prop()
  createdAt: Date;

  @Prop()
  numberOfLikes: number;
  
}

export const ReplySchema = SchemaFactory.createForClass(Reply);