/* 
 + Block scope: nằm trong cặp hoặc nhọn
 + Function scope: phạm vi trong một cái function hiện tại
 + Lexical scope: một cái hàm bên trong có thể truy cập một cái biến nằm bên ngoài hàm đó
 + Global scope: một cái biến không nằm trong bất cứ hàm nào
 + Scope chain
*/
//Block scope: nằm trong cặp hoặc nhọn

// const/let has block scope (ES6)
{
	const name = 'Danh';
	console.log('Trong phạm vi ngoặc nhọn', name); //Trong phạm vi ngoặc nhọn Danh
}
console.log(name); //name is not defined

//nested block scope
{
	{
		const name = 'Danh';
	}
	console.log(name); //name is not defined
}

//Function scope: phạm vi trong một cái function hiện tại

function sayHello() {
	const name = 'Danh';
	console.log(name); //Danh

	function print() {
		const language = 'en';
		console.log(language); //en
	}
	print(); // en
	console.log(language); //language is not defined
}

sayHello();
console.log(name); //name is not defined
//Lưu ý var là function scope

//Lexical scope: nơi định nghĩa scope ở đâu ?
const name = 'Danh IT';

function sayHello() {
	const language = 'en';
	console.log(name);
	//the lexical of name is global scope
	function printLanguage() {
		console.log(language);
		//the lexical of language is function scope (sayHello)
	}
}

//Global scope
/*
    global object trong trình duyệt
*/

//Scope chanin
const fullName = 'Danh IT';

function profile() {
	const fullName = 'Danh Nguyen';
	function sayName() {
		const fullName = 'Boooom';

		function writeName() {
			return fullName;
		}
		return writeName();
	}
	return sayName();
}
profile();
