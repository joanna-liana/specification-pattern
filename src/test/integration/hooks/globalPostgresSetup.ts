import { setupTestPostgres } from '../integrationSetup';

module.exports = async () => {
  console.log('\nGLOBAL SETUP START');
  const { port, container } = await setupTestPostgres();

  global.testPgContainer = container;

  process.env.TEST_PG_PORT = `${port}`;

  console.log('GLOBAL SETUP END');
};
