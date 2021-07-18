import { setupTypeOrmTestConnection } from '../integrationSetup';

beforeAll(async () => {
  console.log('AFTER ENV SETUP START');
  global.testConn = await setupTypeOrmTestConnection(+process.env.TEST_PG_PORT);
  console.log('AFTER ENV SETUP DONE');
});

afterAll(async () => {
  console.log('AFTER ENV TEARDOWN START');
  await global.testConn.close();
  console.log('AFTER ENV TEARDOWN DONE');
});
