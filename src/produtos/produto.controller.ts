
import { Body, Controller,Get,Post } from '@nestjs/common';
import { ProdutosService } from './produto.service';


@Controller('produtos')
export class ProdutosController {

constructor(private readonly service: ProdutosService) {}


}
