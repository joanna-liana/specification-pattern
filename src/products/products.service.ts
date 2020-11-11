import { ElectronicsProductsSpecification } from './specs/ElectronicsProducts.specification';
import { ProductsForSaleSpecification } from './specs/ProductsForSale.specification';
import { Product } from './Product.entity';
import { ProductRepository } from './product.repository';

export class ProductsService {
  constructor(private readonly productRepo: ProductRepository) {}

  // sample spec usage in query
  async getProductsForSale(): Promise<Product[]> {
    const spec = new ProductsForSaleSpecification();

    return this.productRepo.getManyMatches(spec);
  }

  // sample spec usage in query
  async getElectronicsForSale(): Promise<Product[]> {
    const productsForSaleSpec = new ProductsForSaleSpecification();
    const electronicsSpec = new ElectronicsProductsSpecification();

    const spec = productsForSaleSpec.and(electronicsSpec);

    return this.productRepo.getManyMatches(spec);
  }

  // sample spec usage in code
  applyCyberMondayPromo(product: Product): Product {
    const productsForSaleSpec = new ProductsForSaleSpecification();
    const electronicsSpec = new ElectronicsProductsSpecification();

    const isEligibleForPromo = productsForSaleSpec
      .and(electronicsSpec)
      .isSatisfiedBy(product);

    if (!isEligibleForPromo) {
      throw new Error('Cyber Monday promo does not apply to this product');
    }

    // TODO: apply some discount
    return product;
  }
}
