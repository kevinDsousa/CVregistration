import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CurriculoModule } from './curriculo/curriculo.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CurriculoModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
