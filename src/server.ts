import 'reflect-metadata';

import { getApp } from './app';
import { dbConnect } from './infra/db';

const bootstrap = () => {
  const port = 3000;

  dbConnect()
    .then(() => {
      getApp().listen(port, () =>
        console.log(`App listening on port ${port}!`)
      );
    })
    .catch((err) => console.error('CONNECTION ERR', err));
};

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error);
});

bootstrap();
