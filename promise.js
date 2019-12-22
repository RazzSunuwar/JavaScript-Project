/*JavaScript Promise is an object with properties and methods
it represents the eventual completion (or Failure) of an Asynchronous Operation
it provides a resulting value
*/ 


let cleanRoom = new Promise(function(resolve, reject){
	// cleaning the room 
	let isClean = true;

	if(isClean){
		resolve('clean');
	} else {
		reject();
	}
});

cleanRoom.then(function(fromResolve){
	console.log('the room is ' + fromResolve);
})