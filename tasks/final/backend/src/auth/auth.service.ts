import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string) {
    const user = await this.userService.findByusername(name);
    if (!user) {
      console.log('not found');
      throw new BadRequestException();
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('wrong pass');
      throw new UnauthorizedException();
    }
    return user;
  }
  async login(user: User) {
    const payload = {
      username: user.username,
      sub: {
        email: user.email,
      },
    };
    return {
      message: 'login successful',
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
