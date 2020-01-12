// Tutorials practice

// Closure are nothing but function with preserve data

// var addTo = function (passed){
//     var inner = 2;
//     return passed+ inner;
// }
// console.log(addTo(3));

//          OR

// var passed = 3;
// var addTo = function(){
//     var inner = 2;
//     return passed + inner;
// }
// console.log(addTo());

//          OR

// var passed = 3;
// var addTo = function(){
//     var inner = 2;
//     return passed + inner;
// }
// console.dir(addTo());
// var passed = 4;
// console.dir(addTo());

//          OR

// var addTo = function(passed){
//     var add = function(inner){
//         return passed + inner;
//     };
//     return add;
// };

// var addThree = new addTo(3);
// var addFour = new addTo(4);

// // console.dir(addThree);
// // console.dir(addFour);

// console.log(addThree(1));
// console.log(addFour(1));


// Closure is an inner function which has access to
// 1 global function
// 2 parent function argument
// 3 parent function scope
// 4 own argument
// 5 own scope


// Example
// var welcome = "welcome";
// function myName(name){
//     let to = "to";
//     function myPlace(place){     //myPlace is closure here.
//         let abc = "abc";
//         let text = welcome + " " + name + " " + to + " " + place;
//         console.log("Text...", text);
//     }
//     myPlace("kathamandu");
// }
// myName("Ronald");