/*
1. Default parameter value
2. Rest parameter value
3. Spread operator
4. Arrow function
5. Constructor function
6. Curry function
*/
/* 1. Default parameter value */
function sum(a = 5, b = 10) {
	console.log(a + b);
}
sum(); //15
sum(10); //20
sum(10, 20); //30

sum(undefined, undefined);
//15
//Trong js không truyền hoặc truyền underfined thì nó sẽ hiểu là không truyền
sum(undefined, null); //chuyển null thành 0 nên đáp án là 5

/* 2. Rest parameter value => group*/
// arguments like object or like array

/* Syntax ES5 */
function sum() {
	return [...arguments].reduce((total, number) => total + number, 0);
}

console.log(sum(1)); //1
console.log(sum(1, 2, 3)); //6

/* Syntax ES6 */

function sumES6(...numberList) {
	return numberList.reduce((total, number) => total + number, 0);
}

console.log(sumES6(1)); //1
console.log(sumES6(1, 2, 3)); //6
console.log(sumES6(1, 4)); //5

/* 3. Spread operator => từ một ra một danh sách */

const numberList = [1, 3, 5, 7, 9];

console.log(sum(...numberList));

/* 4. Arrow function */

const sumArrow = (a, b) => a + b;

const getStudent = () => {
	return { name: 'Danh IT' };
};

const getStudents = () => ({
	name: 'Danh IT'
});

console.log(getStudents());

/* Curry function ( Higher Order Function ) => là hàm return về một hàm khác*/

function sumCurry(x) {
	return function (y) {
		return x + y;
	};
}

console.log(sumCurry(5)(6)); //11

function createIdGenerator(startId = 1) {
	let id = startId;

	return function () {
		return id++;
	};
}

const getNextId = createIdGenerator(5);
console.log(getNextId()); // 5
console.log(getNextId()); // 6
console.log(getNextId()); // 7
