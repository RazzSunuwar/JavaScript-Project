// /*Three tasks
// 1 buy mobile
// 2 take photo
// 3 post in instagram */



// // Task part
// function buyPhone(cb){
// 	let phone = true;	
// 	setTimeout(function(){
// 		console.log('I am buying phone');
// 		if (phone) {
// 			cb(null, 's10');
// 		} else {
// 		cb('no phone');
// 		}
// 	}, 2000);
// }

// function takePhoto(){
// console.log('Taking photos');
// }

// function postInInstagram(){
// console.log('Post photos in the instagram');
// }

// // Execution Part
// buyPhone(function(failure, success){
// 	if (failure){
// 		console.log('Failure in buy phone', failure);
// 	}else {
// 		console.log('Success in buying phones >>', success);
// 	takePhoto();
// 	postInInstagram(); 	
// }

// });
// console.log('It start raining');


// NEESTED CALLBACK
// STARTTED FOR EXAM PREPARATION

/*Task part*/
function askForNote(subject, cb){
	console.log('Friend received call and insist to callback after he find note');
	setTimeout(function(){
		console.log('Note found after 2 hours');
		cb(null, {
			pdfNote: subject
		});
	}, 2000);
}

function printNote(pdfNote, cb){
	console.log('Note is in stationary');
	console.log('Shopkeeper promise to call after he finished printing note');
	var electricity = true;
	if (electricity){
		setTimeout(function(){
			cb(null, 'printedNote');
		}, 3000)

	} else {
		cb('No electricity')
	}
}

function entertainment(cb){
	console.log('Entertainment started')
	setTimeout(function(){
		cb();
	}, 2000);
}

function servicing(cb){	
	console.log('Bike is at servicing');
	setTimeout(function(){
		cb();
	}, 1000);
}

/*Task part*/

// #### Execution part ####

console.log('Start preparation for exam');
console.log('Call friend for note');
askForNote('Computer', function(err, done){
	if(err){
		console.log('Error getting note', err)
	} else {
		console.log('Success in getting note from friend', done);
		console.log('Note is in pdf now print note');
		printNote('pdfNote', function(err, done){
			if(err){
				console.log('Printing failed', err);
			} else {
				console.log('Printing completed', done);
				entertainment(function(){
					console.log('Entertainment finished');
					servicing(function(){
						console.log('Bike servicing finished');
						console.log('Now start preparation');
					});
					console.log('i got phone call')
				});
				console.log('Mom arrives home');
				console.log('It started raining');
			}
		})
		console.log('Meet friend');
		console.log('Had coffee with friends');
	}
});
console.log('Clean room');
console.log('Prepare pen, pencil paper etc');


