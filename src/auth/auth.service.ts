import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) throw new UnauthorizedException("Usuário não encontrado");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) throw new UnauthorizedException("Senha incorreta");

    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
    }
    
    async isvalidToken(token: string) {
        try {
            const verified = this.jwtService.verify(token);
        
            
        } catch (e) {     
            throw new UnauthorizedException("Token inválido");
        }
    }  
}
