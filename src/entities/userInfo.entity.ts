/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserInfo{

@Prop({required: true})
username: string;
@Prop()
password : string;
@Prop()
email: string;
@Prop()
phoneNumber : number;
@Prop()
role: 'admin' | 'user';
}

export  const userInfoSchema = SchemaFactory.createForClass(UserInfo);
