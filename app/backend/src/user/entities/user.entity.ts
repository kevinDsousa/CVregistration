export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  admin?: boolean;
  createdAt: Date;
}
