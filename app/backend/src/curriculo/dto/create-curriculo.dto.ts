import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCurriculoDto {
  @ApiProperty({
    description: 'Vaga do candidato',
    example: 'Programador fullstack',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vacancy: string;

  @ApiProperty({
    description: 'Usuário do curriculo',
    example: 'Kevin Diego da Silva Sousa',
    type: String,
  })
  @IsNumber()
  @IsNotEmpty()
  iduser: number;
}
