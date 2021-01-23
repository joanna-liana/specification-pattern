import { Connection } from 'typeorm';
import { Category } from '../products/Category.entity';

export const categories: Category[] = [
  new Category({ name: 'groceries', id: 1 }),
  new Category({ name: 'electronics', id: 2 }),
  new Category({ name: 'toys', id: 3 }),
];

export const seedCategories = async (connection: Connection) => {
  await connection.manager.insert(Category, categories);
};
