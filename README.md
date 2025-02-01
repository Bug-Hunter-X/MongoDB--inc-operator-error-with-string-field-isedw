# MongoDB $inc operator error with string field

This example demonstrates an error that occurs when using the `$inc` operator in MongoDB with a field that's not a number.  The `$inc` operator is designed to increment numerical values. Applying it to a string leads to an error.

## Bug
The `bug.js` file contains code that attempts to increment a string field using `$inc`. This results in an error because MongoDB expects a numerical value.

## Solution
The `bugSolution.js` file shows the corrected approach.  Before using `$inc`, ensure the field is of the correct data type (Number).  If necessary, convert the string field to a number before performing the increment operation. If the field does not exist, you should create it first with a numeric value before using $inc.