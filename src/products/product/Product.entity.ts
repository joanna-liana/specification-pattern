import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
  VersionColumn,
} from 'typeorm';
import { Category } from '../category/Category.entity';
import { Collection } from '../collection/Collection.entity';
import { ProductStatus } from './ProductStatus';

export interface ProductProps {
  id?: number;
  category: Category;
  status: ProductStatus;
  name: string;
}

export enum ProductType {
  Archived = 'Archived',
  Active = 'Active',
}

@Entity()
@TableInheritance({
  column: {
    type: 'enum',
    enum: ProductType,
    name: 'type',
    default: ProductType.Active,
  },
})
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id!: number;

  @VersionColumn({ name: 'version', default: 1 })
  private _version!: number;

  @Column({ name: 'name' })
  private _name!: string;

  @Column({ nullable: true })
  editMe!: string;

  @Column({ name: 'status', type: 'varchar' })
  private _status!: ProductStatus;

  @ManyToOne(() => Category, { cascade: true })
  private _category!: Category;

  @Column()
  public collectionId!: number;

  @ManyToOne(() => Collection)
  public collection!: Collection;

  @Column({ nullable: true })
  _price?: number;

  constructor(props?: ProductProps) {
    if (!props) {
      return;
    }

    const { category, status, name, id } = props;

    if (id) {
      this._id = id;
    }

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

  get category(): Category {
    return this._category;
  }

  get price(): number {
    return this.price;
  }

  setName(name: string): void {
    this._name = name;
  }
}
