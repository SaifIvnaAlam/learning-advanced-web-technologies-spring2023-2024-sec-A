import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRep: Repository<Admin>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const newProduct = await this.adminRep.create(createAdminDto);
    return await this.adminRep.save(newProduct);
  }

  async findAll() {
    return await this.adminRep.find();
  }

  async findOne(id: number) {
    return await this.adminRep.findOne({ where: { id: id } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const updatedProduct = await this.adminRep.findOne({ where: { id: id } });
    Object.assign(updatedProduct, updateAdminDto);
    return await this.adminRep.save(updatedProduct);
  }

  async remove(id: number) {
    return await this.adminRep.delete(id);
  }
}
