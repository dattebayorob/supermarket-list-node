import { Controller, Get, Query } from "@nestjs/common";
import { ProductRepositoryImpl } from "src/application/infrastructure/repository/product.repository";
import { ProductFilters } from "src/core/domain/filter/product.filter";
import { findAllProducts } from "src/core/usecase/find-all-products.usecase";

@Controller({ path: '/api' })
export class FindAllProductsController {
  constructor(
    private readonly productRepository: ProductRepositoryImpl
  ){}
  @Get('/v1/products')
  findAll(
    @Query() filters: ProductFilters
  ) {
    const useCase = findAllProducts({ productRepository: this.productRepository });
    return useCase(filters);
  }
}