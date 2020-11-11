import 'reflect-metadata';

import { getApp } from './app';
import { dbConnect } from './db';

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

bootstrap();
