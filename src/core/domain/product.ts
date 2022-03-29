import { ProductCategory } from "src/application/infrastructure/entity/product-category.entity";
import { IdAware } from "./idaware";

export interface Product extends IdAware{
  name?: string;
  category?: ProductCategory;
}