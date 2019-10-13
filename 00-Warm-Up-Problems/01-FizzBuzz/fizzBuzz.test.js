/* eslint-disable react/no-array-index-key */

const fizzBuzz = require("./fizzBuzz");

test("gives 1 when given 1 as an argument", function() {
  expect(fizzBuzz(1)).toEqual(["1"]);
});
