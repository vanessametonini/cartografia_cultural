import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type RejoinderDocument = Rejoinder & Document;

@Schema()
export class Rejoinder {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
    topicId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' })
    replyId: string;

    @Prop()
    content: string;

}

export const RejoinderSchema = SchemaFactory.createForClass(Rejoinder);