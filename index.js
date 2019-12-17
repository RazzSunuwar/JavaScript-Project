// let myWord = "Hello World";

// console.log(myWord);



// “this” Refers to a Global Object

// function myName(){
// 	console.log("Hello World");
// 	console.log(this=== window);
// }
// myName();
// console.log(this === window);


// Immediately Invoked Function Expression (IIFE)

// (function(){
// 	console.log("Hello World");
// 	console.log(this === window)
// })()


// "USE STRICT"

// function myName(){
// 	'use strict';
// 	console.log("Hello World");
// 	console.log(this === window);
// }
// myName();


// “this” Refers to a New Instance


// function Person(fn, ln) {
// 	this.firstName = fn;
// 	this.lastName = ln;

// 	this.displayName = function(){
// 	console.log(`Name: ${this.firstName} ${this.lastName}`);
// 	}
// }

// let person = new Person ("Paul", "Schloes");
// person.displayName();
// let person2 = new Person ("Wayne", "Rooney");
// person2.displayName();


// “this” Refers to an Invoker Object (Parent Object)

// function myName(){
// 	'use strict';
// 	console.log("Hello World");
// 	console.log(this === window);
// }

// let user = {
// 	count: 10,
// 	myName : myName,
// 	myName1: function(){
// 		console.log(this === window);
// 	}
// }
// 
// user.myName() //Prints false because now “this” refers to user object instead of global object.
// let fun1 = user.myName1;
// fun1() //Prints true as this method is invoked as a simple function.
// user.myName1; //Prints false on console as foo1 is invoked as a object’s method


// “this” With the Call and Apply Methods

// function Person(fn, ln) {
// 	this.firstName = fn;
// 	this.lastName = ln;

// 	this.displayName = function(){
// 	console.log(`Name: ${this.firstName} ${this.lastName}`);
// 	}
// }

// let person = new Person ("Paul", "Schloes");
// person.displayName();
// let person2 = new Person ("Wayne", "Rooney");
// person2.displayName();

// person.displayName.call(person2);


// “this” With the Bind Method

// function Person(fn, ln) {
// 	this.firstName = fn;
// 	this.lastName = ln;

// 	this.displayName = function(){
// 	console.log(`Name: ${this.firstName} ${this.lastName}`);
// 	}
// }

// let person = new Person ("Paul", "Schloes");
// person.displayName();
// let person2 = new Person ("Wayne", "Rooney");
// person2.displayName();

// let person2Display = person.displayName.bind(person2);
// person2Display();



// “this” With the Fat-Arrow Function

// let displayName = (fn, ln) => {
// console.log(Name: ${fn} ${ln});
// };

// function multiply(p, q, callback) {
// 	'use strict'
// 	callback(p * q);
// }

// let user = {
// 	a: 2,
// 	b:3,
// 	findMultiply: function() {
// 		multiply(this.a, this.b, function(total) {
// 			console.log(total);
// 			console.log(this === window);
// 		})
// 	}
// }
// user.findMultiply();


// var count = 5;
// function test (){
// 	console.log(this.count === 5);
// }
// test();



/*Summary

So now you can figure out the value of this by following these simple rules:

> By default, this refers to a global object, which is global in the case of NodeJS
and a window object in the case of a browser.

> When a method is called as a property of an object, then this refers to the parent object.

> When a function is called with the new operator, then this refers to the newly created instance.

> When a function is called using the call and apply methods, then this refers to the value passed as the
first argument of the call or apply method.

As you’ve seen above, the value of this can
sometimes be confusing, but the above rules can help you to figure out the value of this.*/



// 'this' in a Method

// In the example on the top of this page, this refers to the person object.
// The person object is the owner of the fullName method.

// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id     : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person);


// this Alone

// When used alone, the owner is the Global object, so this refers to the Global object.
// In a browser window the Global object is [object Window]:
// var x = this;

// In strict mode, when used alone, this also refers to the Global object [object Window]:
// "use strict";
//var x = this;



//this in a Function (Default)

// In a JavaScript function, the owner of the function is the default binding for this.
// So, in a function, this refers to the Global object [object Window].

// function myFunction() {
//   return this;
// }

// In this example, this represents the object that "owns" myFunction:
// [object Window]



//this in a Function (Strict)

//JavaScript strict mode does not allow default binding.
//So, when used in a function, in strict mode, this is undefined.

// "use strict";

// function myFunction() {
//   return this;
// }



// this in Event Handlers

// In HTML event handlers, this refers to the HTML element that received the event:

// <button onclick="this.style.display='none'">Click to Remove Me!</button>



// Object Method Binding

// In these examples, this is the person object (The person object is the "owner" of the function):

// var person = {
//   firstName  : "John",
//   lastName   : "Doe",
//   id     : 5566,
//   myFunction : function() {
//     return this;
//   }
// };

// var person = {
//   firstName: "John",
//   lastName : "Doe",
//   id     : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// In other words: this.firstName means the firstName property of this (person) object.



/* Explicit Function Binding

The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.

You can read more about call() and apply() later in this tutorial.

In the example below, when calling person1.fullName with person2 as argument,
this will refer to person2, even if it is a method of person1: */

// var person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// var person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }
// var x = person1.fullName.call(person2);
// console.log(x);













