import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkillEntity } from '../entities/skill.entity';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { NotFoundError } from 'src/common/erros/types/NotFoundError';

@Injectable()
export default class SkillsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSkillDto: CreateSkillDto): Promise<SkillEntity> {
    try {
      return await this.prisma.skills.create({
        data: createSkillDto,
      });
    } catch (error) {
      throw new Error('Falha ao criar a habilidade.');
    }
  }

  async findAll(): Promise<SkillEntity[]> {
    try {
      return await this.prisma.skills.findMany();
    } catch (error) {
      throw new Error('Falha ao buscar as habilidades.');
    }
  }

  async findOne(id: number): Promise<SkillEntity> {
    try {
      const skill = this.prisma.skills.findUnique({
        where: {
          id,
        },
      });
      if (!skill) {
        throw new NotFoundError('Habilidade não encontrada.');
      }
      return skill;
    } catch (error) {
      throw new Error('Falha ao buscar a habilidade pelo ID.');
    }
  }

  async update(
    id: number,
    updateSkillDto: UpdateSkillDto,
  ): Promise<SkillEntity> {
    try {
      const skillId = await this.findOne(id);
      if (!skillId) {
        throw new NotFoundError('Habilidade não encontrada');
      }
      return await this.prisma.skills.update({
        where: {
          id,
        },
        data: updateSkillDto,
      });
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      } else {
        throw new Error('Falha ao atualizar a habilidade.');
      }
    }
  }

  async remove(id: number): Promise<SkillEntity> {
    try {
      const skill = await this.findOne(id);
      if (!skill) {
        throw new NotFoundError('Habilidade não encontrada');
      }
      return await this.prisma.skills.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      } else {
        throw new Error('Falha ao excluir a habilidade.');
      }
    }
  }
}
