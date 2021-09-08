import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema({
    timestamps: true
})
export class Topic {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    categoryId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', immutable: true})
    userId: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
    categoriesTagged: string[];

    @Prop()
    content: string;

    @Prop()
    title: string;

    @Prop()
    positiveSupports: number;

    @Prop()
    negativeSupports: number;

    @Prop()
    numberOfReplies: number;

    @Prop()
    views: number;

}

export const TopicSchema = SchemaFactory.createForClass(Topic);