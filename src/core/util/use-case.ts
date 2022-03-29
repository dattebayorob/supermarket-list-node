export type UseCaseWithDependency<T, U extends (...params: any) => any> = (dependencies: T) => U;
export type UseCaseWithoutDependencies<U extends (...params: any) => any> = () => U;