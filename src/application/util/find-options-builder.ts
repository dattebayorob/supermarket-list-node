import { PageFilter } from "src/core/domain/util/page-filter";
import { FindManyOptions, FindOptionsWhere } from "typeorm";
import { BaseEntity } from "../infrastructure/entity/base.entity";

interface Builder<T extends BaseEntity, U = any> {
  option(predicate: (( filter: U) => boolean) | boolean, option: ((filter: U) => FindOptionsWhere<T>) | FindOptionsWhere<T>): this;
  sorted(): this;
  paged(): this;
  build(): FindManyOptions<T>;
}

export const FilterToOrmOptionBuilder = <T extends BaseEntity, U = any>(filter: U): Builder<T, U> => {
  let options: FindManyOptions<T> = {};
  const where: FindOptionsWhere<T>[] = [];
  return {
    option(predicate, option) {
      const isTrue = typeof predicate === 'function' ? predicate(filter) : predicate;
      if ( isTrue ) {
        where.push(typeof option === 'function' ? option(filter) : option);
      }
      return this;
    },
    sorted() {
      const { sort } = filter as PageFilter;
      if ( sort?.length ) {
        options.order = sort
          .reduce((preview: any, currentValue: string) => {
            const [ field, direction ] = currentValue.split(',');
            return { ...preview, [field] : direction || 'asc' };
          }, {});
      }
      return this;
    },
    paged() {
      const { size = 10, page = 0 } = filter as PageFilter;
      if ( size > 0 ) {
        options.take = size;
        options.skip = page * size;
      }
      return this;
    },
    build() {
      if ( where?.length ) {
        options.where = where;
      }
      return options;
    }
  }
}