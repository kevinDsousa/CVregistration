import { Module } from '@nestjs/common';
import { CurriculoService } from './curriculo.service';
import { CurriculoController } from './curriculo.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurriculoRepository } from './repositories/curriculo.repository';

@Module({
  controllers: [CurriculoController],
  providers: [CurriculoService, PrismaService, CurriculoRepository],
})
export class CurriculoModule {}
