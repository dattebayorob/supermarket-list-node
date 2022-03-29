import { IdAware } from "./idaware";

export interface ShoppingList extends IdAware{
  empty?: boolean;
  locked?: boolean;
  createdAt?: Date;
}