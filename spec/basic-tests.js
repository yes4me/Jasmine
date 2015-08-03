/* =====================================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
PS:			https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/Custom_Matchers.html#Custom_Matchers
===================================================================================== */


describe("basic", function() {
	it("DIFFERENCE: toEqual (equality) vs toBe(equality & same object)", function() {
		var value0 = 0;
		var array1 = [1,2,3];
		var array2 = [1,2,3];

		expect(value0).toBeFalsy();							//.toBeTruthy()/.toBeFalsy() check for the actual value of true or false
		expect(value0).not.toEqual(false);					//.toEqual() checks for equivalence of (==)

		expect(array1).toEqual(array2);
		expect(array1==array2).toBe(false);					//.toBe() checks for equivalence and same object (===)
	});
	it("expect(...).toEqual(...)", function() {
		expect("abc").toEqual("abc");
		expect(5).toEqual(5);								//expect(...).toEqual(Jasmine) == assert.equal(QUnit)
		expect(2+3).toEqual(5);
		expect(2+3).not.toEqual("5");
		expect(0==false).toEqual(true);
		expect(null==undefined).toEqual(true);
	});
	it("expect(...).toBe(...)", function() {
		expect(true).toBe(true);							//expect(...).toBe(Jasmine) === assert.deepEqual(QUnit)
		expect("abc"=="abc").toBe(true);
		expect(5==5).toBe(true);
		expect(2+3==5).toBe(true);
		expect(2+3=='5').toBe(true);
		expect(0==false).toBe(true);
		expect(null==undefined).toBe(true);
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
	it("OTHERS: what is FALSE(by default) in Javascript", function() {
		expect(0).toBeFalsy();
		expect(false).toBeFalsy();
		expect("").toBeFalsy();
		expect(null).toBeFalsy();			//This is different in QUnit
		expect(NaN).toBeFalsy();			//This is different in QUnit
		expect(undefined).toBeFalsy();		//This is different in QUnit
	});
	it("OTHERS", function() {
		expect(0).toBeDefined();
		expect(0).not.toBeTruthy();
		expect(1).not.toBe(true);
		expect(1).not.toBe(false);
		expect(1).toBeTruthy();
		expect([1,2,3,4]).toContain(3);
		expect("hello world").toContain("world");
		expect("hello World").not.toContain("world");
	});
});