import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, UsersRepository, JwtStrategy],
  exports: [UserService],
})
export class UserModule {}
