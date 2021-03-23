import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  const logger = new Logger();

  initSwagger(app);

  // Previene que se manden datos que no constan en los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    }),
  )
  
  await app.listen(3001);
  logger.log( `Server is running in ${ await app.getUrl() }` );
  
}
bootstrap();
