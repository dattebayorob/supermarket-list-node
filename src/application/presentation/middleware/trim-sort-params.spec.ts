import { TrimSortedParamsMiddleware } from "./trim-sort-params"

describe('TrimSortedParams', () => {
  const trimSortedParams = new TrimSortedParamsMiddleware();
  it('Should trim sorted params if is passed', () => {
    const sorts = [ 'createdAt, desc', 'name,asc'];
    const req = { query: { sort: sorts }};
    trimSortedParams.use(req as any, {} as any, () => {});
    expect(req.query.sort[0]).toBe('createdAt,desc');
  })
})