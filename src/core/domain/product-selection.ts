import { Product } from "./product";
import { ShoppingList } from "./shoppinglist";
import { User } from "./user";

export interface ProductSelection {
  product: Product;
  quantity: number;
  shoppingList: ShoppingList;
  user: User;
  checked: boolean;
}