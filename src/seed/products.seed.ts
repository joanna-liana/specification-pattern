import { Connection } from 'typeorm';

import { Product } from '../products/product/Product.entity';
import { ProductStatus } from '../products/product/ProductStatus';
import { categories } from './categories.seed';

const products: Product[] = [
  new Product({
    id: 1,
    category: categories[0],
    status: ProductStatus.DRAFT,
    name: 'pyra z gzikiem',
  }),
  new Product({
    id: 2,
    category: categories[1],
    status: ProductStatus.PUBLISHED,
    name: 'ChinaPhone',
  }),
  new Product({
    id: 3,
    category: categories[1],
    status: ProductStatus.DRAFT,
    name: 'ChinaBook',
  }),
  new Product({
    id: 4,
    category: categories[2],
    status: ProductStatus.ARCHIVED,
    name: 'Teddy Bear™',
  }),
  new Product({
    id: 5,
    category: categories[2],
    status: ProductStatus.PUBLISHED,
    name: 'RoboBear',
  }),
];

export const seedProducts = async (connection: Connection) => {
  await connection.manager.insert(Product, products);
};
