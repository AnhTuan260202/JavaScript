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


/**
 * Callback (truyền tham số là một hàm) sử dụng để chạy đồng bộ hàm
 * Callback Hell: callback lồng nhau quá sâu, nhiều tầng
 */
// function asyncFunction(callback) {
//     // ...
// }
// asyncFunction(function() {
//     asyncFunction(function() {
//         asyncFunction(function() {
//             // ....
//         })
//     })
// })

/**
 * Promise: sử dụng cho tính toán bất đồng bộ. Một promise đại diện cho một tiến trình hay một tác vụ chưa thể hoàn thành ngay được
 * Trong tương lai sẽ trả về giá trị hoặc là đã được giải quyết(resolve) hoặc là không (reject)
 * gồm 3 trạng thái: pending, fulfilled, rejected
 */

// const isDadHappy = true; // tâm trạng của bố

// // Định nghĩa một promise
// let buyNewToy = new Promise(function(resolve, reject) {
//     if (isDadHappy) {
//         let toy = {
//             name: "Oto Camry 2.0 moi nhat"
//         }
//         resolve(toy);
//     } else {
//         reject("Bo xin loi khong mua duoc roi");
//     }
// });

// // Cách dùng
// let askDad = function() {
//     buyNewToy.then(function (fulfilled) {
//         console.log("Minh nhan duoc mot mon do choi tu bo la: " + fulfilled.name);
//     })
//     .catch(function(reject) {
//         console.log("Khong co do choi nao ca");
//     })
// }

// askDad();


/**
 * ==== Class ====
 */

/** Cách 1: Sử dụng từ khoá extends để kế thừa các Object định nghĩa bằng từ khoá class */
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         return `${this.name} đang ăn giò`;
//     }
// }

// class Student extends Person {
//     constructor(name, id) {
//         super(name);
//         this.id = id;
//     }

//     eat() {
//         return `${super.eat()},\nMSV: ${this.id}`;
//     }
// }

// let sinhvien = new Student('NPT', 18);
// console.log(sinhvien.eat());

/** Cách 2: Sử dụng Prototype */
// function Person(firstName, lastName) {
//     this.firstName = firstName || 'unknown';
//     this.lastName = lastName || 'unknown';
// }

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName;
// }

// function Student(firstName, lastName, schoolName, grade) {
//     Person.call(this, firstName, lastName);
//     this.schoolName = schoolName || 'unknown';
//     this.grade = grade || 0;
// }
// Student.prototype = new Person();
// Student.prototype.constructor = Student;
// var std = new Student('NP', 'T', 'ABC', 12);

// console.log(std.getFullName());
// console.log(std instanceof Student);
// console.log(std instanceof Person);

/**
 * Nạp chồng: Overloading
 */
// function countItems(x) {
//     return x.toString().length;
// }
// console.log(countItems(123));
// console.log(countItems("abcd"));

// function sum(x = 0, y = 0, z = 0) {
//     x = parseFloat(x);
//     y = parseFloat(y);
//     z = parseFloat(z);
//     return x + y + z;
// }
// console.log(sum(3, 4, 5));
// console.log(sum(3, 4));
// console.log(sum(3, 4, '5'));


/**
 * === Cú pháp ES6 ===
 */

/**
 * String
 */
// // Template Literals: Truyền biến vào String sử dụng dấu ``:
// const a = 10, b = 50;
// const str = `Truyền biến: ${a} ${a > b ? '>' : '<='} ${b}`
// console.log(str);


// // Tagged Templates: chuyển đổi 1 template literal và trả về một giá trị
// function passthru(literals, ...substitutions) {
//     let result = '';
//     console.log(literals);
//     console.log(substitutions);
//     // chạy một vòng lặp để đếm số lượng
//     for (let i = 0; i < substitutions.length; i++) {
//         result += literals[i];
//         result += substitutions[i];
//     }
//     // thêm chữ cuối cùng
//     result += literals[literals.length - 1];
//     return result;
// }
// let count = 10,
//     price = 0.25,
//     message = passthru`${count} vật phẩm ${"abc"} có giá $${(count * price).toFixed(2)}`;
// console.log(message);

/**
 * Function
 */
// // Function có tham số mặc định
// function sum(a, b = 0, c = 0) {
//     return a + b + c;
// }
// console.log(sum(10, 9));

/**
 * Arrow Function
 * Không sử dụng được this, super, arguments.
 * Không có bind => không thể định nghĩa lại this do đó this sẽ tương ứng với ngữ cảnh gần nhất của nó
 * Không thể gọi hàm với từ khoá new. Không có constructor
 * Không có prototype
 */
// let sum = (a = 0, b = 0, c = 0) => a + b + c;
// console.log(sum(10, 9));

// let doNothing = () => {
//     console.log("Do something");
// }
// doNothing();


/**
 * === Destructuring ===
 * Dùng để bóc tách dữ liệu trong JSON một cách nhanh chóng
 * Object
 * Array
 */

// // Object Destructuring
// const route = {
//     title: 'Trang chủ',
//     component: 'A component',
//     path: '/home'
// };

// let {path, title, component} = route;
// console.log(title);
// console.log(path);
// console.log(component);

// // Array Destructuring
// let colors = ['red', 'green', 'blue'];

// let [, secondColor, threeColor] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(threeColor);
// var firstColor;

/**
 * Spread operator (...):
 * Ghép nối/kết hợp nhiều mảng
 * Kết hợp 2 hay nhiều Object với nhau
 * Làm đối số cho function
 * Rest Prameters
 */
// // Ghép nối/kết hợp nhiều mảng
// const users = ['A', 'B', 'C'];
// const extend_users = ['D', 'E'];
// // console.log(users.concat(extend_users));
// const more_users = [...users, ...extend_users];
// console.log(more_users);

// // Kết hợp 2 hay nhiều Object với nhau
// let objectOne = {
//     name: "VNTALKING",
//     age: 4
// }
// let objectTwo = {
//     createDate: "16/12/2017",
//     founder: "Dương Anh Sơn"
// }
// //Kết hợp hai objectOne và objectTwo, đồng thời thêm cả thuộc tính mới
// let merge = {...objectOne, ...objectTwo, status: "Đang hoạt động"}
// console.log(merge)

// // Làm đối số cho function
// function multiply(a, b) {
//     return a * b
// }
// const numbers = [6, 7, 8]
// // let result = multiply.apply(null, numbers); // ES5
// let result = multiply(...numbers); // ES6
// console.log(result);
// console.log(...numbers);

// // Rest Prameters
// function display(a, b, ...theRest) {
//     console.log(a) // 4
//     console.log(b) // 8
//     console.log(theRest);
// }
// display(4, 8, 15, 16, 17, 18)

/**
 * === Module ===
 * Đóng gói mã nguồn thành một bộ phận chạy độc lập trong dự án
 * === Export ===
 * Xuất bản một đoạn mã (có thể là hàm, biến, ...) ra ngoài để có thể sử dụng
 * === Import
 * Sử dụng đoạn mã được Export từ một module, cần phải import module vào
 */

/** Export */
// file example.js
import {myFunction} from "./example.js";
myFunction();