import { SkillsModel } from "./skills.model";
import { UsersModel } from "./users.model";

export interface CurriculumModel {
  id?: number
  name: string;
  email: string
  vacancy: string;
  cpf: string;
  birthday: string;
  phone: string;
  education: string;
  idskill: SkillsModel;
}
