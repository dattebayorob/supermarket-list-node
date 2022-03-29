
export class ShoppingListFilterRequest {
  sort?: string[];
  after?: Date;
  before?: Date;
  page?: number;
  size?: number;
}