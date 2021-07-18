import { StartedTestContainer } from 'testcontainers';
import { Connection } from 'typeorm';

// Ensure file is treated as a module
export { };

declare global {
  namespace NodeJS {
    interface Global {
      testConn: Connection;
      testPgContainer: StartedTestContainer;
    }
  }
}
