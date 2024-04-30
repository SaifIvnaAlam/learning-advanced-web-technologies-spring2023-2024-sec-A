import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
//@UseGuards(JwtGuard)
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('by-name/:name')
  findByUsername(@Param('name') name: string) {
    return this.usersService.findByusername(name);
  }
}
