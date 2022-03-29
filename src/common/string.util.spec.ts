import StringUtil from './string.util';

describe("String utilities", () => {
    const str = 'ABCD';
    const emptyTrim = '  ';
    it('Empty strings from utility must have same reference in memory', () => {
        expect(StringUtil.emptyString).toBe(StringUtil.emptyString);
    });
    it('Should return false if collection is not empty', () => {
        expect(StringUtil.isEmpty(str)).toBeFalsy();
        expect(StringUtil.isEmpty(emptyTrim)).toBeTruthy();
    });
    it('Should return true is collection is Not Empty', () => {
        expect(StringUtil.isNotEmpty(str)).toBeTruthy();
    });
});