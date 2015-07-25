/* ===========================================================================
Created:	2015/07/25 Thomas Nguyen - thomas_ejob@hotmail.com
Purpose:	This is the bare minimum to run Jasmine
PS:			https://api.qunitjs.com/category/assert/
=========================================================================== */

/*
QUnit.test("selftest: example", function(assert) {
	assert.ok(true);										//Return "Okay" by default
    assert.ok(1==1, "This test checks for 1==1");
	assert.equal(5, 5, "equal 5=5");						//Compare the value of two primitives, having the same value. Does not work on Objects (i.e. arrays)
	assert.equal(2+3, 5, "equal 2+3=5");					//Compare the value of two primitives, having the same value. Does not work on Objects (i.e. arrays)

	assert.equal("abc", "abc", "equal 'abc'=='abc'");
	assert.equal(0, false, "0 equal false");
	assert.notStrictEqual(0, false, "0 equal false");		//Compare the value of two primitives, having the same value and type.
});
*/

describe("selftest: example", function() {
	it(".toBe true", function() {
		expect(true).toBe(true);							//Return "Okay" by default
	});
	it(".toBe 1==1", function() {
		expect(1==1).toBe(true);
	});
	it(".toEqual 5=5", function() {
		expect(5).toEqual(5);								//Compare the value of two primitives, having the same value. Does not work on Objects (i.e. arrays)
	});
	it(".toEqual 2+3=5", function() {
		expect(2+3).toEqual(5);
	});
});

//expect(helloWorld()).toEqual("Hello world!");
//describe("My test", function() {    it("should add 2 and 2", function() {      assert.equal(2+2, 4);    });  });