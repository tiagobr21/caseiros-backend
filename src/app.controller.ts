import { BadRequestException, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

export const imageFileFilter = (req, file, callback) => {
  if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
    return callback(
      new BadRequestException('Apenas arquivos de imagem são permitidos!'),
      false,
    );
  }
  callback(null, true);
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', { 
      storage: diskStorage({
        destination: './uploads', 
      
        filename: (req, file, callback) => {
          const uniqueSuffix = uuidv4(); 
          const extension = extname(file.originalname); 
          callback(null, `${uniqueSuffix}${extension}`);
        },
      }),

      fileFilter: imageFileFilter, 
    }),
  )
 uploadFile(@UploadedFile() file: Express.Multer.File) {
   
   const fileUrl = `${process.env.BACKEND_URL}/uploads/${file.filename}`;

    return {
      message: 'Arquivo enviado com sucesso!',
      url: fileUrl,
      filename: file.filename,
    };
  }

}
