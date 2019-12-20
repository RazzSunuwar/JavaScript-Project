/*A callback function is the function (It can be any function Anonymous Function, Arrow Function)
passed into another function as an argument, which is then invoked inside the outer function to
complete some kind of routine or action.*/

// function show(){
// 	console.log('I am show function');
// }
// function myWord(callback){
// 	callback();
// }
// myWord(show);


// function show(a){
// 	console.log('I am show function ' + a);
// }
// function shaw(callback){
// 	var a = 100;
// 	callback(a);
// }
// shaw(show);	 


// function show(a){
// 	console.log('i am show function ' + a);
// }	
// function shaw(a,callback){
// 	callback(a);
// }
// shaw(100, show);	//i am show function 100



// function shaw(callback){	//Arrow function
// 	var a = 100;
// 	callback(a);
// }
// shaw(a => console.log("I am show Function "+ a));


// function show(){
// 	console.log('I am show function');
// }
// function shaw(callback){
// 	callback();
// }
// shaw(show);
// console.log("End");


/* Synchronous - It waits for each operator to complete, after that
it executes the next operation. Example given above*/


// setTimeout(function show(){
// 	console.log("I am show function");
// }, 3000);
// console.log("End");

/*Asynchronous - It never waits for each operation to complete, rather it executes all operations
in the first GO only. Example given above*/



// function show(a){		//Callback function
// 	console.log("I am show function " + a);
// }

// function task(callback){
// 	var a = 5; //Assigning variable as a
// 	callback(a); 
// }
// task(show); //Show is argument in task function

/*						OR 							*/


// function show(a){		//Callback function
// 	console.log("I am show function " + a);
// }

// function task(a, callback){
// 	// var a = 5; //Assigning variable as a
// 	callback(a); 
// }
// task(5, show); //Show is argument in task function
/*						OR 							*/



// function task(callback){
// 	var a = 5; //Assigning variable as a
// 	callback(a); 
// }
// task(
// 	function show(a){		//Callback function
// 	console.log("I am show function " + a);
// });
/*						OR 							*/



// function task(callback){
// 	var a = 5; //Assigning variable as a
// 	callback(a); 
// }
// task(
// 	function(a){		//Callback function and Anonymous Functions

// 	console.log("I am show function " + a);
// });
/*						OR 							*/



// function task(callback){		//Arrow Function
// 	var a = 5; //Assigning variable as a
// 	callback(a); 
// }

// task(a => console.log("I am show function " + a));
/*						OR 							*/




// Synchronous

// function show(){
// 	console.log('I am show function');
// }
// function shaw(callback){
// 	callback();
// }
// shaw(show);
// console.log("End");


// // Asynchronous


// setTimeout(function show(){
// 	console.log('I am show function');
// }, 3000);

// console.log("End");




// My first self made callback function

// task part
function ram(a){
	setTimeout(function(){
		console.log('I am ram');
		console.log('My batch no is ' + a);
	}, 3000);
}
console.log()

//execuation part

console.log('Hello Wolrld!');
function rom(a, callback){
callback(a);
}
ram(100, rom);









