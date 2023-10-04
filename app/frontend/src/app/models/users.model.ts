import { SkillsModel } from "./skills.model";

export interface UsersModel {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  birthday: string;
  phone: string;
  password: string;
  education:
    | 'FUNDAMENTAL_COMPLETO'
    | 'MEDIO_INCOMPLETO'
    | 'MEDIO_COMPLETO'
    | 'SUPERIOR_INCOMPLETO'
    | 'SUPERIOR_COMPLETO'
    | 'MESTRADO'
    | 'DOUTORADO';
  idskill: number
  skills: SkillsModel;
  admin?: boolean;
}
