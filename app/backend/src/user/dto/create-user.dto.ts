import { ApiProperty } from '@nestjs/swagger';
import { Education } from '@prisma/client';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'nome do usuário',
    example: 'Kevin Diego da Silva Sousa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'email do candidato',
    example: 'kevin.sousa@alaresinternet.com.br',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Cpf do usuário',
    example: '045.075.789-10',
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    description: 'aniversário do usuário',
    example: '1995-04-22',
    type: String,
  })
  @IsDateString()
  @IsNotEmpty()
  birday: Date;

  @ApiProperty({
    description: 'Telefone do usuário',
    example: '85999287297',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Grau de escolaridade',
    example: [
      'FUNDAMENTAL_COMPLETO',
      'MEDIO_INCOMPLETO',
      'MEDIO_COMPLETO',
      'SUPERIOR_INCOMPLETO',
      'SUPERIOR_COMPLETO',
      'MESTRADO',
      'DOUTORADO',
    ],
  })
  @IsString()
  @IsNotEmpty()
  education: Education;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

  @IsNumber()
  @IsNotEmpty()
  idskill: number;
}
