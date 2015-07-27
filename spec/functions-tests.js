/* ===========================================================================
Created:	2015/07/26
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
Goal:
	you will see how you can use helper functions to develop you tests
	You will also how see code written somewhere else (range.js) can be used to develop
	you test data.
=========================================================================== */

var myArray;
beforeEach(function() {
	console.log("beforeEach: Starting removeDuplicates test");
	myArray = new MyArray();
});
afterEach(function() {
	console.log("afterEach: test removeDuplicates completed");
	myArray = null;
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
		expect( myArray.getStep([6,4,2]) ).toEqual(-2);
	});
});



describe("areConsecutive Tests", function() {
	it("special cases", function() {
		expect(function(){ myArray.areConsecutive() }).toThrow();
		expect(function(){ myArray.areConsecutive('a') }).toThrow();
		expect(function(){ myArray.areConsecutive([]) }).toThrow();
		expect( myArray.areConsecutive([1,2,3], 'xxx', [4,5,6]) ).toBeTruthy();
	});
	it("positive values", function() {
		expect( myArray.areConsecutive([4]) ).toBeTruthy();
		expect( myArray.areConsecutive([3,4]) ).toBeTruthy();
		expect( myArray.areConsecutive([4,3]) ).toBeTruthy();
		expect( myArray.areConsecutive([4,4]) ).toBeFalsy();
		expect( myArray.areConsecutive([2,3,4]) ).toBeTruthy();
		expect( myArray.areConsecutive([4,3,2]) ).toBeTruthy();
		expect( myArray.areConsecutive([3,4,2]) ).toBeFalsy();
		expect( myArray.areConsecutive([4,2,3]) ).toBeFalsy();
		expect( myArray.areConsecutive([4,4,4]) ).toBeFalsy();
	});
	it("negative values", function() {
		expect( myArray.areConsecutive([-4]) ).toBeTruthy();
		expect( myArray.areConsecutive([-3,-4]) ).toBeTruthy();
		expect( myArray.areConsecutive([-4,-3]) ).toBeTruthy();
		expect( myArray.areConsecutive([-4,-4]) ).toBeFalsy();
		expect( myArray.areConsecutive([-2,-3,-4]) ).toBeTruthy();
		expect( myArray.areConsecutive([-4,-3,-2]) ).toBeTruthy();
		expect( myArray.areConsecutive([-3,-4,-2]) ).toBeFalsy();
		expect( myArray.areConsecutive([-4,-2,-3]) ).toBeFalsy();
		expect( myArray.areConsecutive([-4,-4,-4]) ).toBeFalsy();
	});
	it("positive and negative values", function() {
		expect( myArray.areConsecutive([-1,0,1]) ).toBeTruthy();
		expect( myArray.areConsecutive([1,0,-1]) ).toBeTruthy();
		expect( myArray.areConsecutive([1,-1,-3]) ).toBeFalsy();
		expect( myArray.areConsecutive([4.1,3.1,2.1]) ).toBeTruthy();
		expect( myArray.areConsecutive([-4.1,-3.1,-2.1]) ).toBeTruthy();
		expect( myArray.areConsecutive([-3.1,-4.1,-2.1]) ).toBeFalsy();
	});
	it("positive and negative values NOT allowing duplicates", function() {
		expect( myArray.areConsecutive([0,1,2,2,3], false) ).toBeFalsy();
		expect( myArray.areConsecutive([3,2,2,1,0], false) ).toBeFalsy();
		expect( myArray.areConsecutive([-0,-1,-2,-2,-3], false) ).toBeFalsy();
		expect( myArray.areConsecutive([-3,-2,-2,-1,-0], false) ).toBeFalsy();
		expect( myArray.areConsecutive([-2,-1,0,1,1,2], false) ).toBeFalsy();
		expect( myArray.areConsecutive([2,1,1,0,-1,-2], false) ).toBeFalsy();
	});
	it("positive and negative values allowing duplicates", function() {
		expect( myArray.areConsecutive([0,1,2,2,3], true) ).toBeTruthy();
		expect( myArray.areConsecutive([3,2,2,1,0], true) ).toBeTruthy();
		expect( myArray.areConsecutive([-0,-1,-2,-2,-3], true) ).toBeTruthy();
		expect( myArray.areConsecutive([-3,-2,-2,-1,-0], true) ).toBeTruthy();
		expect( myArray.areConsecutive([-2,-1,0,1,1,2], true) ).toBeTruthy();
		expect( myArray.areConsecutive([2,1,1,0,-1,-2], true) ).toBeTruthy();
	});
});