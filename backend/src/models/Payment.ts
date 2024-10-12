import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './Order';
import { PaymentMethod } from './PaymentMethod';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => PaymentMethod)
  payment_method: PaymentMethod;

  @Column('decimal')
  amount: number;

  @Column({ type: 'enum', enum: ['pending', 'completed', 'failed'] })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
