import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductStatus } from './ProductStatus';

interface ProductProps {
  id?: number;
  category: string;
  status: ProductStatus;
  name: string;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id!: number;

  @Column({ name: 'name' })
  private _name!: string;

  @Column({ name: 'status' })
  private _status!: ProductStatus;

  @Column({ name: 'category' })
  private _category!: string;

  constructor(props: ProductProps = null) {
    if (!props) {
      return;
    }

    const { category, status, name, id } = props;

    this._id = id;
    this._category = category;
    this._name = name;
    this._status = status;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get status(): ProductStatus {
    return this._status;
  }

  get category(): string {
    return this._category;
  }
}
