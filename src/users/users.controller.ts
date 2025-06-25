import { Controller, Get, Body, Post, HttpStatus } from '@nestjs/common';
import { LoginDto } from 'src/dto/login-dto';
import { CreateUserDto } from 'src/dto/user-dto';

@Controller('users')
export class UsersController {

    @Get('')
    getData(){
        return "hello World we are in users"
    }

    

  @Post('/register')
   userDetails(@Body() body : CreateUserDto){
    console.log(body);

    return{
      message : "you have register a user successfully"
    }

  }

  @Post('/login')
  
  authenticateUser(@Body() body : LoginDto){
    console.log(body)
    return {
        message: "you have successyly logged in",
      
    }

  }
}
