/*
Closures là một function có cái biến được sử dụng ở bên ngoài

*/

function init() {
	var name = 'Mozilla';
	function displayName() {
		console.log(name);
	}
	displayName();
}
init();

//Hàm cha đã kết thúc rồi nhưng biến trong hàm cha vẫn được truy cập ở hàm con
function makeFunc() {
	var name = 'Mozilla';

	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc();

/* Example */

//memoization
function createCounter(initValue) {
	let value = initValue || 0;

	function increase() {
		return value++;
	}

	function decrease() {
		return value--;
	}

	function getValue() {
		console.log(value);
		return value;
	}

	return {
		increase,
		decrease,
		getValue
	};
}

const counter1 = createCounter(0);
const counter2 = createCounter(0);

counter1.increase();
counter1.decrease();
counter1.getValue();
