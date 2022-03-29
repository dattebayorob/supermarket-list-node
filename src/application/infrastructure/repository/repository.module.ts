import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { ProductEntity } from "../entity/product.entity";
import { ShoppingListEntity } from "../entity/shopping-list.entity";
import { ProductRepositoryImpl } from "./product.repository";
import { ShoppingListRepositoryImpl } from "./shoppinglist.repository";

const config: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "postgres",
  username: "postgres",
  password: "postgres",
  extra: {
    max: 2,
    poolSize: 1
  },
  entities:[__dirname + '/../**/*.entity.js']
}

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      ShoppingListEntity,
      ProductEntity
    ])
  ],
  exports: [
    TypeOrmModule,
    ProductRepositoryImpl,
    ShoppingListRepositoryImpl
  ],
  providers: [
    ProductRepositoryImpl,
    ShoppingListRepositoryImpl,
  ]
})
export class RepositoryModule {}