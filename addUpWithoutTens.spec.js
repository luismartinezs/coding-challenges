const addUpWithoutTens = require("./addUpWithoutTens.js");

test("Does not add multiples of 10", () => {
  expect(addUpWithoutTens(1)).toEqual(1);
  expect(addUpWithoutTens(5)).toEqual(15);
  expect(addUpWithoutTens(9)).toEqual(45);
  expect(addUpWithoutTens(10)).toEqual(45);
  expect(addUpWithoutTens(11)).toEqual(56);
  expect(addUpWithoutTens(19)).toEqual(180);
  expect(addUpWithoutTens(20)).toEqual(180);
});
