import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({
    description: 'Skill a ser cadastrada',
    example: 'Java',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  nameSkill: string;
}
