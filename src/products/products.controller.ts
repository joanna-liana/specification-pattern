import { Request, Response } from 'express';
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
}
