import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { Category } from './Category';

@Entity('promotions')
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal', { nullable: true })
  discount_amount: number;

  @Column('decimal', { nullable: true })
  discount_percentage: number;

  @Column({ type: 'timestamp', nullable: true })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  end_date: Date;

  @ManyToMany(() => Product, (product) => product.promotions)
  products: Product[];

  @ManyToOne(() => Category)
  category: Category;

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: string;
}
