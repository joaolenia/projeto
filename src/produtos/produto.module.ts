import { Module } from '@nestjs/common';
import { ProdutosController } from './produto.controller';
import { ProdutosService } from './produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosService],
  controllers: [ProdutosController]
})
export class ProdutosModule {}
