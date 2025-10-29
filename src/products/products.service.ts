import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) { }
    
    async findAll() {
        return await this.productsRepository.find();
    }

    async findById(id: number) {
        return await this.productsRepository.findOne({ where: { id } });
    }

    async create(data: Partial<Product>) { 
        const newProduct = this.productsRepository.create(data);    
        return await this.productsRepository.save(newProduct);
    }

    async update(id: number, data: Partial<Product>) {
        await this.productsRepository.update(id, data);
        return this.findById(id);
    }

    async delete(id: number) {
        await this.productsRepository.delete(id);
    }
}