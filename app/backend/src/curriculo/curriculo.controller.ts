import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurriculoModule } from './curriculo.module';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@ApiTags('curriculo')
@Controller('curriculo')
export class CurriculoController {
  constructor(private readonly curriculoService: CurriculoService) {}

  /**
   * Função controladora que passa uma promise para o serviço
   * @param createCurriculoDto modelo de candidato com base no DTO
   * @returns Retorna uma promise com um serviço
   */
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: CurriculoModule,
  })
  @ApiResponse({ status: 200, description: 'Operação bem-sucedida.' })
  @ApiResponse({ status: 201, description: 'Recurso criado com sucesso.' })
  @ApiResponse({
    status: 400,
    description: 'A solicitação é inválida ou malformada.',
  })
  @ApiResponse({
    status: 401,
    description: 'A solicitação requer autenticação.',
  })
  @ApiResponse({ status: 403, description: 'Acesso proibido.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({
    status: 500,
    description: 'O servidor encontrou um erro inesperado.',
  })
  @IsPublic()
  @Post()
  create(@Body() createCurriculoDto: CreateCurriculoDto) {
    return this.curriculoService.create(createCurriculoDto);
  }

  /**
   * Função controladora que passa uma promise para o serviço
   * @returns Retorna uma promise com um serviço
   */
  @ApiResponse({ status: 200, description: 'Operação bem-sucedida.' })
  @ApiResponse({ status: 201, description: 'Recurso criado com sucesso.' })
  @ApiResponse({
    status: 400,
    description: 'A solicitação é inválida ou malformada.',
  })
  @ApiResponse({
    status: 401,
    description: 'A solicitação requer autenticação.',
  })
  @ApiResponse({ status: 403, description: 'Acesso proibido.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({
    status: 500,
    description: 'O servidor encontrou um erro inesperado.',
  })
  @IsPublic()
  @Get()
  findAll() {
    return this.curriculoService.findAll();
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para localizar um candidato
   * @param id identificador de um candidato
   * @returns Retorna uma promise com um serviço
   */
  @ApiResponse({ status: 200, description: 'Operação bem-sucedida.' })
  @ApiResponse({ status: 201, description: 'Recurso criado com sucesso.' })
  @ApiResponse({
    status: 400,
    description: 'A solicitação é inválida ou malformada.',
  })
  @ApiResponse({
    status: 401,
    description: 'A solicitação requer autenticação.',
  })
  @ApiResponse({ status: 403, description: 'Acesso proibido.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({
    status: 500,
    description: 'O servidor encontrou um erro inesperado.',
  })
  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curriculoService.findOne(+id);
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para atualização
   * @param id identificador de um curriculo
   * @param updateCurriculoDto modelo de curriculo com base no DTO
   * @returns Retorna uma promise com um serviço
   */
  @ApiResponse({ status: 200, description: 'Operação bem-sucedida.' })
  @ApiResponse({ status: 201, description: 'Recurso criado com sucesso.' })
  @ApiResponse({
    status: 400,
    description: 'A solicitação é inválida ou malformada.',
  })
  @ApiResponse({
    status: 401,
    description: 'A solicitação requer autenticação.',
  })
  @ApiResponse({ status: 403, description: 'Acesso proibido.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({
    status: 500,
    description: 'O servidor encontrou um erro inesperado.',
  })
  @Patch(':id')
  @IsPublic()
  update(
    @Param('id') id: string,
    @Body() updateCurriculoDto: UpdateCurriculoDto,
  ) {
    return this.curriculoService.update(+id, updateCurriculoDto);
  }

  /**
   * Finção controladora que passa uma promise para o serviço a fins de deleção
   * @param id identificador de um curriculo
   * @returns Retorna uma promise com um serviço
   */
  @ApiResponse({ status: 200, description: 'Operação bem-sucedida.' })
  @ApiResponse({ status: 201, description: 'Recurso criado com sucesso.' })
  @ApiResponse({
    status: 400,
    description: 'A solicitação é inválida ou malformada.',
  })
  @ApiResponse({
    status: 401,
    description: 'A solicitação requer autenticação.',
  })
  @ApiResponse({ status: 403, description: 'Acesso proibido.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({
    status: 500,
    description: 'O servidor encontrou um erro inesperado.',
  })
  @IsPublic()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curriculoService.remove(+id);
  }
}
