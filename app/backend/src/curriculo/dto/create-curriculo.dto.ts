import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCurriculoDto {
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Vaga do candidato',
    example: 'Programador fullstack',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  vacancy: string;

  @IsNumber()
  idSkill: number;
}
