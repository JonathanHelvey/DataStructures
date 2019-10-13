/* eslint-disable react/no-array-index-key */
const sumEvensOnly = require("../03-SumEvensOnly/sumEvensOnly");

test("adds 2 + 4 to equal 6", () => {
  expect(sumEvensOnly(1, 5)).toBe(6);
});
// 6

test("adds evens to equal 90", () => {
  expect(sumEvensOnly(10, 20)).toBe(90);
});
// 90

test("adds -100 + 100 to equal 0", () => {
  expect(sumEvensOnly(-100, 100)).toBe(0);
});
// 0
