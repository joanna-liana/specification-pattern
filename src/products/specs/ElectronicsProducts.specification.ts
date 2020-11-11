import { CompositeSpecification } from '../../core/Specification';
import { WhereQueryData } from '../../core/WhereQueryData.interface';
import { Product } from '../Product.entity';

export class ElectronicsProductsSpecification extends CompositeSpecification<
  Product
> {
  isSatisfiedBy(candidate: Product): boolean {
    return candidate.category === 'electronics';
  }

  toWhereQuery(alias?: string): WhereQueryData {
    return {
      query: `${alias || 'product'}."category" <> :category`,
      params: { category: 'electronics' },
    };
  }
}
