/* ===========================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
PS:			https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/Custom_Matchers.html#Custom_Matchers
=========================================================================== */


describe("basic", function() {
	it("expect(...).toBe(...)", function() {
		expect(true).toBe(true);							//expect(...).toBe(Jasmine) == assert.equal(QUnit)
		expect("abc"=="abc").toBe(true);
		expect(5==5).toBe(true);
		expect(2+3==5).toBe(true);
		expect(2+3=='5').toBe(true);
		expect(0==false).toBe(true);
		expect(null==undefined).toBe(true);
	});
	it("expect(...).toEqual(...)", function() {
		expect("abc").toEqual("abc");
		expect(5).toEqual(5);								//expect(...).toEqual(Jasmine) === assert.deepEqual(QUnit)
		expect(2+3).toEqual(5);
		expect(2+3).not.toEqual("5");
		expect(0==false).toEqual(true);
		expect(null==undefined).toEqual(true);
	});
	xit("How to skip a test", function() {
		expect( sum(1,2,3) ).toEqual(6);
		expect(true).toBe(false);
	});
	it("Testing a function()", function() {
		expect( isEven(0) ).toBeTruthy();
		expect( isEven(2) ).toBeTruthy();
		expect( isEven(-4) ).toBeTruthy();
		expect( !isEven(1) ).toBeTruthy();
		expect( !isEven(-7) ).toBeTruthy();
		expect( sum(1,2,3) ).toEqual(6);
		expect(function(){ sum() }).toThrow();
		expect(function(){ sum("") }).toThrow();
	});
	it("OTHERS: true or false", function() {
		expect(1).not.toBe(true);
		expect(1).not.toBe(false);
		expect(1).toBeTruthy();
		expect(0).not.toBeTruthy();
		expect(0).toBeFalsy();
		expect(0).toBeDefined();
	});
});