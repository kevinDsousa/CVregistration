import { users } from '@prisma/client';

export class UserEntity implements users {
  id: number;
  name: string;
  email: string;
  birday: Date;
  idcv: number;
}
