import 'reflect-metadata';
import { GenericContainer, StartedTestContainer } from 'testcontainers';
import { ConnectionOptions, Connection, createConnection } from 'typeorm';
import { connectionOptions } from '../../infra/db';

const TEST_DB_NAME = 'playground_test';
const PG_USER = 'postgres';

export interface TestContainerData {
  container: StartedTestContainer;
  port: number;
}

export const setupTestPostgres = async (): Promise<TestContainerData> => {
  const PG_PORT = 5432;
  const pgContainer = new GenericContainer('postgres', '12.1')
    .withExposedPorts(PG_PORT)
    .withEnv('POSTGRES_USER', PG_USER)
    .withEnv('POSTGRES_DB', TEST_DB_NAME);
  const pgContainerStarted = await pgContainer.start();
  const containerPort = pgContainerStarted.getMappedPort(PG_PORT);

  console.log(`test Postgres port: ${containerPort}`);

  return {
    container: pgContainerStarted,
    port: containerPort,
  };
};

export const setupTypeOrmTestConnection = async (pgPort?: number): Promise<Connection> => {
  let port = pgPort as number;

  if (!pgPort) {
    const { port: containerPort } = await setupTestPostgres();

    port = containerPort;
  }

  const opts = getTestDatabaseConnectionOptions(port);


  const connection = await createConnection(opts);
  await connection.runMigrations();
  return connection;
};

export const getTestDatabaseConnectionOptions = (
  dbPort: number
): ConnectionOptions => ({
  ...connectionOptions,
  host: 'localhost',
  port: dbPort,
  username: 'postgres',
  password: 'postgres',
  database: TEST_DB_NAME,
} as any);
