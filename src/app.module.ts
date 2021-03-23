import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturaModule } from './factura/factura.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nestjs',
      entities: [__dirname + './**/**/*entity{.ts,.js}' ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacturaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
