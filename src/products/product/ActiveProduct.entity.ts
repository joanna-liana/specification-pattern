import { ChildEntity, Column } from 'typeorm';
import { Product, ProductProps, ProductType } from './Product.entity';

interface ActiveProductProps extends ProductProps {
  price: number;
}

@ChildEntity(ProductType.Active)
export class ActiveProduct extends Product {
  @Column({
    nullable: false,
    name: 'price'
  })
  _price!: number;

  constructor(props?: ActiveProductProps) {
    super(props);

    this._price = props?.price ?? 0;
  }

  applyPromo(): void {
    this._price = this.price - (this.price * 0.2)
  }
}
