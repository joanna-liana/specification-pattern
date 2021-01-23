import { Column, Entity, PrimaryGeneratedColumn, VersionColumn } from 'typeorm';

interface ProductProps {
  id?: number;
  name: string;
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id!: number;

  @VersionColumn({ name: 'version', default: 1 })
  private _version!: number;

  @Column({ name: 'name' })
  private _name!: string;

  constructor(props: ProductProps = null) {
    if (!props) {
      return;
    }

    const { name, id } = props;

    this._id = id;
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  public updateName(name: string): void {
    this._name = name;
  }
}
