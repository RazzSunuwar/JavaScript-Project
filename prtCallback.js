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



function shaw(callback){	//Arrow function
	var a = 100;
	callback(a);
}
shaw(a => console.log("I am show Function "+ a));
