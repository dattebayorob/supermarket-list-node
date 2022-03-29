import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RepositoryModule } from './application/infrastructure/repository/repository.module';
import { TrimSortedParamsMiddleware } from './application/presentation/middleware/trim-sort-params';
import { FindAllProductsController } from './application/presentation/rest/product/find-all-products.controller';
import { FindShoppingListController } from './application/presentation/rest/shoppinglist/find-shopping-list.controller';
import { GetShoppingListProducts } from './application/presentation/rest/shoppinglist/get-shopping-list-products.controller';



@Module({
  imports: [
    RepositoryModule
  ],
  controllers: [
    FindShoppingListController,
    GetShoppingListProducts,
    FindAllProductsController
  ],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TrimSortedParamsMiddleware).forRoutes('*');
  }
}