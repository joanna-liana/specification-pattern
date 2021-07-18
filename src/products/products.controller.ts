import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { ActiveProduct } from './product/ActiveProduct.entity';
import { Collection } from './collection/Collection.entity';
import { Product } from './product/Product.entity';
import { ProductsService } from './products.service';

export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  async getProductsForSale(req: Request, res: Response): Promise<void> {
    const result = await this.productService.getProductsForSale();

    res.json(result);
  }

  async getElectronicsForSale(req: Request, res: Response): Promise<void> {
    const result = await this.productService.getElectronicsForSale();

    res.json(result);
  }

  async testOptimisticLocking(req: Request, res: Response): Promise<void> {
    const repo = getRepository(Product);
    const product = await repo.findOne(3, {
      relations: ['_category'],
    });

    product.category.updateName('inna' + Date.now());

    product.editMe = 'abc' + Date.now();

    const inBetweenProduct = await repo.findOne(3, {
      relations: ['_category'],
    });

    inBetweenProduct.category.updateName('inna' + Date.now());

    await repo.save(inBetweenProduct);

    // this save is gonna throw - the product is stale
    // even if it's relation has been updated
    await repo.save(product);

    res.json(product);
  }

  async addActiveProduct(req: Request, res: Response): Promise<void> {
    const repo = getRepository(ActiveProduct);

    // active product can be added to the collection
    // but it cannot be fetched - only a Product instance is reachable
    // when querying Collection.products
    const product = new ActiveProduct();
    const collection = new Collection();

    collection.products = [product];

    await repo.save(product);
  }
}
