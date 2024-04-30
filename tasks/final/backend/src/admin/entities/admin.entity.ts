import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productInfo')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  productName: string;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false })
  price: string;

  @Column({ nullable: false })
  quantity: string;
}
