import { Body, Delete, Get, Injectable, Param, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()

export class UserService {
    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,) { }

    async findAll() { 
        return this.userRepository.find();
    }

    async findOne(id: number) {
        return this.userRepository.findOne({ where: { id } });
    }

    async create(user: User) {
        let newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async update(id: number, user: User) {
        return this.userRepository.update(id, user);
    }

    async delete(id: number) {
        return this.userRepository.delete(id);
    }
}