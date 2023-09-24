import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'nome do usuário',
    example: 'Kevin diego da silva sousa',
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
    description: 'aniversário do usuário',
    example: '1995-04-22',
    type: String,
  })
  @IsDateString()
  @IsNotEmpty()
  birday: Date;

  @IsNumber()
  idcv: number;

  @IsNumber()
  idskill: number;
}
