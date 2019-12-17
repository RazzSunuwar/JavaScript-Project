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


