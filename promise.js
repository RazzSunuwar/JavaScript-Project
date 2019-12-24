/*JavaScript Promise is an object with properties and methods
it represents the eventual completion (or Failure) of an Asynchronous Operation
it provides a resulting value
*/ 


// let cleanRoom = new Promise(function(resolve, reject){
// 	// cleaning the room 
// 	let isClean = true;

// 	if(isClean){
// 		resolve('clean');
// 	} else {
// 		reject();
// 	}
// });

// cleanRoom.then(function(fromResolve){
// 	console.log('the room is ' + fromResolve);
// })



/*CALLBACK*/

// task

// function askMoney(cbSuccess, cbErr) {
// 	 setTimeout(function(){
// 	 	cbSuccess(1000);
// 	 	cbErr('no money');
// 	}, 2000);
// }

// function success (data) {
// 	console.log('success in ask money', data);
// }

// function failure(err){
// 	console.log('failure in ask money', err);
// }
// askMoney(success, failure);



// PROMISE
// Promise is an object that represents future result value 
/*
1. pending
2. onRejection
3. onFulfiled
4. settled*/

/*Promise has three methods
1. then,
2. catch and
3. finally */

// then is an method which is used to handle both success and failure of promise

// Object is the collection of the key value pair

 // Syntax of Promise
 // Promise can handle single values
 // Promise will not changes its state once settled

//  var a = new Promise(function(resolve, reject){
// setTimeout(function(){
// 	resolve();
//  	reject();
// }, 5000);

//  });
//  function resolve(data){
//  	console.log('Resolve in Promise >>', data);
//  }

//  function reject(err){
//  	console.log('Reject in promise >>', err);
//  }

// a
// .then(resolve)	//recommended to use for success only
// .catch(reject)	//recomended to use for failure
// .finally(function(){
// 	console.log('Promise is settled');
// });