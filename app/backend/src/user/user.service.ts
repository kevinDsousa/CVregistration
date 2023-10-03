import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UsersRepository) {}

  /**
   * Função que recebe um DTO e faz validação para criar no banco o objeto
   * @param createUserDto DTO do curriculo
   * @returns Retorna um erro em caso de falha ou um candidato em caso sucesso
   */
  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  /**
   * Função que pega os dados de usuarios no banco e retorna para api
   * @returns Retorna todos os usuários
   */
  findAll() {
    return this.repository.findAll();
  }

  /**
   * Função que pesquisa no banco de dados com base no id
   * @param id Identificador de um elemento
   * @returns Retorna um elemento com base no id
   */
  findOne(id: number) {
    return this.repository.findOne(id);
  }

  /**
   * Função que permite atualizar um candidato com base no id
   * @param id identificador
   * @param updateUserDto DTO para ser passado
   * @returns Retorna a atualização do seu respectivo DTO
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  /**
   * Função que apaga um cadastro no banco com base no id
   * @param id identificador
   * @returns Retorna em caso positivo um objeto que foi deletado ou lança um erro em caso negativo
   */
  remove(id: number) {
    return this.repository.remove(id);
  }

  findByEmailAndPassword(email: string, password: string) {
    return this.repository.findByEmailAndPassword(email, password);
  }
}
