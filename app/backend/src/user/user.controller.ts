import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModule } from './user.module';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Função controladora que passa uma promise para o serviço
   * @param createUserDto modelo de candidato com base no DTO
   * @returns Retorna uma promise com um serviço
   */
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: UserModule,
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
  @HttpCode(HttpStatus.OK)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
  @HttpCode(HttpStatus.OK)
  @IsPublic()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para localizar um user
   * @param id identificador de um user
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
  @IsPublic()
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /**
   * Função controladora que passa uma promise para o serviço com base no id para atualização
   * @param id identificador de um curriculo
   * @param updateSkillDto modelo de user com base no DTO
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
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   * Finção controladora que passa uma promise para o serviço a fins de deleção
   * @param id identificador de um user
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
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

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
  @HttpCode(HttpStatus.OK)
  findByEmail(email: string) {
    return this.userService.findbyEmail(email);
  }
}
