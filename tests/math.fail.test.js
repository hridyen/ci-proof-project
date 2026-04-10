const { add } = require('../app/math');

describe('Math module - intentional failing test', () => {
    test('intentional failure for CI proof', () => {
        expect(add(2, 2)).toBe(5);
    });
});