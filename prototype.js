// function User(email, name){
// 	this.email = email;
// 	this.name = name;
// 	this.online = false;
// }

// User.prototype.login = function(){
// 	this.online = true;
// 	console.log(this.email, 'has logged in');
// }

// User.prototype.logout = function(){
// 	this.online = false;
// 	console.log(this.email, 'has logged out');
// }

// var userOne = new User('abcd@gmail.com', 'Rencho');
// var userTwo = new User('xyx@gmail.com', 'Pencho');

// console.log(userOne);
// userTwo.login();


//PROTOTYPE PRACTICE

// var Mobile = function (model){
// 	// Instance Member
// 	this.model = model;
// 	this.price = 3000;
// };
// var samsung = new Mobile('Galaxy');
// var nokia = new Mobile('lumia');
// // Classname.prototype.key = 'value' ;
// // prototype Member
// Mobile.prototype.color = 'White';

// document.write(samsung.color);
// document.write(nokia.color);

// console.log(samsung);
// console.log(nokia);


// PROTOTYPE OBJECTS
// Every object is is associated with another Object in JavaScript


// It will return Object.prototype
// console.log(Object.prototype);

// var b = {};
// console.log(Object.getPrototypeOf(b));
// console.log(Object.getPrototypeOf(Object.prototype));

// var b1 = new Object ();	
// console.log(Object.getPrototypeOf(b1));



// Array object
 // var b2 = new Array();
 // console.log(Object.getPrototypeOf(b2));
 // console.log(Object.getPrototypeOf(Array.prototype));
 // console.log(Object.getPrototypeOf(Object.prototype));


// var b2 = new String();
// // console.log(Object.getPrototypeOf(b2));
// console.log(Object.getPrototypeOf(String.prototype));



// Prototype Inheritance







