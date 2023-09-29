import { UsersModel } from "./users.model";

export interface CurriculumModel {
  id?: number
  vacancy: string;
  iduser?: number;
  user: UsersModel;
}
