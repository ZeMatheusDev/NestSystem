import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // Cria a aplicação usando o adaptador Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configura para servir arquivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Inicia o servidor na porta especificada ou 3000
  await app.listen(process.env.PORT ?? 3000);

  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
