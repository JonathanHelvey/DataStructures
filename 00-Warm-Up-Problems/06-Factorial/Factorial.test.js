const factorial = require("../06-Factorial/Factorial");

describe('Factorial', () => {
  it("is a function", () => {
    expect(typeof factorial).toEqual("function");
  });

  it("returns the factorial of 4", () => {
    let returnedValue = factorial(4);
    expect(returnedValue).toEqual(24);
  });
})