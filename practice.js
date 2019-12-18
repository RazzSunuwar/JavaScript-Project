// global object = ?

// var myCar = {
// 	type:"Fiat",
// 	model:"500",
// 	color:"white"
// }


// var myCar = {
// 	type:"Fiat",
// 	model:"500",
// 	color:"white"
// };
// console.log(this.myCar);


// parent object

// var main = {
//     name : "main object",
//     child : {
//         name : "child object"
//     }
// };

// newly created instance

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1.make);
// // expected output: "Eagle"



// Object Method Binding

// var person = {
// 	firstName: "Ray",
// 	lastName: "Hang",
// 	number: 1234567,

// 	myFun : function(){
// 		return this;
// 	}
// }
// console.log(person);



// var person = {
// 	firstName: "Ray",
// 	lastName: "Hang",
// 	number: 1234567,

// 	fullName : function(){
// 		return this.firstName+ " "+ this.lastName;
// 	}
// }
// console.log(person.fullName());





