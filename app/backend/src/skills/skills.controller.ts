import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SkillsModule } from './skills.module';

@ApiTags('skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  /**
   * Função controladora que passa uma promise para o serviço
   * @param createSkillDto modelo de candidato com base no DTO
   * @returns Retorna uma promise com um serviço
   */
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: SkillsModule,
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
  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
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
  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para localizar uma skill
   * @param id identificador de uma skill
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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para atualização
   * @param id identificador de um curriculo
   * @param updateSkillDto modelo de skill com base no DTO
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
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  /**
   * Finção controladora que passa uma promise para o serviço a fins de deleção
   * @param id identificador de uma skill
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
