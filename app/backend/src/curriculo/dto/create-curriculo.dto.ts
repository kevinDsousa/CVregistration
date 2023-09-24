import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
    description: 'Empresa',
    example: 'Oracle',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  company: string;
}
