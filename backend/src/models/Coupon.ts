import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Product } from './Product';

@Entity('coupons')
export class Coupon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column('decimal', { default: 0 })
  discount_amount: number;

  @Column('decimal', { default: 0 })
  discount_percentage: number;

  @Column({ type: 'decimal', nullable: true })
  min_purchase_amount: number;

  @Column({ type: 'timestamp', nullable: true })
  expiration_date: Date;

  @Column({ type: 'enum', enum: ['active', 'expired', 'used'], default: 'active' })
  status: string;

  @ManyToMany(() => Product)
  applicable_products: Product[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
