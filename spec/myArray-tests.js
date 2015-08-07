/* =====================================================================================
Created:	2015/07/26
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
Goal:
	you will see how you can use helper functions to develop you tests
	You will also how see code written somewhere else (range.js) can be used to develop
	you test data.
===================================================================================== */

var myArray;
beforeEach(function() {
	console.log("beforeEach: Starting removeDuplicates test");
	myArray = new MyArray();
});
afterEach(function() {
	console.log("afterEach: test removeDuplicates completed");
	myArray = null;
});



describe("Range Tests", function() {
	it("special cases", function() {
		// The first two arguments are required, skipping them returns undefined
		expect( myArray.range() ).toBeUndefined();
		expect( myArray.range(1) ).toBeUndefined();

		// Make sure that this is a valid range
		expect( myArray.range(3,2,1) ).toBeUndefined();
		expect( myArray.range(2,4,-1) ).toBeUndefined();

		// Step == 0 results in undefined
		expect( myArray.range(2,5,0) ).toBeUndefined();

		expect( myArray.range(5,1,1) ).toBeUndefined();
		expect( myArray.range(5,-6,1) ).toBeUndefined();
		expect( myArray.range(-2,-6,1) ).toBeUndefined();
		expect( myArray.range(1,5,-1) ).toBeUndefined();
		expect( myArray.range(-6,5,-1) ).toBeUndefined();
		expect( myArray.range(-6,-2,-1) ).toBeUndefined();
	});
	it("typical values - step is skipped", function() {
		// Step is skipped, we deduce the step from start and end
		// test # 1: start == end
		// Test # 2: start < end
		// Test # 3: start > end
		expect( myArray.range(3,3) ).toEqual([3]);
		expect( myArray.range(0,0) ).toEqual([0]);
		expect( myArray.range(-3,-3) ).toEqual([-3]);

		// Step is skipped, provide negative and positive values for range
		expect( myArray.range(2,6) ).toEqual([2,3,4,5,6]);
		expect( myArray.range(6,2) ).toEqual([6,5,4,3,2]);
		expect( myArray.range(-2,2) ).toEqual([-2,-1,0,1,2]);
		expect( myArray.range(2,-2) ).toEqual([2,1,0,-1,-2]);
		expect( myArray.range(-2,-6) ).toEqual([-2,-3,-4,-5,-6]);
		expect( myArray.range(-6,-2) ).toEqual([-6,-5,-4,-3,-2]);
	});
	it("typical values - step is provided", function() {
		// provide step == -1. Valid and invalid range
		expect( myArray.range(2,6,1) ).toEqual([2,3,4,5,6]);
		expect( myArray.range(-2,2,1) ).toEqual([-2,-1,0,1,2]);
		expect( myArray.range(-6,-2,1) ).toEqual([-6,-5,-4,-3,-2]);
		expect( myArray.range(6,2,-1) ).toEqual([6,5,4,3,2]);
		expect( myArray.range(2,-2,-1) ).toEqual([2,1,0,-1,-2]);
		expect( myArray.range(-2,-6,-1) ).toEqual([-2,-3,-4,-5,-6]);

		// +ve step
		expect( myArray.range(1,9,2) ).toEqual([1,3,5,7,9]);
		expect( myArray.range(1,3,15) ).toEqual([1]);
		expect( myArray.range(1,8,2.5) ).toEqual([1,3.5,6]);
		expect( myArray.range(-4,6,2) ).toEqual([-4,-2,0,2,4,6]);
		expect( myArray.range(-4,6,15) ).toEqual([-4]);
		expect( myArray.range(-6,-2,2) ).toEqual([-6,-4,-2]);
		expect( myArray.range(-4,5,2.5) ).toEqual([-4,-1.5,1,3.5]);
		expect( myArray.range(-6,-2,15) ).toEqual([-6]);
		expect( myArray.range(-2,-6,-2.5) ).toEqual([-2,-4.5]);

		// -ve step
		expect( myArray.range(9,1,-2) ).toEqual([9,7,5,3,1]);
		expect( myArray.range(3,1,-15) ).toEqual([3]);
		expect( myArray.range(8,1,-2.5) ).toEqual([8,5.5,3]);
		expect( myArray.range(6,-4,-2) ).toEqual([6,4,2,0,-2,-4]);
		expect( myArray.range(6,-4,-15) ).toEqual([6]);
		expect( myArray.range(-2,-6,-2) ).toEqual([-2,-4,-6]);
		expect( myArray.range(5,-4,-2.5) ).toEqual([5,2.5,0,-2.5]);
		expect( myArray.range(-2,-6,-15) ).toEqual([-2]);
		expect( myArray.range(-6,-2,2.5) ).toEqual([-6,-3.5]);
	});
	it("Others", function() {
		expect( myArray.range(2,6) ).toEqual([2,3,4,5,6]);
		expect( myArray.range(6,2) ).toEqual([6,5,4,3,2]);

		expect( myArray.range(-2,2) ).toEqual([-2,-1,0,1,2]);
		expect( myArray.range(2,-2) ).toEqual([2,1,0,-1,-2]);

		// Provide step == 1. valid range
		expect( myArray.range(1,5,1) ).toEqual([1,2,3,4,5]);
		expect( myArray.range(5,1,1) ).toBeUndefined();
	});
});



describe("removeDuplicates Tests", function() {
	it("special cases: MyArray is defined", function() {
		myArray = new MyArray([1,2,3,1]);
		expect( myArray.removeDuplicates() ).toEqual([1,2,3]);
		expect( myArray.removeDuplicates('a') ).toEqual([1,2,3]);

		myArray.setArray([5,4,2,2,3,1]);
		expect( myArray.removeDuplicates() ).toEqual([5,4,2,3,1]);
		expect( myArray.removeDuplicates('a') ).toEqual([5,4,2,3,1]);

		myArray.setArray('asd');
		expect( myArray.removeDuplicates() ).toEqual([5,4,2,3,1]);
		expect( myArray.removeDuplicates('a') ).toEqual([5,4,2,3,1]);
	});
	it("special cases: MyArray is undefined", function() {
		expect(function(){ myArray.removeDuplicates() }).toThrow();
		expect(function(){ myArray.removeDuplicates('a') }).toThrow();
		expect(function(){ myArray.removeDuplicates([]) }).toThrow();
		expect( myArray.removeDuplicates([1,2,3], 'xxx', [4,5,6]) ).toEqual([1,2,3]);
	});
	it("no duplicate value", function() {
		expect( myArray.removeDuplicates([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
		expect( myArray.removeDuplicates([-1,-2,-3,-4,-5]) ).toEqual([-1,-2,-3,-4,-5]);
		expect( myArray.removeDuplicates([-1,2,-3,4,8]) ).toEqual([-1,2,-3,4,8]);
		expect( myArray.removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]) ).toEqual([-1.4,2.9,-3.2,4.4,-2.9]);
	});
	it("duplicate values", function() {
		expect( myArray.removeDuplicates([-1,-2,-3,-2,-5]) ).toEqual([-1,-2,-3,-5]);
		expect( myArray.removeDuplicates([-1,2,-3,4,2]) ).toEqual([-1,2,-3,4]);
		expect( myArray.removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]) ).toEqual([-1.4,2.9,-3.2,4.4]);
		expect( myArray.removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]) ).toEqual([-1.4,2.9,-3.2,4.4]);
		expect( myArray.removeDuplicates([1,1,2,2,3,3,2,3,1,3]) ).toEqual([1,2,3]);
	});
});



describe("hasDuplicates Tests", function() {
	it("special cases", function() {
		expect(function(){ myArray.hasDuplicates() }).toThrow();
		expect(function(){ myArray.hasDuplicates('a') }).toThrow();
		expect(function(){ myArray.hasDuplicates([]) }).toThrow();
		expect( myArray.hasDuplicates([1,2,3], 'xxx', [4,5,6]) ).toBeFalsy();
	});
	it("no duplicate value", function() {
		expect( myArray.hasDuplicates([2,4,3,1]) ).toBeFalsy();
		expect( myArray.hasDuplicates([-2,-4,-3,-1]) ).toBeFalsy();
		expect( myArray.hasDuplicates([-2,-5,1,9]) ).toBeFalsy();
		expect( myArray.hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9]) ).toBeFalsy();
	});
	it("duplicate values", function() {
		expect( myArray.hasDuplicates([2,1,3,1]) ).toBeTruthy();
		expect( myArray.hasDuplicates([-2,-1,-3,-1]) ).toBeTruthy();
		expect( myArray.hasDuplicates([-2,-5,-5,9]) ).toBeTruthy();
		expect( myArray.hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9]) ).toBeTruthy();
	});
});



describe("getStep Tests", function() {
	it("special cases: MyArray is undefined", function() {
		expect(function(){ myArray.getStep() }).toThrow();
		expect(function(){ myArray.getStep('a') }).toThrow();
		expect(function(){ myArray.getStep([]) }).toThrow();
		expect( myArray.getStep([6]) ).toEqual(0);
	});
	it("positive values", function() {
		expect( myArray.getStep([2,4,6]) ).toEqual(2);
		expect( myArray.getStep([-2,0,2]) ).toEqual(2);
		expect( myArray.getStep([-6,-4,-2]) ).toEqual(2);
	});
	it("negative values", function() {
		expect( myArray.getStep([6,4,2]) ).toEqual(-2);
		expect( myArray.getStep([2,0,-2]) ).toEqual(-2);
		expect( myArray.getStep([-2,-4,-6]) ).toEqual(-2);
	});
});



describe("areConsecutiveSorted Tests", function() {
	it("special cases", function() {
		expect(function(){ myArray.areConsecutiveSorted() }).toThrow();
		expect(function(){ myArray.areConsecutiveSorted('a') }).toThrow();
		expect(function(){ myArray.areConsecutiveSorted([]) }).toThrow();
		expect( myArray.areConsecutiveSorted([1,2,3], 'xxx', [4,5,6]) ).toBeTruthy();
	});
	it("positive values", function() {
		expect( myArray.areConsecutiveSorted([4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([3,4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([4,3]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([4,4]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([2,3,4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([4,3,2]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([3,4,2]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([4,2,3]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([4,4,4]) ).toBeFalsy();
	});
	it("negative values", function() {
		expect( myArray.areConsecutiveSorted([-4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-3,-4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-4,-3]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-4,-4]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-2,-3,-4]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-4,-3,-2]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-3,-4,-2]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-4,-2,-3]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-4,-4,-4]) ).toBeFalsy();
	});
	it("positive and negative values", function() {
		expect( myArray.areConsecutiveSorted([-1,0,1]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([1,0,-1]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([1,-1,-3]) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([4.1,3.1,2.1]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-4.1,-3.1,-2.1]) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-3.1,-4.1,-2.1]) ).toBeFalsy();
	});
	it("positive and negative values NOT allowing duplicates", function() {
		expect( myArray.areConsecutiveSorted([0,1,2,2,3], false) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([3,2,2,1,0], false) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-0,-1,-2,-2,-3], false) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-3,-2,-2,-1,-0], false) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([-2,-1,0,1,1,2], false) ).toBeFalsy();
		expect( myArray.areConsecutiveSorted([2,1,1,0,-1,-2], false) ).toBeFalsy();
	});
	it("positive and negative values allowing duplicates", function() {
		expect( myArray.areConsecutiveSorted([0,1,2,2,3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([3,2,2,1,0], true) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-0,-1,-2,-2,-3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-3,-2,-2,-1,-0], true) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([-2,-1,0,1,1,2], true) ).toBeTruthy();
		expect( myArray.areConsecutiveSorted([2,1,1,0,-1,-2], true) ).toBeTruthy();
	});
});


describe("areConsecutiveUnsorted Tests", function() {
	it("NOT allowing duplicates", function() {
		expect( myArray.areConsecutiveUnSorted([2,4,1,5,3], false) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2,0,1,3,-1], false) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2.3,4.3,5.3,3.3], false) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2.3,4.3,5.3,3.3,4.3], false) ).toBeFalsy();
		expect( myArray.areConsecutiveUnSorted([-2.3,-4.3,-5.3,-3.3], false) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([-2.3,-4.3,-5.3,-3.3,-4.3], false) ).toBeFalsy();
		expect( myArray.areConsecutiveUnSorted([1.2,-1.8,-0.8,0.2], false) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([1.2,-1.8,-0.8,0.2,-1.8], false) ).toBeFalsy();
	});
	it("allowing duplicates", function() {
		expect( myArray.areConsecutiveUnSorted([2,4,1,5,3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2,0,1,3,-1], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2.3,4.3,5.3,3.3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([2.3,4.3,5.3,3.3,4.3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([-2.3,-4.3,-5.3,-3.3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([-2.3,-4.3,-5.3,-3.3,-4.3], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([1.2,-1.8,-0.8,0.2], true) ).toBeTruthy();
		expect( myArray.areConsecutiveUnSorted([1.2,-1.8,-0.8,0.2,-1.8], true) ).toBeTruthy();
	});
});