import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import SkillsRepository from './repository/skills.repository';

@Injectable()
export class SkillsService {
  constructor(private readonly repository: SkillsRepository) {}

  /**
   * Função que recebe um DTO e faz validação para criar no banco o objeto
   * @param createSkillDto DTO da skill
   * @returns Retorna um erro em caso de falha ou uma skill em caso sucesso
   */
  create(createSkillDto: CreateSkillDto) {
    return this.repository.create(createSkillDto);
  }

  /**
   * Função que pega os dados da skill no banco e retorna para api
   * @returns Retorna todos elementos do banco
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
   * Função que permite atualizar uma skill com base no id
   * @param id identificador
   * @param updateSkillDto DTO para ser passado
   * @returns Retorna a atualização do seu respectivo DTO
   */
  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.repository.update(id, updateSkillDto);
  }

  /**
   * Função que apaga um cadastro no banco com base no id
   * @param id identificador
   * @returns Retorna em caso positivo um objeto que foi deletado ou lança um erro em caso negativo
   */
  remove(id: number) {
    return this.repository.remove(id);
  }
}
