import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
  const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
  await app.listen(port, ip);
}
bootstrap();
