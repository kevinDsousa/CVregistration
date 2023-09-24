import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import SkillsRepository from './repository/skills.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService, SkillsRepository, PrismaService],
})
export class SkillsModule {}
