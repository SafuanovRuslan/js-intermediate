const script = require('../task-3/task-3');

const sum = script.app.sum;
const dif = script.app.dif;
const prod = script.app.prod;
const quot = script.app.quot;

describe('Функция sum()', () => {
    it('должна возвращать 10 при аргументах (7, 3)', () => {
        expect(sum(7, 3)).toBe(10);
    });
    it('должна возвращать 15 при аргументах (12, 3)', () => {
        expect(sum(12, 3)).toBe(15);
    });
    it('должна возвращать NaN при аргументах (7, NaN)', () => {
        expect(sum(7, NaN)).toBeNaN();
    })
});

describe('Функция dif()', () => {
    it('должна возвращать 4 при аргументах (7, 3)', () => {
        expect(dif(7, 3)).toBe(4);
    });
    it('должна возвращать 9 при аргументах (12, 3)', () => {
        expect(dif(12, 3)).toBe(9);
    });
    it('должна возвращать NaN при аргументах (7, "Hello world")', () => {
        expect(dif(7, "Hello world")).toBeNaN();
    })
});

describe('Функция prod()', () => {
    it('должна возвращать 21 при аргументах (7, 3)', () => {
        expect(prod(7, 3)).toBe(21);
    });
    it('должна возвращать 36 при аргументах (12, 3)', () => {
        expect(prod(12, 3)).toBe(36);
    });
    it('должна возвращать NaN при аргументах (undefined, 3)', () => {
        expect(prod(undefined, 3)).toBeNaN();
    })
});

describe('Функция quot()', () => {
    it('должна возвращать 3 при аргументах (9, 3)', () => {
        expect(quot(9, 3)).toBe(3);
    });
    it('должна возвращать 4 при аргументах (12, 3)', () => {
        expect(quot(12, 3)).toBe(4);
    });
    it('должна возвращать NaN при аргументах (null, 3)', () => {
        expect(quot(null, 3)).toBeNaN();
    })
})