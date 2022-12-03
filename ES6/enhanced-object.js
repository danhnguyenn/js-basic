//short hand

const id = 1;

const fullName = 'Danh Nguyen';

const age = 18;

const student = {
	id,
	fullName,
	age
};

console.log(student);

// Computed property name

//Method properties
const studentOne = {
	getPower() {
		return 100;
	}
};

console.log(studentOne.getPower());

// Desctructuring

const studentTwo = {
	id: 1,
	name: 'Danh IT'
};

const { id: studentId, name } = studentTwo;

console.log({ studentId, name });

//Object.assign() => giữ tham chiếu


