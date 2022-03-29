import { Pagination } from "../../domain/util/pagination";
import { ShoppingListFilters } from "../../domain/filter/shoppinglist.filter";
import { ShoppingList } from "../../domain/shoppinglist";

export interface ShoppingListRepository {
  findById(id: string): Promise<ShoppingList | undefined>;
  findAll(filters: ShoppingListFilters): Promise<Pagination<ShoppingList>>;
  save(shoppingList: ShoppingList): Promise<ShoppingList>;
}