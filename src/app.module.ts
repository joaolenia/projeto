import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: '1234567',
     database: 'usuarios',
     autoLoadEntities: true,
     synchronize: true, // só em desenvolvimento
   }),
   PessoasModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
