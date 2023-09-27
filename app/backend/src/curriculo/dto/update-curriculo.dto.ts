import { PartialType } from '@nestjs/swagger';
import { CreateCurriculoDto } from './create-curriculo.dto';

export class UpdateCurriculoDto extends PartialType(CreateCurriculoDto) {}
