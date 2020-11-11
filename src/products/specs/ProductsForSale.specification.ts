import { CompositeSpecification } from '../../core/Specification';
import { WhereQueryData } from '../../core/WhereQueryData.interface';
import { Product } from '../Product.entity';
import { ProductStatus } from '../ProductStatus';

export class ProductsForSaleSpecification extends CompositeSpecification<
  Product
> {
  isSatisfiedBy(candidate: Product): boolean {
    return candidate.status === ProductStatus.PUBLISHED;
  }

  toWhereQuery(alias?: string): WhereQueryData {
    return {
      query: `${alias || 'product'}."status" = :status`,
      params: { status: ProductStatus.PUBLISHED },
    };
  }
}