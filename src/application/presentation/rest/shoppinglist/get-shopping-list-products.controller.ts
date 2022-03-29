import { Controller, Get, Param } from "@nestjs/common";
import { ProductRepositoryImpl } from "src/application/infrastructure/repository/product.repository";
import { findProductsByShoppingList } from "src/core/usecase/find-products-by-shopping-list.usecase";

@Controller({ path: '/api' })
export class GetShoppingListProducts {
  constructor(
    private readonly productRepository: ProductRepositoryImpl
  ) {}

  @Get('/v1/lists/:shoppingListId/products')
  findByShoppingListId(
    @Param('shoppingListId') shoppingListId: string
  ) {
    const useCase = findProductsByShoppingList({ productRepository: this.productRepository });
    return useCase(shoppingListId);
  }
}