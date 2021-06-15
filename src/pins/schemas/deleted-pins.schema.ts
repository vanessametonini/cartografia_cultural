import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type DeletedPinDocument = DeletedPin & Document;

@Schema({
    timestamps: true
})
export class DeletedPin {

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    userId: string;

    @Prop({ type: Object })
    data: Object;

}

export const DeletedPinSchema = SchemaFactory.createForClass(DeletedPin);