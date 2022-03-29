import JsonUtil from './json.util';
describe('Json Utilities', () => {
    const birthday = new Date('1993-11-18T00:00:00.000Z');
    const obj = { id: 1, name: 'Just a Name', birthday};
    const json = `{"id": 1, "name": "Just a Name", "birthday": "1993-18-11 00:00:00"}`;
    it('Should serialize', () => {
        expect(JsonUtil.serialize(obj)).not.toBeNull();
    });
    it('Should deserialize', () => {
        expect(JsonUtil.deserialize(json)).not.toBeNull();
    });
})