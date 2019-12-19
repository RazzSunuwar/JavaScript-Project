//PRACTICE

//Object method binding

// var person = {
// 	firstName : 'ABC',
// 	lastName : 'XYZ',
// 	id : 8,
// 	fullName: function(){
// 		return this.firstName + " " + this.lastName + " " + this.id;
// 	}
// }
// console.log(person.fullName());		//ABC XYZ 8



// Explicit Function Binding

// var person = {
// 	fullName : function(){
// 		return this.firstName + " " + this.lastName + " " + this.id
// 	}
// }

// var person1 = {
// 	firstName: 'PQR',
// 	lastName: 'XYZ',
// 	id: 10
// }
// var x = person.fullName.call(person1);
// console.log(x);		//PQR XYZ 10



// “this” Refers to a New Instance

// function Person(fn, ln){
// 	this.firstName = fn;
// 	this.lastName = ln;

// 	this.displayName = function(){
// 	console.log(`Name: ${this.firstName} ${this.lastName}`);
// 	}
// }
// let person = new Person ("Abc", "Xyz");
// person.displayName();		//Abc Xyz

// let person1 = new Person ("Sam", "Adams")
// person1.displayName();		//Sam Adams




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



// Object Method Binding

// var person = {
// 	firstName : 'Ram',
// 	lastName : 'Singh',
// 	id : 111,
// 	fullDetails : function(){
// 		return this.firstName + " " + this.lastName + " " + this.id
// 	}
// }
// console.log(person);



// Explicit Function Binding

// var person = {
// 	fullDetails: function(){
// 		return this.firstName+ " "+ this.lastName+ " "+ this.id
// 	}
// }

//  var person1 = {
//  	firstName: 'KKJK',
//  	lastName: 'SRSRSR',
//  	id: 123
//  }

//  var person2 = {
//  	firstName: 'KKJK',
//  	lastName: 'SRSRSR',
//  	id: 123
//  }

// var x = person.fullDetails.call(person1);
// console.log(x);
// var x = person.fullDetails.apply(person1);
// console.log(x);


// var myMan = {
// 	myDetails: function(){
// 		return this.firstName + " " + this.lastName + " " + this.id
// 	}
// }

// var details = {
// 	firstName: 'Hari',
// 	lastName: 'Gurung',
// 	id: 123
// }

// var x = myMan.myDetails.call(details);
// console.log(x);



// var obj = { num: 2};

// var addToThis = function(a, b, c){
// 	return this.num + a + b + c;
// };

// var arr = [1, 2, 3]

// var bound = addToThis.bind(obj);

// console.log(bound(1,2,3));		//8










