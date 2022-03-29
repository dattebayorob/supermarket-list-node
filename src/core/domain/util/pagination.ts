import CollectionUtil from "src/common/collection.util";

export class Pagination<T> {
  content: T[];
  page: number;
  size: number;
  total: number;
  private constructor();
  private constructor(content: T[]);
  private constructor(content: T[], page: number, size: number, total: number);
  private constructor(content?: T[], page?: number, size?: number, total?: number) {
    this.content = content;
    this.page = page;
    this.size = size;
    this.total = total;
  }
  map<U>(mapper: (value: T) => U): Pagination<U> {
    const content = CollectionUtil.map(this.content, mapper);
    return new Pagination<U>(
      content,
      this.page,
      this.size,
      this.total,
    );
  }
  forEach(consumer: (value: T, index?: number) => void): void {
    this.content.forEach(consumer);
  }
  static empty<U = any>(): Pagination<U> {
    return Pagination.of(CollectionUtil.emptyList);
  }
  static of<U>(content: U[]): Pagination<U>;
  static of<U>(content: U[], total: number): Pagination<U>;
  static of<U>(content: U[], total?: number): Pagination<U> {
    return new Pagination<U>(content, 0, 10, total || content.length);
  }
}