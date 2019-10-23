/* eslint-disable react/no-array-index-key */

const oddCouple = require("../04-oddCouple/oddCouple");

test("is a function", () => {
  expect(typeof oddCouple).toEqual("function");
});

test("returns an array", () => {
  let returnedValue = oddCouple([1, 2, 3]);
  expect(Array.isArray(returnedValue)).toEqual(true);
});

test("returns an array with the first two odd numbers from the input", () => {
  let returnedValue = oddCouple([3, 6, 9, 12, 15]);
  expect(returnedValue).toEqual([3, 9]);
});

test("returns an array with the only odd number if the input has only one odd number", () => {
  let returnedValue = oddCouple([14, 21, 28]);
  expect(returnedValue).toEqual([21]);
});

test("returns an empty array if the input has no odd numbers", () => {
  let returnedValue = oddCouple([4, 8, 12, 16]);
  expect(returnedValue).toEqual([]);
});
