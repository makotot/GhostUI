import * as percentage from '.';

describe('percentage', () => {
  describe('calc', () => {
    it('1/10 should be 10%', () => {
      expect(percentage.calc({ value: 1, total: 10 })).toBe(10);
    });
    it('5/10 should be 50%', () => {
      expect(percentage.calc({ value: 5, total: 10 })).toBe(50);
    });
    it('10/10 should be 100%', () => {
      expect(percentage.calc({ value: 10, total: 10 })).toBe(100);
    });
  });
});
