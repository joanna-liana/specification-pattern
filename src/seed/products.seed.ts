import { createConnection } from 'typeorm';
import { connectionOptions } from '../db';
import { Product } from '../products/Product.entity';
import { ProductStatus } from '../products/ProductStatus';

const products: Product[] = [
  new Product({
    id: 1,
    category: 'groceries',
    status: ProductStatus.DRAFT,
    name: 'pyra z gzikiem',
  }),
  new Product({
    id: 2,
    category: 'electronics',
    status: ProductStatus.PUBLISHED,
    name: 'ChinaPhone',
  }),
  new Product({
    id: 3,
    category: 'electronics',
    status: ProductStatus.DRAFT,
    name: 'ChinaBook',
  }),
  new Product({
    id: 4,
    category: 'toys',
    status: ProductStatus.ARCHIVED,
    name: 'Teddy Bear™',
  }),
  new Product({
    id: 5,
    category: 'toys',
    status: ProductStatus.PUBLISHED,
    name: 'RoboBear',
  }),
];

export const seedProducts = async () => {
  const connection = await createConnection(connectionOptions as any);
  await connection.manager.insert(Product, products);
};
