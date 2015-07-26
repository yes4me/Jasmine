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


describe("removeDuplicates Tests", function() {
	it("special cases", function() {
		expect(function(){ removeDuplicates() }).toThrow();
		expect(function(){ removeDuplicates('a') }).toThrow();
		expect(function(){ removeDuplicates([1,2,3], [1,2,3]) }).toThrow();
	});
	it("no duplicate value", function() {
		expect( removeDuplicates([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
		expect( removeDuplicates([-1,-2,-3,-4,-5]) ).toEqual([-1,-2,-3,-4,-5]);
		expect( removeDuplicates([-1,2,-3,4,8]) ).toEqual([-1,2,-3,4,8]);
		expect( removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]) ).toEqual([-1.4,2.9,-3.2,4.4,-2.9]);
	});
	it("duplicate values", function() {
		expect( removeDuplicates([-1,-2,-3,-2,-5]) ).toEqual([-1,-2,-3,-5]);
		expect( removeDuplicates([-1,2,-3,4,2]) ).toEqual([-1,2,-3,4]);
		expect( removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]) ).toEqual([-1.4,2.9,-3.2,4.4]);
		expect( removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]) ).toEqual([-1.4,2.9,-3.2,4.4]);
		expect( removeDuplicates([1,1,2,2,3,3,2,3,1,3]) ).toEqual([1,2,3]);
	});
});

describe("hasDuplicates Tests", function() {
	it("special cases", function() {
		expect(function(){ hasDuplicates() }).toThrow();
		expect(function(){ hasDuplicates('a') }).toThrow();
		expect(function(){ hasDuplicates([1,2,3], [1,2,3]) }).toThrow();
	});
	it("no duplicate value", function() {
		expect( hasDuplicates([2,4,3,1]) ).toBeFalsy();
		expect( hasDuplicates([-2,-4,-3,-1]) ).toBeFalsy();
		expect( hasDuplicates([-2,-5,1,9]) ).toBeFalsy();
		expect( hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9]) ).toBeFalsy();
	});
	it("duplicate values", function() {
		expect( hasDuplicates([2,1,3,1]) ).toBeTruthy();
		expect( hasDuplicates([-2,-1,-3,-1]) ).toBeTruthy();
		expect( hasDuplicates([-2,-5,-5,9]) ).toBeTruthy();
		expect( hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9]) ).toBeTruthy();
	});
});

describe("areConsecutive Tests", function() {
	it("special cases", function() {
		expect(function(){ areConsecutive() }).toThrow();
		expect(function(){ areConsecutive('a') }).toThrow();
	});
	it("positive values", function() {
		expect( areConsecutive([4]) ).toBeTruthy();
		expect( areConsecutive([3,4]) ).toBeTruthy();
		expect( areConsecutive([4,3]) ).toBeTruthy();
		expect( areConsecutive([4,4]) ).toBeFalsy();
		expect( areConsecutive([2,3,4]) ).toBeTruthy();
		expect( areConsecutive([4,3,2]) ).toBeTruthy();
		expect( areConsecutive([3,4,2]) ).toBeFalsy();
		expect( areConsecutive([4,2,3]) ).toBeFalsy();
		expect( areConsecutive([4,4,4]) ).toBeFalsy();
	});
	it("negative values", function() {
		expect( areConsecutive([-4]) ).toBeTruthy();
		expect( areConsecutive([-3,-4]) ).toBeTruthy();
		expect( areConsecutive([-4,-3]) ).toBeTruthy();
		expect( areConsecutive([-4,-4]) ).toBeFalsy();
		expect( areConsecutive([-2,-3,-4]) ).toBeTruthy();
		expect( areConsecutive([-4,-3,-2]) ).toBeTruthy();
		expect( areConsecutive([-3,-4,-2]) ).toBeFalsy();
		expect( areConsecutive([-4,-2,-3]) ).toBeFalsy();
		expect( areConsecutive([-4,-4,-4]) ).toBeFalsy();
	});
	it("positive and negative values", function() {
		expect( areConsecutive([-1,0,1]) ).toBeTruthy();
		expect( areConsecutive([1,0,-1]) ).toBeTruthy();
		expect( areConsecutive([1,-1,-3]) ).toBeFalsy();
		expect( areConsecutive([4.1,3.1,2.1]) ).toBeTruthy();
		expect( areConsecutive([-4.1,-3.1,-2.1]) ).toBeTruthy();
		expect( areConsecutive([-3.1,-4.1,-2.1]) ).toBeFalsy();
	});
	it("positive and negative values NOT allowing duplicates", function() {
		expect( areConsecutive([0,1,2,2,3], false) ).toBeFalsy();
		expect( areConsecutive([3,2,2,1,0], false) ).toBeFalsy();
		expect( areConsecutive([-0,-1,-2,-2,-3], false) ).toBeFalsy();
		expect( areConsecutive([-3,-2,-2,-1,-0], false) ).toBeFalsy();
		expect( areConsecutive([-2,-1,0,1,1,2], false) ).toBeFalsy();
		expect( areConsecutive([2,1,1,0,-1,-2], false) ).toBeFalsy();
	});
	it("positive and negative values allowing duplicates", function() {
		expect( areConsecutive([0,1,2,2,3], true) ).toBeTruthy();
		expect( areConsecutive([3,2,2,1,0], true) ).toBeTruthy();
		expect( areConsecutive([-0,-1,-2,-2,-3], true) ).toBeTruthy();
		expect( areConsecutive([-3,-2,-2,-1,-0], true) ).toBeTruthy();
		expect( areConsecutive([-2,-1,0,1,1,2], true) ).toBeTruthy();
		expect( areConsecutive([2,1,1,0,-1,-2], true) ).toBeTruthy();
	});
});