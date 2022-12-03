/*
Hosting là quá trình di chuyển khai báo hàm và khai báo biến lên trên
*/

// console.log(num); //underfinend
// var num; //Declaration
// num = 10; //Initialization

// console.log(num); //num is not defined
// num = 6;

/*Function declaration hoisting */

// sum(1, 2); //work

// function sum(a, b) {
// 	return a + b;
// }

sum(1, 2); //sum is not a function
//because sum is var and get hoisted with underfinend value

var sum = function (a, b) {
	return a + b;
};

//Hack não
var tip = 100;
(function () {
	console.log('I have $' + husband()); //NaN

	function wife() {
		return tip * 2;
	}

	function husband() {
		return wife() / 2;
	}

	var tip = 10;
})();

//function scope vs block scope

function sayHello() {
	{
		const language = 'en';
		var message = 'Hello';
	}

	console.log(language); //language is not defined
	console.log(message); //Hello
}
sayHello();
