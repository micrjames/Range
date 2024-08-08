import { Range } from "../Range";

describe("Range operator.", () => {
   const rangeSize = 5;
   const range = new Range(rangeSize);
   const nums: number[] = [...range];
   test("Should be a sequence of 5 numbers.", () => {
	  expect(nums).toHaveLength(rangeSize);
   });
   test("Should output a sequence of the first 5 numbers.", () => {
	  expect(nums).toEqual([0, 1, 2, 3, 4]);
   });
});

