export class UserEntity {
  id: number;
  name: string;
  email: string;
  cpf: string;
  birday: Date;
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
  idskill: number;
  admin: boolean;
  createdAt: Date;
}
