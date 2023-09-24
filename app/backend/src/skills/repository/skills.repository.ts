import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SkillEntity } from '../entities/skill.entity';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';

@Injectable()
export default class SkillsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSkillDto: CreateSkillDto): Promise<SkillEntity> {
    return this.prisma.skills.create({
      data: createSkillDto,
    });
  }

  async findAll(): Promise<SkillEntity[]> {
    return this.prisma.skills.findMany();
  }

  async findOne(id: number): Promise<SkillEntity> {
    return this.prisma.skills.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateSkillDto: UpdateSkillDto,
  ): Promise<SkillEntity> {
    return this.prisma.skills.update({
      where: {
        id,
      },
      data: updateSkillDto,
    });
  }

  async remove(id: number): Promise<SkillEntity> {
    return this.prisma.skills.delete({
      where: {
        id,
      },
    });
  }
}
