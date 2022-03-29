import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterToOrmOptionBuilder } from "src/application/util";
import { ProductFilters } from "src/core/domain/filter/product.filter";
import { Pagination } from "src/core/domain/util/pagination";
import { ProductRepository } from 'src/core/port/in/product.repository';
import { ILike, Repository } from "typeorm";
import { ProductEntity } from "../entity/product.entity";

@Injectable()
export class ProductRepositoryImpl implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>
  ) {}
  async existsById(id: string) {
    return await this.productRepository.countBy({ id }) > 0;
  }
  async existsByShoppingListId(shoppingListId: string) {
    const [{ exists }] = await this.productRepository.query(Queries.existsByShoppingListId, [ shoppingListId ]);
    return exists;
  }
  async findByShoppingListId(shoppingListId: string) {
    const products = await this.productRepository.query(Queries.findByShoppingListId, [ shoppingListId ]);
    return products.map( ({ category_id: id, category_name: name, ...product }) => ({ ...product, category: { id, name }}));
  }
  async findAll(filters: ProductFilters) {
    const options = FilterToOrmOptionBuilder<ProductEntity>(filters)
      .option(!!filters.name, () => ({ name: ILike(`%${filters.name}%`)}))
      .option(!!filters.categoryId, () => ({ category: { id: filters.categoryId }}))
      .sorted().paged()
    .build();
    const [ products, total ] = await this.productRepository.findAndCount({
      ...options, relations: { category: true }
    });
    return Pagination.of(products.map(product => ({ ...product })), total);
  }
}

const Queries = {
  existsByShoppingListId: 'select case when exists (select 1 from product p join product_selection ps on ps.product_id = p.id where ps.shoppinglist_id = $1) then true else false end as exists',
  findByShoppingListId: 'select p.*, pc.name as category_name from product p join product_selection ps on ps.product_id = p.id join product_category pc on pc.id = p.category_id where ps.shoppinglist_id = $1 order by p.name'
}