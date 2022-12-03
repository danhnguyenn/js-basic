/*
Đặt vấn đề 
Thỉnh thoảng có những hàm tạo ra chỉ dùng một lần

function App(){
    useEffect(()=> {
        function fetchData(){

        }
     
        fetchData();
    
    },[])
   
    return null;
}

*/
//syntax

/*Anonymous function */
(function () {
	console.log('Anonymous function');
})();

/*Arrow function*/

(() => {
	console.log('Arrow function IIFE');
})();

/*Truyền tham số */

((a, b) => {
	console.log(a + b);
})(10, 5);

//Lưu ý không truy xuất từ bên ngoài được

//Sử dụng IIFE khi có nhu cầu tạo ra hàm chỉ để sử dụng 1 lần duy nhất
