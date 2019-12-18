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

function Person(fn, ln){
	this.firstName = fn;
	this.lastName = ln;

	this.displayName = function(){
	console.log(`Name: ${this.firstName} ${this.lastName}`);
	}
}
let person = new Person ("Abc", "Xyz");
person.displayName();		//Abc Xyz
