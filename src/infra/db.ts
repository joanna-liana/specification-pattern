import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import { Category } from '../products/Category.entity';
import { Product } from '../products/Product.entity';
import { OptimisticLockingSubscriber } from './OptimisticLocking.subscriber';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'specification_pattern',
  entities: [Product, Category],
  subscribers: [OptimisticLockingSubscriber],
  synchronize: true,
  logging: ['error'],
};

export const dbConnect = (options?: ConnectionOptions) =>
  createConnection(options || connectionOptions).catch((error) =>
    console.log('TYPEORM ERROR\n', error)
  );
