/* ===========================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
Goal:
	Test Driven Development
	=======================
	Start by running the tests in the browser. Initially majority of tests will
	fail. Start by adding implementation and making tests succeed one after the another.
	Once all the test passes, you can be assured that your function works as expected.

	Adding more Tests
	=================
	After you have developed the function such that all the tests passes, please
	add few more tests that you may think tests areas not tested by tests provided
	by me.
=========================================================================== */


describe("Range Tests", function() {
	it("special cases", function() {
		// The first two arguments are required, skipping them returns undefined
		expect( range() ).toBeUndefined();
		expect( range(1) ).toBeUndefined();

		// Make sure that this is a valid range
		expect( range(3,2,1) ).toBeUndefined();
		expect( range(2,4,-1) ).toBeUndefined();

		// Step == 0 results in undefined
		expect( range(2,5,0) ).toBeUndefined();

		expect( range(5,1,1) ).toBeUndefined();
		expect( range(5,-6,1) ).toBeUndefined();
		expect( range(-2,-6,1) ).toBeUndefined();
		expect( range(1,5,-1) ).toBeUndefined();
		expect( range(-6,5,-1) ).toBeUndefined();
		expect( range(-6,-2,-1) ).toBeUndefined();
	});
	it("typical values - step is skipped", function() {
		// Step is skipped, we deduce the step from start and end
		// test # 1: start == end
		// Test # 2: start < end
		// Test # 3: start > end
		expect( range(3,3) ).toEqual([3]);
		expect( range(0,0) ).toEqual([0]);
		expect( range(-3,-3) ).toEqual([-3]);

		// Step is skipped, provide negative and positive values for range
		expect( range(2,6) ).toEqual([2,3,4,5,6]);
		expect( range(6,2) ).toEqual([6,5,4,3,2]);
		expect( range(-2,2) ).toEqual([-2,-1,0,1,2]);
		expect( range(2,-2) ).toEqual([2,1,0,-1,-2]);
		expect( range(-2,-6) ).toEqual([-2,-3,-4,-5,-6]);
		expect( range(-6,-2) ).toEqual([-6,-5,-4,-3,-2]);
	});
	it("typical values - step is provided", function() {
		// provide step == -1. Valid and invalid range
		expect( range(2,6,1) ).toEqual([2,3,4,5,6]);
		expect( range(-2,2,1) ).toEqual([-2,-1,0,1,2]);
		expect( range(-6,-2,1) ).toEqual([-6,-5,-4,-3,-2]);
		expect( range(6,2,-1) ).toEqual([6,5,4,3,2]);
		expect( range(2,-2,-1) ).toEqual([2,1,0,-1,-2]);
		expect( range(-2,-6,-1) ).toEqual([-2,-3,-4,-5,-6]);

		// +ve step
		expect( range(1,9,2) ).toEqual([1,3,5,7,9]);
		expect( range(1,3,15) ).toEqual([1]);
		expect( range(1,8,2.5) ).toEqual([1,3.5,6]);
		expect( range(-4,6,2) ).toEqual([-4,-2,0,2,4,6]);
		expect( range(-4,6,15) ).toEqual([-4]);
		expect( range(-6,-2,2) ).toEqual([-6,-4,-2]);
		expect( range(-4,5,2.5) ).toEqual([-4,-1.5,1,3.5]);
		expect( range(-6,-2,15) ).toEqual([-6]);
		expect( range(-2,-6,-2.5) ).toEqual([-2,-4.5]);

		// -ve step
		expect( range(9,1,-2) ).toEqual([9,7,5,3,1]);
		expect( range(3,1,-15) ).toEqual([3]);
		expect( range(8,1,-2.5) ).toEqual([8,5.5,3]);
		expect( range(6,-4,-2) ).toEqual([6,4,2,0,-2,-4]);
		expect( range(6,-4,-15) ).toEqual([6]);
		expect( range(-2,-6,-2) ).toEqual([-2,-4,-6]);
		expect( range(5,-4,-2.5) ).toEqual([5,2.5,0,-2.5]);
		expect( range(-2,-6,-15) ).toEqual([-2]);
		expect( range(-6,-2,2.5) ).toEqual([-6,-3.5]);
	});
	it("Others", function() {
		expect( range(2,6) ).toEqual([2,3,4,5,6]);
		expect( range(6,2) ).toEqual([6,5,4,3,2]);

		expect( range(-2,2) ).toEqual([-2,-1,0,1,2]);
		expect( range(2,-2) ).toEqual([2,1,0,-1,-2]);

		// Provide step == 1. valid range
		expect( range(1,5,1) ).toEqual([1,2,3,4,5]);
		expect( range(5,1,1) ).toBeUndefined();
	});
});