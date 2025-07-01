/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose";
import { UserInfo,  } from 'src/entities/userInfo.entity';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth/auth.service';

@Injectable()
export class UserService {
    constructor (@InjectModel(UserInfo.name) private userInfoModel : Model<UserInfo> , private authservervice: AuthService){

    }
    getAllUserInfo(): Promise<any>{
        return this.userInfoModel.find().exec();
    }
    async createUser(val: any):Promise<any>{
        const user = await this.userInfoModel.findOne({username : val?.username});
        if(user){
            throw new ConflictException('User Already Exists');
        }
        const hashedPassword = await bcrypt.hash(val?.password, 10);

        const newUser = new  this.userInfoModel({...val, password: hashedPassword});
         return newUser.save();
    }

    async getUser(loginInfo: any): Promise<any>{
        const { username, password } = loginInfo;
        const user = await this.userInfoModel.findOne({username});
        if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authservervice.login(user);
    // return ` ${user.username}`;

    }
}
