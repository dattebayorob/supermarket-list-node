import { ProductFilters } from "src/core/domain/filter/product.filter";
import { Product } from "src/core/domain/product";
import { Pagination } from "src/core/domain/util/pagination";

export interface ProductRepository {
  findAll(filters: ProductFilters): Promise<Pagination<Product>>;
  findByShoppingListId(shoppingListId: string): Promise<Product[]>;
  existsByShoppingListId(shoppingListId: string): Promise<boolean>;
  existsById(id: string): Promise<boolean>;
}