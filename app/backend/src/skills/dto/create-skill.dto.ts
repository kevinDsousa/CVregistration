import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Skill a ser cadastrada',
    example: 'Java',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  nameSkill: string;
}
