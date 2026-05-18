import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {

 constructor(
   @InjectRepository(Pessoa)
   private repositorio: Repository<Pessoa>,
 ) {}

 create(dados: Partial<Pessoa>) {
   const pessoa = this.repositorio.create(dados);
   return this.repositorio.save(pessoa);
 }

  findAll() {
   return this.repositorio.find();
 }



}

