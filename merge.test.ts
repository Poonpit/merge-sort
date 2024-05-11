import { merge } from './merge';

describe('merge function', () => {
    it('should merge and sort arrays in ascending order', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [7, 6, 4, 2];
        const collection3 = [0, 8, 9, 10];
        const result = merge(collection1, collection2, collection3);
        // expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
