import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/add-product')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  //get all products
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get('/product/:id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch('/update-product/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete('/remove-product/:id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
