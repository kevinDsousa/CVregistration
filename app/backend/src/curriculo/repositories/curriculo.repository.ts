import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCurriculoDto } from '../dto/create-curriculo.dto';
import { UpdateCurriculoDto } from '../dto/update-curriculo.dto';
import { CurriculoEntity } from '../entities/curriculo.entity';

@Injectable()
export class CurriculoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createCurriculoDto: CreateCurriculoDto,
  ): Promise<CurriculoEntity> {
    return this.prisma.cvs.create({
      data: createCurriculoDto,
    });
  }

  async findAll(): Promise<CurriculoEntity[]> {
    return this.prisma.cvs.findMany();
  }

  async findOne(id: number): Promise<CurriculoEntity> {
    return this.prisma.cvs.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateCurriculoDto: UpdateCurriculoDto,
  ): Promise<CurriculoEntity> {
    return this.prisma.cvs.update({
      where: {
        id,
      },
      data: updateCurriculoDto,
    });
  }

  async remove(id: number): Promise<CurriculoEntity> {
    return this.prisma.cvs.delete({
      where: {
        id,
      },
    });
  }
}
