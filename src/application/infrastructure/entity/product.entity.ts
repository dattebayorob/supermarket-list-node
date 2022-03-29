import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ProductCategory } from "./product-category.entity";

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @Column()
  name: string;
  @ManyToOne(() => ProductCategory, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: ProductCategory
}