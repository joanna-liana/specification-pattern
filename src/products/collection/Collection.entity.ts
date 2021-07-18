import {
  ChildEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product, ProductProps, ProductType } from '../product/Product.entity';

// User collection of favourite products, products that go well together (e.g. clothes), etc.
@Entity()
export class Collection {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number;

  @OneToMany(() => Product, (product) => product.collection)
  products!: Product[];
}
