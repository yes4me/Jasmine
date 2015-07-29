/* =====================================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
===================================================================================== */


describe("sitepoint", function() {
	it("max()", function() {
		expect( App.max() ).toEqual(-Infinity);
		expect( App.max(3, 1, 2) ).toEqual(3);
		expect( App.max(-14, -22, -5) ).toEqual(-5);
		expect( App.max(-10, 5, 3, 99) ).toEqual(99);
		expect( App.max(14, 14, 14) ).toEqual(14);
		expect( App.max(14, 14, 14) ).not.toEqual(2);
	});
	it("isOdd", function() {
		expect( !App.isOdd(0) ).toTruthy;
		expect( !App.isOdd(2) ).toTruthy;
		expect( App.isOdd(5) ).toTruthy;
		expect( !App.isOdd(null) ).toTruthy;
		expect( !App.isOdd([]) ).toTruthy;
	});
});