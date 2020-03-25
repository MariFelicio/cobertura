const NumFinder = require('../lib/numfinder');
const numFinder = new NumFinder();

describe('NumFinder', () => {
    test('works with ordered array', () => {
        numFinder.find([1, 10]);
        expect(numFinder.smallest).toBe(1);
        expect(numFinder.largest).toBe(10);
    });
  });