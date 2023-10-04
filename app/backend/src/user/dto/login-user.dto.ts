import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'nome do usuário',
    example: 'Kevin Diego da Silva Sousa',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(4)
  password: string;
}
