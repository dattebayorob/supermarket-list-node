import { ProductFilters } from "../domain/filter/product.filter"
import { Product } from "../domain/product"
import { Pagination } from "../domain/util/pagination"
import { ProductRepository } from "../port/in/product.repository"
import { UseCaseWithDependency } from "../util"

type Dependencies = {
  productRepository: ProductRepository
}

type UseCase = UseCaseWithDependency<Dependencies, (filters: ProductFilters) => Promise<Pagination<Product>>>;

export const findAllProducts: UseCase = ({ productRepository }) => {
  return async (filters) => {
    return productRepository.findAll(filters);
  }
}