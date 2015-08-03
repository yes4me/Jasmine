/* =====================================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
PS:			https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/Custom_Matchers.html#Custom_Matchers
===================================================================================== */

describe("spy = mockup", function() {
	it("Testing a function()", function() {
		console.log("BEGIN OF TEST");
		var globalVar = "hi";

		//Create a default spy (default spy global variable name = "window")
		//spyOn(window, "isEven");								//method "isEven" is spied on & intersected and nothing get passed
		//spyOn(window, "isEven").and.callThrough();			//method "isEven" is spied on & everything work as intended
		//spyOn(window, "isEven").and.returnValue("Bye");		//method "isEven" is spied on & return a custom value
		spyOn(window, "isEven").and.callFake(function(argument)	//method "isEven" is spied on & is redefined
		{
			return globalVar +" "+ argument;
		});

		//Check if the isEven has NOT been called
		expect(isEven).not.toHaveBeenCalled();
		expect(window.isEven.calls.count()).toBe(0);

		//Call function
		var returnValue = isEven("guinea pig");
		alert(returnValue);

		//Check if the myFunction has been called
		expect(isEven).toHaveBeenCalled();
		expect(window.isEven.calls.count()).toBe(1);
		console.log("END OF TEST");
	});
});