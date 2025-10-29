import { Get, Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()

export class UserService { 
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,) { }
    
    @Get()
    findAll() {
        return this.userRepository.find();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userRepository.findOne({ where: { id } });
    }
}
