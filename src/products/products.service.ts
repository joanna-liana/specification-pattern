import { ElectronicsProductsSpecification } from './specs/ElectronicsProducts.specification';
import { ProductsForSaleSpecification } from './specs/ProductsForSale.specification';
import { Product } from './product/Product.entity';
import { ProductRepository } from './product.repository';
import { Collection } from './collection/Collection.entity';
import { ActiveProduct } from './product/ActiveProduct.entity';

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

  async applyCyberMondayPromo(product: ActiveProduct): Promise<Product> {
    const productsForSaleSpec = new ProductsForSaleSpecification();
    const electronicsSpec = new ElectronicsProductsSpecification();

    const isEligibleForPromo = productsForSaleSpec
      .and(electronicsSpec)
      .isSatisfiedBy(product);

    if (!isEligibleForPromo) {
      throw new Error('Cyber Monday promo does not apply to this product');
    }

    product.applyPromo();

    await this.productRepo.save(product);

    return product;
  }

  impossibleActiveProductManipulation() {
    // imagine a collection fetched from the repo
    // that is supposed to have an ActiveProduct
    const collection = new Collection();

    // these are always going to be of type Product
    const { products } = collection;

    // casting like this won't really work, since we migth be missing fields (data)
    const activeProduct = products[0] as ActiveProduct;

    // instead, if I expect a specific subtype, I should fetch that instead
    // getRepository(ActiveProduct).findOne(activeProductId)
  }
}
