/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { UserInfo, userInfoSchema ,  } from './entities/userInfo.entity';
import { UserService } from './users/services/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth/auth.service';
import { JwtAuthGuard } from './auth/auth/jwt-auth-guard';
import { JwtStrategy } from './auth/auth/jwt.strategy';
import { RolesGuard } from './auth/roleGuards';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Mazidatou:Mazidatou@cluster0.oltawkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{
      name: UserInfo.name,
      schema: userInfoSchema
    }]),
    PassportModule,
    JwtModule.register({
      secret:'my_secret_key',
      signOptions: {expiresIn: '1h'}
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService, AuthService , JwtAuthGuard, JwtStrategy, RolesGuard],
})
export class AppModule {}
