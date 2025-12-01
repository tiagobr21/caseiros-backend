import { Controller, Get, Post, Put, Delete,  Body, Param, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

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

    @Post('upload_image/:id')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('id') id:number,
        @UploadedFile() file: Express.Multer.File,
    ){
        return this.productsService.insertImage(id, file);
    }

    @Get('image/:id')
    async getImage(@Param('id') id:number, @Res() res: Response){
      const img = await this.productsService.getImage(id);

      res.setHeader('Content-Type','image/jpeg');
      res.send(img);
    }
}