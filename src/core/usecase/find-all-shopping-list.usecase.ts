import { ShoppingListFilters } from "../domain/filter/shoppinglist.filter";
import { ShoppingList } from "../domain/shoppinglist";
import { Pagination } from "../domain/util/pagination";
import { ProductRepository } from "../port/in/product.repository";
import { ShoppingListRepository } from '../port/in/shoppinglist.repository';
import { UseCaseWithDependency } from "../util";

type Dependencies = {
  shoppingListRepository: ShoppingListRepository,
  productRepository: ProductRepository
}

type UseCase = UseCaseWithDependency<Dependencies, (filters: ShoppingListFilters) => Promise<Pagination<ShoppingList>>>;

export const findAllShoppingList: UseCase = ({ shoppingListRepository, productRepository }) => {
  return async (filters) => {
    const pagination = await shoppingListRepository.findAll(filters);
    for (const shoppingList of pagination.content) {
      shoppingList.empty = !(await productRepository.existsByShoppingListId(shoppingList.id));
    }
    return pagination;
  }
}