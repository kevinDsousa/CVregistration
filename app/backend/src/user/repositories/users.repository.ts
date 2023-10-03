import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DatabaseError } from 'src/common/erros/types/DataBaseError';
import { NotFoundError } from 'src/common/erros/types/NotFoundError';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.prisma.users.create({
        data: createUserDto,
      });
    } catch (error) {
      throw new DatabaseError('Falha ao criar o usuário.');
    }
  }

  // async createUserAndSkills(
  //   createUserDto: CreateUserDto,
  //   skills: SkillEntity[],
  // ): Promise<UserEntity> {
  //   const transaction = await this.prisma.$transaction([
  //     this.prisma.users.create({
  //       data: createUserDto,
  //     }),
  //     ...skills.map((skill) =>
  //       this.prisma.skills.create({
  //         data: skill,
  //       }),
  //     ),
  //   ]);

  //   if (transaction[0] instanceof UserEntity) {
  //     return transaction[0] as UserEntity;
  //   } else {
  //     throw new DatabaseError('Falha ao criar o usuário e as habilidades.');
  //   }
  // }

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
   * Encontre um usuário por e-mail e senha
   * @param email Email do usuário
   * @param password Senha do usuário
   * @returns Retorna o usuário se encontrado, caso contrário, retorna null
   */
  async findByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    try {
      const user = await this.findByEmailAndPassword(email, password);
      return user;
    } catch (error) {
      throw new NotFoundError('Não localizado usuário ou senha');
    }
  }
}
