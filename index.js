const content = document.getElementById("content");
content.innerHTML = "This is content<br>";


// let website = {
//     name: "Anh Tuan",
//     location: "Hà Nội - Việt Nam",
//     established: "2018",
//     displayInfo: function() {
//         console.log(`${website.name} was established in ${website.established} at ${website.location}`);
//     }
// };


// website.displayInfo();

// const object = new Object();
// object.property1 = 42;
// console.log("property1 là own property: " + object.hasOwnProperty("property1"));

/**
 * === Có 4 cách để khởi tạo một object ===
 * Dùng Objet literals
 * Dùng Object constructor
 * Sử dụng Object Contructor functions
 * Sử dụng prototype pattern
 */

// Cach 1: obj và ví dụ myCar
// var obj = {
//     member1 : "value1",
//     member2 : "value2",
// };

// var myCar = {
//     brand: 'Toyota',
//     run: function() {
//         console.log('Xe oto đang chạy bon bon trên đường');
//     },
//     wheel: {
//         color: 'black',
//         size: 20
//     }
// };

// Cách 2:
// const obj2 = new Object();
// obj2.name = 'Anh Tuan';
// obj2.location = 'Hà Nội - Việt Nam';
// obj2.established = 2018;
// obj2.displayInfo = function() {
//     console.log(`${website.name} was established in ${website.established} at ${website.location}`);
// };

// Cách 3:
// function Vehicle(name, maker) {
//     this.name = name;
//     this.maker = maker;
// }
// const car1 = new Vehicle('Fiesta', 'Ford');
// const car2 = new Vehicle('Santa Fe', 'Hyundai');
// console.log(car1.name);
// console.log(car2.name);

// class People {
//     constructor() {
//         this.name = 'Hoàng Anh Tuấn';
//     }
// }
// let person = new People();
// console.log(person.name);

// Cách 4:
// function Person(name) {
// }

// Person.prototype.name = "Hoàng Anh Tuấn";
// Person.prototype.age = 21;
// Person.prototype.address = "Hà Nội - Việt Nam";
// Person.prototype.displayName = function() {
//     console.log(this.name);
// }

// var person = new Person();
// person.displayName();
// console.log(person['age']);

// for (const key in person) {
//     const element = person[key];
//     console.log(key + " : " + element);
// }

// console.log(person.name);
// delete Person.prototype.name;
// person.displayName();




/**
 * === Có 2 cách để khởi tạo một Array ===
 * Dùng Array literals
 * Dùng Array constructor
 */

// Cách 1:
// let house = [];
// var webLanguages = ['HTML', 'CSS', 'JS'];

// Cách 2:
// var house = new Array();
// var courses = new Array('HTML', 'CSS', 'JS');

// // courses.unshift('NoteJS', 'ReactJS'); // Them dau
// courses.push('NoteJS', 'ReactJS');    // Them cuoi
// console.log(courses);
// console.log(courses.pop());  // Xoa phan tu cuoi va tra ve gia tri cua no
// // console.log(courses.shift());  // Xoa phan tu dau va tra ve gia tri cua no
// console.log(courses);

// let mobiles = ["HTC", "Nokia", "Apple", "LG", "Honda", "SYM", "Suzuki"];
// console.log(mobiles);
// // mobiles.splice(1, 4); // xoa tu chi so 1 den 4
// // console.log(mobiles);

// mobiles.splice(1, 4, courses, "so 2", "..."); // xoa tu chi so 1 den 4 va them mot hoac nhieu phan tu moi vao
// console.log(mobiles);


/**
 * === Ghép nhiều mảng thành 1 mảng ===
 * dùng concat:
 */
// const array1 = [1, 2, 4, 3, 5];
// const array2 = [3, 4, 5, 3, 12];
// const array_concat = array1.concat(array2);
// console.log(array_concat);

/**
 * === Trích xuất 1 phần của mảng ===
 * co the truyen so am voi -1 la phan tu cuoi cung
 */
// const array = [1, 2, 3, 4, 5, 6];
// // const sub_array = array.slice(1); // lay tu chi so 1 den het
// const sub_array = array.slice(1, 4); // lay cac chi so 1, 2, 3
// console.log(sub_array);


/**
 * Sap xep: array.sort(hàm so sánh)
 */
// const array = [1, 3, 41, 15, 2, 1];
// array.sort((a, b) => (a - b)) // arrow function
// console.log(array);

/**
 * Tim kiem: array.find(ham kiem tra)
 */
// const persons = [
//     {id: 1, name: "Trang"},
//     {id: 2, name: "Doanh"},
//     {id: 3, name: "Son"},
// ]
// const person = persons.find(function(person) {
//     return person.name === "Doanh";
// })

// console.log(person);


/**
 * map(): sử dụng để biến đổi cácp hần tử trong một mảng thành một kiểu khác cùng số lượng của mảng ban đầu
 */
// const array = [1, 2, 3, 4, 5];
// const new_array = array.map(function(x) {
//     return x ** 2;
// })

// console.log(new_array);

/**
 * filter(): lọc những phần tử thoả mãn điều kiện bằng cách duyệt từng phần tử để kiểm tra điều kiện
 */
// const ages = [5, 12, 13, 24, 33, 16, 40];
// let can_watch = ages.filter(function(age) {
//     return age >= 18;
// });
// console.log(can_watch);

/**
 * every(): kiểm tra tất cả phần tử trong mảng có thoả mãn điều kiện hay không
 */
// const ages = [5, 12, 13, 24, 33, 16, 40];
// var result = ages.every(function(x) {
//     return x > 4;
// });

// console.log(result);

/**
 * some(): tìm xem mảng có ít nhất 1 phần tử thoả mãn điều kiện hay không
 */
// const ages = [5, 12, 13, 24, 33, 16, 40];
// var result = ages.some(function(x) {
//     return x <= 5;
// });

// console.log(result);


/**
 * Higher Order Function: là một hàm
 * Chấp nhận truyền một hàm qua tham số
 * Hoặc hàm đó có thể return về một hàm
 * Ưu điểm: tối ưu code thoả mãn tiêu chí: Single Responsibility là mỗi hàm chỉ nên làm duy nhất một nhiệm vụ
 */

// function higherOrder (number, sayLog) {
//     let result = number * 10;
//     sayLog(result);
// }

// higherOrder(15, (message) => console.log(message))

// // Định nghĩa các hàm tính toán mà không biết trước sẽ sử dụng cộng, trừ, nhân hay chia cho đến khi gọi hàm
// function doOperation(number1, number2, operation) {
//     return operation(number1, number2);
// }

// function sum(number1, number2) {
//     return number1 + number2;
// }

// function minus(number1, number2) {
//     return number1 - number2;
// }

// function multiplier(number1, number2) {
//     return number1 * number2;
// }

// function divide(number1, number2) {
//     if (number2 != 0) {
//         return number1 / number2;
//     }
// }

// // Gọi hàm:
// number1 = 10;
// number2 = 3;
// console.log(number1 + ' + ' + number2 + ' = ' + doOperation(number1, number2, sum));
// console.log(number1 + ' - ' + number2 + ' = ' + doOperation(number1, number2, minus));
// console.log(number1 + ' x ' + number2 + ' = ' + doOperation(number1, number2, multiplier));
// console.log(number1 + ' / ' + number2 + ' = ' + doOperation(number1, number2, divide));

// // Trả về hàm
// function multiplyBy(multiplier) {
//     return function result(num) {
//         return num * multiplier
//     }
// }
// //Lúc sử dụng: result => functionName
// functionName = multiplyBy(3);
// let result = functionName(4);
// console.log(result)
