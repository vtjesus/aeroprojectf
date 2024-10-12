import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './Category';
import { Brand } from './Brand';
import { ProductImage } from './ProductImage';
import { Promotion } from './Promotion';
import { Tag } from './Tag';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column('int')
  stock_quantity: number;

  @Column({ unique: true })
  sku: string;

  @Column({ type: 'enum', enum: ['available', 'out_of_stock', 'discontinued'] })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @OneToMany(() => ProductImage, (productImage) => productImage.product)
  images: ProductImage[];

  @ManyToMany(() => Promotion, (promotion) => promotion.products)
  promotions: Promotion[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable()
  tags: Tag[];
}
