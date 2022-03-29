import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'shoppinglist' })
export class ShoppingListEntity extends BaseEntity {
  @Column()
  locked: boolean;
  @Column({ name: 'createdat'})
  createdAt: Date;
}