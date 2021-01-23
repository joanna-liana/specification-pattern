import {
  AfterUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';
import { Category } from './Category.entity';
import { ProductStatus } from './ProductStatus';

interface ProductProps {
  id?: number;
  category: Category;
  status: ProductStatus;
  name: string;
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id!: number;

  @VersionColumn({ name: 'version', default: 1 })
  private _version!: number;

  @Column({ name: 'name' })
  private _name!: string;

  @Column({ nullable: true })
  editMe!: string;

  @Column({ name: 'status' })
  private _status!: ProductStatus;

  @ManyToOne(() => Category, { cascade: true })
  private _category!: Category;

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

  get category(): Category {
    return this._category;
  }

  setName(name: string): void {
    this._name = name;
  }
}
