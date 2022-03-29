import { PageFilter } from "../util/page-filter";

export class ProductFilters extends PageFilter {
  name: string;
  categoryId: string;
  shoppingListIdToIgnore: string;
}