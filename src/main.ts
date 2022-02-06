import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // whitelist 옵션 : 데코레이터가 붙어있지 않는 값은 애초에 제거 해버린다.
  // forbidNonWhitelisted : 정해진 옵션이 아닌 값이 들어오면 에러를 발생시킨다.
  // transform : 컨트롤러에 들어오는 파라미터 등의 string 값을 원하는 타입으로 전환 시켜준다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
