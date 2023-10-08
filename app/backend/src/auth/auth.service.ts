import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserPayLoad } from './models/user-payload';
import { UserEntity } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/user-token';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserEntity): UserToken {
    const payload: UserPayLoad = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findbyEmail(email);

    if (user) {
      const isPasswordvalid = await bcrypt.compare(password, user.password);
      if (isPasswordvalid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email e ou senha incorreta');
  }
}
