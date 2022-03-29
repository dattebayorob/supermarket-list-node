import { Controller, Get, Query } from "@nestjs/common";
import { ProductRepositoryImpl as ProductRepository } from "src/application/infrastructure/repository/product.repository";
import { ShoppingListRepositoryImpl as ShoppingListRepository } from "src/application/infrastructure/repository/shoppinglist.repository";
import { findAllShoppingList } from "src/core/usecase/find-all-shopping-list.usecase";
import { ShoppingListFilterRequest } from "./shopping-list-filter-request";

@Controller({ path: '/api' })
export class FindShoppingListController {
  constructor(
    private readonly shoppingListRepository: ShoppingListRepository,
    private readonly productRepository: ProductRepository
  ) {}

  @Get('/v1/lists')
  findAll(
    @Query() filters: ShoppingListFilterRequest,
  ) {
    const useCase = findAllShoppingList({ 
      shoppingListRepository: this.shoppingListRepository, productRepository: this.productRepository
    });
    return useCase({ ...filters, sort: filters.sort || ['createdAt,desc']  });
  }
}