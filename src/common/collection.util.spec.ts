import CollectionUtil from './collection.util';
describe('Collection Utilities', () => {
    const collection = ['A', 'B', 'C', 'D'];
    it('Empty collections from utility must have same reference in memory', () => {
        expect(CollectionUtil.emptyList).toBe(CollectionUtil.emptyList);
    });
    it('Should return false if collection is not empty', () => {
        expect(CollectionUtil.isEmpty(collection)).toBeFalsy();
    });
    it('Should return true is collection is Not Empty', () => {
        expect(CollectionUtil.isNotEmpty(collection)).toBeTruthy();
    });
})