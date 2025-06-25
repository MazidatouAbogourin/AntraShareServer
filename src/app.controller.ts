import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/user-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

   @Post('user/register')
   userDetails(@Body() body : CreateUserDto){
    console.log(body);

    return{
      message : "you have register a user successfully",
      user: body
    }

  }

}
