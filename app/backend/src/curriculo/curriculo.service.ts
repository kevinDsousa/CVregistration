import { Injectable } from '@nestjs/common';
import { CreateCurriculoDto } from './dto/create-curriculo.dto';
import { UpdateCurriculoDto } from './dto/update-curriculo.dto';
import { CurriculoRepository } from './repositories/curriculo.repository';

@Injectable()
export class CurriculoService {
  constructor(private readonly repository: CurriculoRepository) {}

  /**
   * Função que recebe um DTO e faz validação para criar no banco o objeto
   * @param createCurriculoDto DTO do curriculo
   * @returns Retorna um erro em caso de falha ou um candidato em caso sucesso
   */
  create(createCurriculoDto: CreateCurriculoDto) {
    return this.repository.create(createCurriculoDto);
  }

  /**
   * Função que pega os dados de curriculo no banco e retorna para api
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
   * Função que permite atualizar um candidato com base no id
   * @param id identificador
   * @param updateCurriculoDto DTO para ser passado
   * @returns Retorna a atualização do seu respectivo DTO
   */
  update(id: number, updateCurriculoDto: UpdateCurriculoDto) {
    return this.repository.update(id, updateCurriculoDto);
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
