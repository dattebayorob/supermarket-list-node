import { PageFilter } from "../util/page-filter";

export interface ShoppingListFilters extends PageFilter {
  after?: Date;
  before?: Date;
}