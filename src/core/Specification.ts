import { WhereQueryData } from './WhereQueryData.interface';

export abstract class CompositeSpecification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  abstract toWhereQuery(alias?: string): WhereQueryData;

  and(otherSpecification: CompositeSpecification<T>): AndSpecification<T> {
    return new AndSpecification(this, otherSpecification);
  }

  // TODO: other composites
}

export class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(
    private leftCondition: CompositeSpecification<T>,
    private rightCondition: CompositeSpecification<T>
  ) {
    super();
  }

  isSatisfiedBy(candidate: T): boolean {
    return (
      this.leftCondition.isSatisfiedBy(candidate) &&
      this.rightCondition.isSatisfiedBy(candidate)
    );
  }

  toWhereQuery(alias?: string): WhereQueryData {
    const leftQueryData = this.leftCondition.toWhereQuery(alias);
    const rightQueryData = this.rightCondition.toWhereQuery(alias);

    return {
      query: `${leftQueryData.query} AND ${rightQueryData.query}`,
      params: { ...leftQueryData.params, ...rightQueryData.params },
    };
  }
}
