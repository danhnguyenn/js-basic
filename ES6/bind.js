/*
  bind, call, apply



*/

// bind => tạo ra cái function mới

const obj = { num: 2 };

const add = function (a, b) {
	return this.num + a + b;
};

const bound = add.bind(obj);
console.log(bound(2, 1));

// call, apply => thực thi ngay hàm đó luôn
// apply khác với hàm call là truyền tham số ( tham số dạng mảng )
console.log(add.call(obj, 3, 1));

const args = [3, 1];
console.log(add.apply(obj, args));

//Lưu ý: Chỉ làm việc với regular function or normal function
// Arrow function: không có this riêng của nó chỉ kế thừa cái this của thằng cha
