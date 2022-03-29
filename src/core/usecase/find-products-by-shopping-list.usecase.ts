import { Product } from "../domain/product";
import { ProductRepository } from "../port/in/product.repository";
import { UseCaseWithDependency } from "../util";

type Dependencies = {
  productRepository: ProductRepository
}

type UseCase = UseCaseWithDependency<Dependencies, (shoppingListId: string) => Promise<Product[]>>;

export const findProductsByShoppingList: UseCase = ({ productRepository }) => {
  return async (shoppingListId) => {
    return await productRepository.findByShoppingListId(shoppingListId);
  }
}