import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('payment_methods')
export class PaymentMethod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.paymentMethods)
  user: User;

  @Column({ type: 'enum', enum: ['credit_card', 'paypal'] })
  type: string;

  @Column()
  provider: string;

  @Column({ select: false })
  account_number: string;
}
