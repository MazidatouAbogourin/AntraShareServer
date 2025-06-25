import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty() readonly username : string;

    @IsString()
    @IsNotEmpty () readonly password : string;

    @IsEmail()
    @IsNotEmpty() readonly email : string;

    @IsNumber()
    @IsOptional() readonly phone : number;

    @IsOptional()
    @IsIn(['user', 'admin']) readonly role : 'user' | 'admin';





}