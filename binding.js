// Bind
// let demo = "";
// let c1 = {
// 	x: 5,
// 	y: 10
// };

// let c2 = {
// 	x: 75,
// 	y: 235
// };

// function myWord() {
// 	console.log(this.x + ','+ this.y);
// }
// let c1_fun = myWord.bind(c1);
// let c2_fun = myWord.bind(c2);

// c1_fun();
// c2_fun();



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



// Explicit Function Binding

// var person1 = {
// 	fullName : function(){
// 		return this.firstName + " " + this.lastName;
// 	}
// }

// var person2 = {
// 	firstName: "Ram",
// 	lastName: "Abc"
// }

// var x = person1.fullName.call(person2);
// console.log(x);


// Call

// var obj = {num: 2};

// var addToThis = function(a){
// 	return this.num + a;
// }
// console.log(addToThis.call(obj, 3)); //functionname.call(obj, function arguments)



// Apply

// var obj = {num: 2};

// var addToThis = function(a, b, c){
// 	return this.num + a + b + c;
// }
// // console.log(addToThis.call(obj, 1, 2, 3));

// var arr = [1 , 2, 3];
// console.log(addToThis.apply(obj, arr));


// Bind

var obj = {num: 2};

var addToThis = function(a, b, c){
	return this.num + a + b + c;
};

var arr = [1 , 2, 3];

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));












