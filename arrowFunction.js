// Arrow function were introduced with ES6 as a new syntax for writing JavaScript functions.

// Let's compare how ES6 code with ES5 code with function expressions can now be wriiten in ES6 using arrow functions.

// Basic syntax with Multiple Parameters

// (para1, para2, paramN) => expression

// // ES5

// var multiplyES5 = function(x, y){
// 	return x*y;
// };


// // ES6

// const multiplyES6 = (x, y) => {return x*y};


// // Curly bracket aren't required if only one expression is presented. The preceding example could also be written as:

// const multiplyES6 = (x, y) => x*y;


// // Basic Syntax with one Parameter

// // Patenthesis are optional when one paramter is present 

// // ES5

// var phraseSplitterES5 = function phraseSplitter(phrase){
// 	return pharse.split(' ');
// };

// // ES6
// const pharseSplitterES6 = pharse => phrase.split(" ");

// console.log(pharseSplitterES6("ES6 Awesomess"))


// No parameters
// Parenthesis are required when no parameters are present.


// // ES5
// var docLogEs5 = function docLog(){
// 	console.log(document);
// };

// // ES6

// var docLogES6 = () => { console.log(document); };
// docLogES6();



// // Object Literal Syntax

// // ES5
// var setNameIdsEs5 = function setNameIds(id, name){
// 	return {
// 		id: id,
// 		name: name
// 	};
// };


// // ES6

// var setNameIdEs6 = (id, name) => ({id: id, name: name });

// console.log(setNameIdEs6 (4, "Ram"))	//object {id: 4, name: "Ram"};



// Use Cases for Arrow Functions

// const smartPhones = [
// {name:'iphone', price:333},
// {name: 'Galaxy s8', price: 444},
// {name: 'Galaxy note ', price: 555}
// ];

// We could create array of objects with just the names or prices by doing this in ES5:

// ES5
// var prices = smartPhones.map(function(smartPhone){
// 	return smartPhone.price;
 
// })		
// console.log(prices); //[333, 444, 555]

// An arrow function is more concise and easier to read:

// ES6

// const prices = smartPhones.map(smartPhone => smartPhone.price);
// console.log(prices);	//[333, 444, 555]



// Here's another examle using the array filer method:

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// //ES5
// // var divisibleByThreeES5 = array.filter(function (v){
// // 	return v % 3 === 0;
// // });
// // console.log(divisibleByThreeES5);	//3, 6, 9, 12, 15


// // ES6

// 	const divisibleByThreeES6 = array.filter(v => v % 3 === 0);

// 	console.log(divisibleByThreeES6);	//3, 6, 9, 12, 15




// Promise and callbacks

// ES5

// aAsync().then(function() {
//   returnbAsync();
// }).then(function() {
//   returncAsync();
// }).done(function() {
//   finish();
// });

// This code is simplified and  arguably to read using arrow functions:

// ES6

//aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);



// Without Arrow functions, the promise code needs to be written something like this:

// ES5 
API.prototype.get = function(resource){
	var self = this;
	return new Promise(function(resolve, reject){
		http.get(self.uri + resource, function(data){
			resolve(data);
		});
	});
};

// Using an arrow function, the same result can be achieved more concisely and clearly;

// ES6
API.prototype.get = fuction(resource) {
	return new Promsise((resolve, reject) => {
		http.get(this.uri + resource, function(data){
			resolve(data);
		});
	});
};