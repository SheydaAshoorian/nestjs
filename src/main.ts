import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {

  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('TaskFlow')
  .setDescription('Task management API')
  .setVersion('1.0')
  .addTag('Tasks')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);

  app.enableCors(); // Give access to nextjs

  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();


