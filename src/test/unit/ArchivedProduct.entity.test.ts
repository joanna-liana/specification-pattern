import { ArchivedProduct } from '../../products/product/ArchivedProduct.entity';
import { Product } from '../../products/product/Product.entity';

describe('Archived Product', () => {

  it('creates an archived product', () => {
    const archivedProduct = new Product();

    expect(archivedProduct).toBeInstanceOf(Product);
  });

  it('cannot modify the price', async () => {
    // given
    const archivedProduct = new ArchivedProduct();

    // when, then
    expect(() => {
      // @ts-ignore
      archivedProduct.price = 100;
    }).toThrow();
  });
});
