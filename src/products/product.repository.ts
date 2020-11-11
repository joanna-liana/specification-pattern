import { EntityRepository, Repository } from 'typeorm';
import { CompositeSpecification } from '../core/Specification';
import { Product } from './Product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async getManyMatches(
    spec: CompositeSpecification<Product>
  ): Promise<Product[]> {
    const { query, params } = spec.toWhereQuery();

    return this.createQueryBuilder('product')
      .select()
      .where(query, params)
      .getMany();
  }
}
