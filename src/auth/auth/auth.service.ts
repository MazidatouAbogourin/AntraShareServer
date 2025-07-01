/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
   async login(user: any){
        const payload ={username: user.username, role: user.role};
        const token = await this.jwtService.sign(payload);
        return{
            access_token: token

        }
    }

    async ValidateUser(username : string, password: string){
        if(password){
            return {username : username}
        }
        return null;
 
    }
}
