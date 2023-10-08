import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DatabaseError } from 'src/common/erros/types/DataBaseError';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 12),
      };

      const createUser = await this.prisma.users.create({
        data,
      });

      return {
        ...createUser,
        password: undefined,
      };
    } catch (error) {
      throw new DatabaseError('Falha ao criar o usuário.');
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.prisma.users.findMany({});
    } catch (error) {
      throw new DatabaseError('Falha ao buscar os usuários.');
    }
  }

  async findOne(id: number): Promise<UserEntity> {
    try {
      return await this.prisma.users.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error('Falha ao buscar o usuário pelo ID.');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    try {
      return await this.prisma.users.update({
        where: {
          id,
        },
        data: updateUserDto,
      });
    } catch (error) {
      throw new DatabaseError('Falha ao atualizar o usuário.');
    }
  }

  async remove(id: number): Promise<UserEntity> {
    try {
      return await this.prisma.users.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new DatabaseError('Falha ao excluir o usuário.');
    }
  }

  /**
   * Encontre um usuário por e-mail
   * @param email Email do usuário
   * @returns Retorna o usuário se encontrado, caso contrário, retorna null
   */
  async findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: { email: email }
    });
  }
  
}
