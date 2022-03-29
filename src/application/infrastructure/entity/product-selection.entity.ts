import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'product_selection'})
export class ProductSelectionEntity {
  @PrimaryColumn({ name: 'product_id', type: 'uuid', nullable: false })
  productId: string;
  @PrimaryColumn({ name: 'shoppinglist_id', type: 'uuid', nullable: false })
  shoppingListId: string;
  @Column({ name: 'user_id' })
  userId: string;
  @Column()
  quantity: number;
  @Column()
  checked: boolean;
}