/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, HttpCode, UseGuards, Req, SetMetadata } from '@nestjs/common';
import { LoginDto } from 'src/dto/login-dto';
import { CreateUserDto } from 'src/dto/user-dto';
import { UserService } from './services/user/user.service';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roleGuards';

@Controller('users')
export class UsersController {

  constructor(private userService : UserService){}
    @Get('')
    getData(){
        return "hello World we are in users"
    }

    

  @Post('/register')
  async userDetails(@Body() body : CreateUserDto){
    const user = await this.userService.createUser(body);
   return user

  }

  @Post('/login')
  async authenticateUser(@Body() body : LoginDto){
    const user = await this.userService.getUser(body);
   if(user){
    return user
   }
   else{
    return {
      message: "user Not found"
    }
   }

  }

  @UseGuards(JwtAuthGuard, RolesGuard)
   @SetMetadata('roles', ['admin'])
  @Get('/all')
  async getAllUsers(@Req() req){
   const res= await this.userService.getAllUserInfo();
   return res;


  }
}
