import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterToOrmOptionBuilder } from "src/application/util";
import { ShoppingListFilters } from "src/core/domain/filter/shoppinglist.filter";
import { ShoppingList } from "src/core/domain/shoppinglist";
import { Pagination } from "src/core/domain/util/pagination";
import { ShoppingListRepository } from 'src/core/port/in/shoppinglist.repository';
import { LessThan, MoreThan, Repository } from "typeorm";
import { ShoppingListEntity } from "../entity/shopping-list.entity";

@Injectable()
export class ShoppingListRepositoryImpl implements ShoppingListRepository {
  constructor(
    @InjectRepository(ShoppingListEntity) private readonly shoppingListRepository: Repository<ShoppingListEntity>
  ){}
  async findAll(filters: ShoppingListFilters): Promise<Pagination<ShoppingList>> {
    const options = FilterToOrmOptionBuilder<ShoppingListEntity>(filters)
      .option(!!filters.before, () => ({ createdAt: LessThan(filters.before) }))
      .option(!!filters.after, () => ({ createdAt: MoreThan(filters.after)}))
      .paged().sorted()
    .build();
    const [ lists, total ] = await this.shoppingListRepository.findAndCount(options);
    return Pagination.of(lists.map(sl => ({ ...sl })), total)
  }
  async findById(id: string): Promise<ShoppingList | undefined> {
    return this.shoppingListRepository.findOne({ where: { id } });
  }
  async save(shoppingList: ShoppingList): Promise<ShoppingList> {
    return this.shoppingListRepository.save(shoppingList);
  }
}