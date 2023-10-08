import { Request } from 'express';
import { UserEntity } from 'src/user/entities/user.entity';

export interface AuthRequestModel extends Request {
  user: UserEntity;
}
