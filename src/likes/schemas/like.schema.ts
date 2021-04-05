import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type LikeDocument = Like & Document;

@Schema()
export class Like {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
  topicId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' })
  replyId: string;

}


export const LikeSchema = SchemaFactory.createForClass(Like);