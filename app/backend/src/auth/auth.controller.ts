import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequestModel } from './models/auth-request';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

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
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequestModel) {
    return this.authservice.login(req.user);
  }
}
