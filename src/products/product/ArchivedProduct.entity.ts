import { ChildEntity, Column } from 'typeorm';
import { Product, ProductProps, ProductType } from './Product.entity';

interface ArchivedProductProps extends ProductProps {
  archivedAt: Date;
}

@ChildEntity(ProductType.Archived)
export class ArchivedProduct extends Product {
  // price cannot be modified
  @Column({
    nullable: false,
    type: 'timestamp with time zone',
    name: 'archivedAt'
  })
  _archivedAt!: Date;

  public get archivedAt(): Date {
    return this._archivedAt;
  }

  constructor(props?: ArchivedProductProps) {
    super(props);

    this._archivedAt = props?.archivedAt!;
  }
}
