/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, Body, Post, HttpCode } from '@nestjs/common';
import { LoginDto } from 'src/dto/login-dto';
import { CreateUserDto } from 'src/dto/user-dto';
import { UserService } from './services/user/user.service';

@Controller('users')
export class UsersController {

  constructor(private userService : UserService){}
    @Get('')
    getData(){
        return "hello World we are in users"
    }

    

  @Post('/register')
  async userDetails(@Body() body : CreateUserDto){
    // console.log(body);

    // return{
    //   message : "you have register a user successfully"
    // }

    const user = await this.userService.createUser(body);
    
   return user

  }

  @Post('/login')
  
  async authenticateUser(@Body() body : LoginDto){
    console.log(body)


    const user = await this.userService.getUser(body);
  

   return user;

  }


  @Get('/all')
  @HttpCode(200)
  async getAllUsers(){

   const res= await this.userService.getAllUserInfo();
   return res;


  }
}
