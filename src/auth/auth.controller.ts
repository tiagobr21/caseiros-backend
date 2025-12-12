import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserInterface } from "../interfaces/UserInterface";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() body: UserInterface) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
    }
   
   @Get("validate-token/:token") 
   async isValidToken(@Param('token') token:string) {
     return await this.authService.isvalidToken(token);

   }
}
