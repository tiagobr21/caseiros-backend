import { Injectable, NotFoundException } from "@nestjs/common";
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

    async insertImage(id: number, file: Express.Multer.File){
        const product = await this.productsRepository.findOne({where: {id}});
        if(!product) throw new NotFoundException('Product not found');

        product.image = file.buffer;

        return this.productsRepository.save(product)
    }

    async getImage(id: number){
        const product = await this.productsRepository.findOne({
            where:{id},
            select: {image:true}
        });

        if(!product || !product.image){
            throw new NotFoundException('Image not found');
        }

        return product.image;
    }
}