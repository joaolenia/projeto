import { Body, Controller,Get,Post } from '@nestjs/common';
import { PessoasService } from './pessoas.service';


@Controller('pessoas')
export class PessoasController {

constructor(private readonly service: PessoasService) {}

 @Post()
 criar(@Body() dados) {
   return this.service.create(dados);
 }

 @Get('b')
 buscatudo() {
   return this.service.findAll();
 }




}
