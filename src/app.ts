import express, { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { ProductRepository } from './products/product.repository';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

export const getApp = () => {
  const app = express();

  app.set('trust proxy', 1);

  const productService = new ProductsService(
    getCustomRepository(ProductRepository)
  );
  const productController = new ProductsController(productService);

  app.use(
    '/api/v1/products/electronics',
    productController.getElectronicsForSale.bind(productController)
  );

  app.use(
    '/api/v1/products',
    productController.getProductsForSale.bind(productController)
  );

  app.use((req: Request, res: Response) => {
    res.status(404).send(`Not found ${req.path}`);
  });

  app.use((err: any, _req: Request, res: Response) => {
    console.log(err);
    res.status(500).send(err);
  });

  return app;
};
