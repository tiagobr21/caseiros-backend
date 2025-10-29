import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o front-end (Next.js)
  app.enableCors({
    origin: 'http://localhost:3001', // URL do seu Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // se usar cookies/autenticação
  });

  await app.listen(4000);
  console.log('🚀 Backend rodando em http://localhost:4000');
}
bootstrap();
