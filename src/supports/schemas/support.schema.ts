import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type SupportDocument = Support & Document;

@Schema()
export class Support {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
  topicId: string;

  @Prop()
  status: boolean;
  
}

export const SupportSchema = SchemaFactory.createForClass(Support);