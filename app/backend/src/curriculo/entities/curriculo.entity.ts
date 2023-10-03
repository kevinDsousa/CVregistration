export class CurriculoEntity {
  id: number;
  name: string;
  email: string;
  vacancy: string;
  cpf: string;
  birthday: Date;
  phone: string;
  idskill: number;
  education:
    | 'FUNDAMENTAL_COMPLETO'
    | 'MEDIO_INCOMPLETO'
    | 'MEDIO_COMPLETO'
    | 'SUPERIOR_INCOMPLETO'
    | 'SUPERIOR_COMPLETO'
    | 'MESTRADO'
    | 'DOUTORADO';
  createdAt: Date;
}
