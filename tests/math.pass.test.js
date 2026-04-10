const { add, multiply } = require('../app/math');

describe('Math module - passing tests', () => {
    test('adds 2 + 2 = 4', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('multiplies 3 * 3 = 9', () => {
        expect(multiply(3, 3)).toBe(9);
    });
});