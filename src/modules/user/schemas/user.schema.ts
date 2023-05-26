import {
  Schema,
  SchemaFactory,
  Prop
} from "@nestjs/mongoose";
import {
  Document
} from 'mongoose';
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({
    required: true
  })
  username: string;


  @Prop({
    required: true
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);