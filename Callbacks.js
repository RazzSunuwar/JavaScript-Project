// CALLBACK FUNCTIONS are high order function.
// In JS callback are first class objects.

// let x = function(){
// 	console.log("i am called from inside a function");
// }

// let y = function(callback){
// 	console.log('do something');
// 	callback();
// }
// y(x);


// let add = function (a, b) {
// 	return a + b;
// };

// let multiply = function (a, b) {
// 	return a * b;
// };

// let doWhatever = function(a, b){
// 	console.log(`here are your two numbers back ${a}, ${b}`);
// };

// let calc = function(num1, num2, callback){
// 	return callback(num1, num2);
// };
// console.log(calc(5,4, function(a,b) {
// return a-b;
// }));	



// let add = function (a, b) {
// 	return a + b;
// };

// let multiply = function (a, b) {
// 	return a * b;
// };

// let doWhatever = function(a, b){
// 	console.log(`here are your two numbers back ${a}, ${b}`);
// };

// let calc = function(num1, num2, callback){
// 	if (typeof callback === "function"){
// 		return callback(num1, num2);
// 	}
// };
// console.log(calc(5,4, function(a, b) {
// return a - b;
// }));	



// var myArr = [{
// 	num: 5,
// 	str: 'apple'
// }, {
// 	num: 7,
// 	str: 'cabbage'
// }, {
// 		num: 1,
// 	str: 'ban'
// }];

// myArr.sort(function(val1, val2) {
// 	if (val1.str > val2.str){
// 		return -1;
// 	} else {
// 		return 1;
// 	}
// })
// console.log(myArr);



function buyMobile(){
	console.log('i want to buy mobile');
	console.log('i want go to shop');
	console.log('i am at mobile shop');
	console.log('Shopkeeper told me to wait for 3 hours for new phone');
	setTimeout(function(){
		console.log('Mobile arrived at shop');
			console.log('I have a phone Samsung s10 PLus');
		// return model;   //Note:- return can't work in the setTimeout function
	}, 3000);
}
buyMobile();






