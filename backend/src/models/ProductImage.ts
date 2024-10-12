import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';

@Entity('product_images')
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  alt_text: string;

  @Column({ default: false })
  is_featured: boolean;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
