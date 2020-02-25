// Implicit and Explicit Coercion in JavaScript

// Coercison is the process of conversion of data from one type to another.

// Coercion applies to every data type present in the JavaScript world. An examples of coercion is shown below:

// let number = Number("50");

// There are two types of coercion in JavaScript:

// Implicit Coercion: Type conversion is done implicity by JavaScript.

// Explicit Coercion: Type conversion is done explicitly in code using the inbuilt functions like
// Number(), String(), Boolean(), etc.


// Implicit Coercion
// Examples of implicit typecasting:

// 12 + ""		//Output is "12" as number 12 is converted to string "12"
// "15" * 2		//Outout is 30 as string 15 is converted to number 15
// "15" - "11"	//Output is 4 as both the strings are converted to number
// undefined + 6	//Output is NaN as undefined could not be converted to number
// "Hello" + null	//Output is "Hellonull" as null is converted to string "null"
// null + 25	//Output is 25 as null is converted to 0
// true + true	//Output is 2 as true is converted to number 1
// false + 10	//Output is 10 as false is converted to 0
// 10 * [6]		//Output is 60 as [6] is converted to number 6
// 10 * [10, 20]	//Output is NaN as [10, 20] could not be converted to number
 

 //[1] +  [1,2]	//Output is "11,2" as [1] is converted to "1" and [1,2] is converted "1,2". Finally the
 // two are concatenated to give the result "11,2"



// Explicit Coercion

// Converting to Number
//The Number() global method is used to convert any other data type value to numberic values.


// Number("25")	//Output is 25 as "25" string is converted to number 25
// Number("")	//Output is 0 as "" string is converted to 0
// Number([])	//Outout is 0 as [] is converted to 0
// Number(null)	//Output is 0 as null is converted to 0
// Number(true)	//Outout is 1 as true is converted to 1
// Number(false)	//Outout is 0 as true is converted to 0
// Number("Test")	//Output is NaN as "Test" could not be converted to number

// parseInt() and parseFloat() methods can also be used to converted to numbers stored as a string
// to a number. For all other data types, it will return NaN.



// Conveting to String
// String(25)	//Output is "25" as 25 is converted to string "25"
// String([])	//Outout is "" as [] is converted to empty string ""
// String(null)	//Outout is "null" as null is converted to string "null"
// String(true)	//Output is "true" as true is converted to string "true"
// String(false)	//Output is "false" as false is converted to string "false"
// String({})	//Output is "[object Object]" as {} is converted to

// string(similar to calling toString() on a object)


// Converting to Boolean
// The Boolean() global method is used to convert any other data type value to Boolean values.
// Boolean(25)	//Outout is true
// Boolean([])	//Outout is true
// Boolean(null)	//Outout is false
// Boolean({})	//Outout is true
// Boolean("Yeah! I will be converted to Boolean")	//Outout is true


