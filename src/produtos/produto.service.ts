import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

 constructor(
   @InjectRepository(Produto)
   private repositorio: Repository<Produto>,
 ) {}



}

