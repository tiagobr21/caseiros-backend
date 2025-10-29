import { Controller, Get, Post, Put, Delete,  Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    findAll() { 
        return this.productsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.productsService.findById(id)
    }
 
    @Post()
    create(@Body() data: any) {
        return this.productsService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: any) {
        return this.productsService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }
}