/**
 * Xuất hiện từ ECMAScript 5
 * Công dụng: 
   + Giúp chạy nhanh hơn
*/

//Cách sử dụng

//Bật cho toàn bộ strict
// 'use strict';
const message = "Hi ! I'm strict mode script!";
function sayHello() {}

//in Non-strict mode
channelName = 'Danh IT';
console.log(channelName); //Danh IT

//strict mode
'use strict';
channelName = 'Danh IT';
console.log(channelName); //channelName is not define

