import { ApiProperty } from '@nestjs/swagger';
import { Education } from '@prisma/client';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCurriculoDto {
  @ApiProperty({
    description: 'nome do criador do curriculo',
    example: 'kevin diego da silva',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'cpf',
    example: '057.457.493-00',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Vaga do candidato',
    example: 'Programador fullstack',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vacancy: string;

  @ApiProperty({
    description: 'Id da skill',
    example: 1,
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  idskill: number;

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
  birthday: Date;

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
}
