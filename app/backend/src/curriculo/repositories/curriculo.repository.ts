import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateCurriculoDto } from '../dto/update-curriculo.dto';
import { CreateCurriculoDto } from '../dto/create-curriculo.dto';
import { CurriculoEntity } from '../entities/curriculo.entity';

@Injectable()
export class CurriculoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createCurriculoDto: CreateCurriculoDto,
  ): Promise<CurriculoEntity> {
    try {
      return await this.prisma.cvs.create({
        data: createCurriculoDto,
      });
    } catch (error) {
      throw new Error('Falha ao criar o currículo.');
    }
  }

  async findAll(): Promise<CurriculoEntity[]> {
    try {
      return await this.prisma.cvs.findMany();
    } catch (error) {
      throw new Error('Falha ao buscar os currículos.');
    }
  }

  async findOne(id: number): Promise<CurriculoEntity> {
    try {
      return await this.prisma.cvs.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error('Falha ao buscar o currículo pelo ID.');
    }
  }

  async update(
    id: number,
    updateCurriculoDto: UpdateCurriculoDto,
  ): Promise<CurriculoEntity> {
    try {
      return await this.prisma.cvs.update({
        where: {
          id,
        },
        data: updateCurriculoDto,
      });
    } catch (error) {
      throw new Error('Falha ao atualizar o currículo.');
    }
  }

  async remove(id: number): Promise<CurriculoEntity> {
    try {
      return await this.prisma.cvs.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error('Falha ao excluir o currículo.');
    }
  }
}
