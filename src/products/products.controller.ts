import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from './Product.entity';
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
}
