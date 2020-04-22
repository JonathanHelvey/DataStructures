// Test File

const triplet = require("./findTriplets");

// Two differant ways to write jest Tests!

test("Outputs Triplets", function() {
  expect(triplet([12, 3, 4, 1, 1, 1], 24)).toBe(false)
});


describe('Triplet', () => {
  it("is a function", () => {
    expect(typeof triplet).toEqual("function");
  });

  it("returns true or false.", () => {
    let returnedValue = triplet([12, 3, 4, 8, 1, 1], 24);
    expect(returnedValue).toEqual(true);
  });
})