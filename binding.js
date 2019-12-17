// Bind
let demo = "";
let c1 = {
	x: 5,
	y: 10
};

let c2 = {
	x: 75,
	y: 235
};

function myWord() {
	console.log(this.x + ','+ this.y);
}
let c1_fun = myWord.bind(c1);
let c2_fun = myWord.bind(c2);

c1_fun();
c2_fun();