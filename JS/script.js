'use strict'; // прописывается только в начале работает на es6  и подчищает косяки

let number = 5;
const leftBorderWidth =1;

// let изменяемая переменная, const неизменяемая, прямых констант в js не бывает

number = 10;
console.log(number);

var Тame = 'ivan'; // глобальная переменная видна даже до того как ее объявили, 
/*let так не работает как и const, так же они имеют ограниченную видимость 
только внутри {} скобок где они объявлены*/
// типы данных
/*infinity бесконечность
 NaN - не число не мат опрерация
 String - строка
 Number - 
 Symbol -
 Boolean  -логический
 null - ссылка на не существуцющую вещь
 undefined - значение не определено
 obj {} - структура для хранения типов данных 
 */

 let person = { 
    name: "John",
    age: 25,
    isMarried: false
 };

 console.log(person.isMarried);
 //console.log(person["name"]);
 let arr =['a', 'b', 'c'];
 console.log(arr[0]);

 //alert("hello world");
 /*let answer = confirm('You like JS');
 console.log(answer);*/

let answer = prompt('enter your age?', '18');
console.log(typeof(answer));
console.log(3);
