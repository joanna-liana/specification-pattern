import 'reflect-metadata';
import { ConnectionOptions, createConnection } from 'typeorm';
import { OptimisticLockingSubscriber } from './OptimisticLocking.subscriber';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'specification_pattern',
  entities: ['src/**/*.entity.ts'],
  subscribers: [OptimisticLockingSubscriber],
  synchronize: true,
  logging: ['error'],
};

export const dbConnect = (options?: ConnectionOptions) =>
  createConnection(options || connectionOptions).catch((error) =>
    console.log('TYPEORM ERROR\n', error)
  );
