import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { OrderItem } from './OrderItem';
import { Address } from './Address';
import { Coupon } from './Coupon';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ type: 'enum', enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'] })
  status: string;

  @Column('decimal')
  total_price: number;

  @ManyToOne(() => Address)
  shipping_address: Address;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Coupon, { nullable: true })
  coupon: Coupon;

  @Column('decimal', { default: 0 })
  discount_total: number;
}
