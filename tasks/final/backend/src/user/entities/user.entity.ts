import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  date: string;

  @Column({ nullable: false })
  phonenumber: string;

  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
