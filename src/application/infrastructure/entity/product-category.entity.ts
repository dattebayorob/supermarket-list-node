import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ProductEntity } from "./product.entity";

@Entity({ name: 'product_category' })
export class ProductCategory extends BaseEntity {
  @Column()
  name: string
  @OneToMany(() => ProductEntity, product => product.category)
  products: ProductEntity[]
}