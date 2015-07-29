/* =====================================================================================
Created:	2015/07/28
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Instruction how to test the Javascript coverage using JSCover in Windows
SOURCE:		https://www.youtube.com/watch?v=ZPq8zq1QKyA&feature=youtu.be&t=385
===================================================================================== */

Go to: http://tntim96.github.io/JSCover/
Click on: Downloads and get the "Latest Stable Release" (ZIP Release)


Create a directory called "tools" in your project
Copy the following files from the ZIP realese to the directory "tools"
	JSCover-1.0.20\target\dist\JSCover-all.jar
	JSCover-1.0.20\src\test\javascript\lib\PhantomJS\run-jscover-jasmine.js
	JSCover-1.0.20\examples\server\jscover-server.bat
Modify the jscover-server.bat to:
	java -Dfile.encoding=UTF-8 -jar JSCover-all.jar -ws --document-root=../ --report-dir=log --no-instrument=spec --no-instrument=lib


Open prompt and run jscover-server.bat
METHOD 1:
	Open browser to: localhost:8080/jscoverage.html
	For URL, type the name of the HTML file. Examples:
		range.html
		http://localhost:8080/range.html
	Click "open in frame"
	Click on the tabs SUMMARY to see Javascript coverage.
METHOD2:
	Open browser to: http://localhost:8080/jscoverage.html?range.html
	Click "open in frame"
	Click on the tabs SUMMARY to see Javascript coverage.