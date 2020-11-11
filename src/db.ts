import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Product } from './products/Product.entity';

export const connectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'specification_pattern',
  entities: [Product],
  synchronize: true,
  logging: true,
};

export const dbConnect = () =>
  createConnection(connectionOptions as any).catch((error) =>
    console.log('TYPEORM ERROR\n', error)
  );
