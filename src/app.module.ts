/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { UserInfo, userInfoSchema ,  } from './entities/userInfo.entity';
import { UserService } from './users/services/user/user.service';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Mazidatou:Mazidatou@cluster0.oltawkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{
      name: UserInfo.name,
      schema: userInfoSchema
    }]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService ],
})
export class AppModule {}
