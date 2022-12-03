/* this có giá trị khác nhau ở các môi trường khác nhau */
// Non strict thì nó trỏ tởi global
// Trong trường hợp strict-mode ra là underfined
console.log(this);

function sayHello() {
	console.log(this);
} //global object

sayHello();

const sayHello = () => {
	console.log(this);
}; // window

const student = {
	name: 'Danh IT',
	sayHello: function () {
		console.log('My names is', this.name);
	}
}; // ES5

const studentOne = {
	name: 'Danh IT',
	sayHello() {
		console.log('My names is', this.name);
	}
}; // ES6
