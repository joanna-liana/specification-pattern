import { createConnection } from 'typeorm';
import { connectionOptions } from '../infra/db';

import { seedCategories } from './categories.seed';
import { seedProducts } from './products.seed';

(async () => {
  const connection = await createConnection(connectionOptions as any);

  await seedCategories(connection);
  await seedProducts(connection);
})();
