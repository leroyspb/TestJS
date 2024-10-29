
//
// Задание 1.
//
// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
//
// Если это число, то вывести в консоль чётное оно или нечётное.
//
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
//
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.



// let num = 454
// if (typeof num === 'string') {
//     console.log('Упс, кажется, вы ошиблись.')
// } else if (numplus = ++num){
//     console.log(numplus)
//     console.log(typeof numplus)
//     } if (typeof numplus === 'number') {
//         if (numplus !==numplus){
//             console.log('The input is NaN.')
//             } else if (numplus % 2 === 0) {
//                 console.log('Это число четное')
//             } else if (numplus % 2 === 1) {
//                 console.log('Это число нечетное.')
//             }
//     } else if (typeof numplus === 'string') {
//         console.log('Упс, кажется, вы ошиблись')
//
//     }



// Задание 2.
//
// Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
//
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
//
// Удачи!


// x = 356
// if (typeof x === 'number') {
//     console.log('X - число')
// } else if (typeof x === 'string') {
//     console.log('X - строка')
// } else if (typeof x === 'boolean'){
//     console.log('X - булево значение')
// } else console.log('X - неопределен')

// let name = 'Igor';
// let lastName = 'Miasoedov';
// let result = `${name} хорошего дня!`;
// console.log(result);

// function getFullName (strings, nameExp, lastNameExp ) {
//     let str0 = strings[0];
//
//     let str1 = strings[1];
//     return `${str0}${nameExp}${str1}${lastNameExp}`;
// }
// let result = getFullName`My name is ${name} and the last name is ${lastName}`;
// console.log(result.slice(10));

// let string = "I love JavaScript"
// console.log(string.length)
// console.log(string.toLowerCase())
// console.log(string.toUpperCase())
// let result
// let substr
//
//
// if(string.includes('love')){
//     result = string.toUpperCase()
//     substr = string.slice(0, 11)
// } else {
//     result = string.toLowerCase()
// }
//
//
// console.log(result)
// console.log(substr)
//
// let number = 1e3
// console.log(number)


// Задание 3.
//
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

// string3 = "Hello"
// stringSlice = string3.split('').reverse().join('')
// console.log(stringSlice)

// Задание 4.
//
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
//
// Удачи!
//
// numRandom = Math.random() * 100
// console.log(Math.floor(numRandom))

// let lostNums = [4, 5, 6, 7, 8, 9, 10, 11, 12]
//
// let sum = 0
// for (let i = 0; i < lostNums.length; i++){
//     sum += lostNums[i]
//     // debugger
// }
// sum2 = lostNums.pop()
// sum2 = lostNums.pop()
// console.log(sum2)
//
// let fruits = ['apple', 'orange', 'melon', 'cucumber']
// let fruit2 = ['juice']
// let fruit3 = fruits.concat(fruit2)
// console.log(fruit3)
// fruits.splice(1, 4,'junior','lips')
// console.log(fruits)


// Задание 5.
//
// Дан произвольный массив. Необходимо вывести количество элементов массива,
// затем перебрать его и вывести в консоль каждый элемент массива.
//
// Удачи!


// let array = [1, 2, 3, 4, 5]
// console.log(array.length)
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// const arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }
//
// let i = 0
// while (i < arr.length){
//     console.log('*' + arr[i])
//     i++
// }

// let i = 0;
// do {
// console.log(arr[i]);
// i++;
// }
//
// while (i < arr.length)

// arr.forEach(function(item, index, array){
//     console.log(`Это item элемент ${item}, Это индекс положения ${index} , Это сам массив ${array}`)
// })
//
// for (let i = 0; i < arr.length; i){
//     console.log(`Это элемент от i ---${arr[i]}, Это индекс --- ${i}, А это сам массив --- ${arr.join(' !!!')} `)
//     i++;
// }

//
//
// const arr = [3, 5, 6, 7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//
// i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }
// i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length);
//
// arr.forEach(function (item, index, array){
//     console.log(item, index, array)
// })


// Задание 6.
//
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
//     Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить,
//     все ли элементы в массиве одинаковые.


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let isEqual = array.every((item, index, array) => array.indexOf(item) === index)
// if (isEqual) {
//     console.log('Все элементы массива оригинальны')
// } else {
//     console.log('Не все элементы массива оригинальны')
// }



// // Задание 7.
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let array = [1, 2, 3, 4, 5]
// // console.log(array.length)
// // for (let i = 0; i < array.length; i++) {
// //     console.log(array[i])
// // }
// count2 = 0
// count1 = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         count2++
//     } else if (array[i] % 2 === 1) {
//         count1++
//     }
// }
// console.log(`Количество чётных элементов: ${count2}`)
// console.log(`Количество нечётных элементов: ${count1}`)

// Задание 7.
//
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
//
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, null, 'a', 'b', undefined]
// let countEven = 0
// let countOdd = 0
// let countZero = 0
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number' && array[i] % 2 === 0) {
//         countEven++
//         console.log(array[i])
//     } else if (typeof array[i] === 'number' && array[i] % 2 === 1) {
//         countOdd++
//         console.log(array[i])
//     } else if (array[i] === 0) {
//         countZero++
//     }
// }
//
// console.log(`Количество чётных элементов: ${countEven}`)
// console.log(`Количество нечётных элементов: ${countOdd}`)

// let user = {
//     name: 'Ivan',
//     age: 30,
//     city: 'Moscow',
//     isStudent: true,
//     grades: [85, 92, 90, 88, 95]
//
// }
//
// let map = new Map();
// map.set('1','string')
// map.set(1, 'number')
// map.set(true, 'boolean')
//
//
// // console.log(map.get(1))
// console.log(map.get(1))
// console.log(map.get(true))
//
//
// let fruits = new Map([
//
//   ["apple", "green"],
//
//   ["strawberry", "red"],
//
//   ["blueberry",    "blue"]
//
// ]);
//
//
// for (let name of fruits.keys()) {
//
//   console.log(name); // apple, strawberry, blueberry
//
// }
//
// for (let color of fruits.values()) {
//
//   console.log(color); // green, red, blue
//
// }
//
// for (let elem of fruits) { // то же самое, что и fruits.entries()
//
//    console.log(elem); // apple, green, strawberry, red, blueberry, blue
//
// }
//
// let myMap = new Map();
// myMap.set('key', 'prop');
// myMap.set(1, 'prop2');
// myMap.set(true, 123);
// console.log(myMap.values());
//
// for(let name of myMap.keys()) {
//     console.log('Значение ключа', name);
// }
//
// for(let name of myMap.values()) {
//     console.log('Значение свойства', name);
// }




// Задание 8.
//
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//
// Используйте шаблонные строки.


// let myMap = new Map();
//
// myMap.set('name', 'Igor')
// myMap.set('age', 35)
// myMap.set('city', 'Saint-Petersburg')
//
// for (let [key, value] of myMap) {
//     console.log(`Ключ — ${key}, значение — ${value}`)
// }


// Моё решение!!!


// let myMap = new Map();
//
// myMap.set('name', 'Igor')
// myMap.set('age', 35)
// myMap.set('city', 'Saint-Petersburg')
//
// console.log(myMap.keys());
// console.log(myMap)

// function getSum(a, b) {
//     const result = a + b
//     return result
// }
//
// const str = `Сумма двух чисел ${getSum(1, 2)}`
// console.log(str)

// Задание 2.
//
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
// является ли оно простым, и выводит простое число или нет. Если введено больше 1 000,
// то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
//
// Удачи!

// isPrimeNumber = num => {
//   if (num <=1000){
//     let result = true;
//     if (num <=1) {
//       result = false;
//     }
//     for (let i = 2; i*i<=num; i++){
//       if (num % i === 0) {
//         result = false;
//         break;
//       }
//     }
//     if (result) {
//       console.log('Это число простое')
//     } else {
//       console.log('Это число не простое')
//     }
//   } else {
//     console.log('Введите число менее или равное 1000')
//   }
// }
//
//
// isPrimeNumber(0)

// function example(func){
//     func();
//     return function(){
//         console.log('internal function')
//     }
// }
//
// function argFunc(){
//     console.log('function from arguments')
// }
//
// const resultFunc = example(argFunc);
//
// resultFunc();





// ПРИМЕР ВЫПОЛНЕНИЯ ВЛОЖЕННОЙ ФУНКЦИИ
// function example(func){
//   // вызываем функцию, которую приняли как аргумент
//   func();
//  // возвращаем функцию
//   return function(){
//     console.log('internal function')
//   }
// }
// // функция, которую будем передавать как аргумент в функцию example
// function argFunc(){
//   console.log('function from arguments')
// }
// // в переменную resultFunc записываем результат выполнения функции example
// // функция, которая передаётся как аргумент, должна быть без круглых скобок
// const resultFunc = example(argFunc);
// // после вызова example() внутри неё будет вызвана функция argFunc, которую мы передали как аргумент, и в консоли будет текст: function from arguments
// // вызываем функцию
// resultFunc(); // 'internal function




// Задание 3.
//
// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.
//
// Удачи!
//
// smthFunc = num1 => {
//     return getSumFunction = num2 => {
//         return num1 + num2
//     }
// }
//
// const resultFunction = smthFunc(5)
// console.log(resultFunction(3)) //8
// console.log (smthFunc(8)(10)) //18



//
// function copyArrayAndSquareNums(arr) {
//     const output = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] ** 2)
//     }
//     return output;
// }
//
// function copyArrayAndDivideByTwo(arr) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] / 2)
//     }
//     return output;
// }
//
// function copyArrayAndDoSmth(arr, instructions) {
//     const output = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         output.push(instructions(arr[i]));
//     }
//     return output;
// }
//
// function numSquared(num) {
//     return num * num;
// }
//
// function divideBy2(num) {
//     return num / 2;
// }
// const result1 = copyArrayAndDoSmth([1, 2, 3], numSquared)
// const result = copyArrayAndDoSmth([1,2,3], numSquared);



// const a  = 1;
//
// function foo() {
//     console.log(a)
// }
//
// foo();

// function foo() {
//     console.log(1)
// }
//
//
// (function(){
//     console.log(1)
// })();
//
// (function(){
//     console.log(2)
// }());
//
//
// const arr= [1, 2, 3]
//
// arr.forEach(function(item){
//     console.log(item + 1.5)
// })
//


// clearTimeout(timeoutId)

// setTimeout(function (){
//     clearInterval(intervalid)
// }, 5100)
// // setInterval(sum, 1000, 2, 3)




// Задание 4.
//
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и
// заканчивая вторым. Используйте setInterval.
//
// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и
// заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
//
// Удачи!

//
// const getNums = (a, b) => {
//     let i = setInterval(function (){
//     console.log(a++);
//     if (a > b) {
//         clearInterval(i);
//     }}, 1000)
//    }
//
// getNums(5,15)


//
// let i = 1
// setInterval(function print() {
//   console.log(i)
//   i++
// }, 1000,5,15)






const arrow = () => {
    console.log('Выполнение')
}

arrow()

sayMyName = name => console.log('My name is ' + name)

sayMyName("Uriy")


// Задание 5.
//
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
//     Иначе говоря, умножает x на себя n раз и возвращает результат.
//// Используйте Arrow Function синтаксис.
//   Протестируйте функцию на любых значениях и выведите результат в консоль.
//
// Удачи!

expNums = (x, n) => {
    if (Number.isInteger(x) && Number.isInteger(n) && x >=0 && n >=0){
        console.log(x ** n)
    } else {console.log("Введите натуральные числа")}

}

expNums(3,2   )


// Задание 1.
// // Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и,
// например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
// вызовите функцию, проанализируйте синтаксис.
// Удачи!


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, null, 'a', 'b', undefined]

CountEvenOddNums = (array) =>{
    let evenCount = 0
    let oddCount = 0
    let zeroCount = 0

    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === "number" && !isNaN(array[i])) {
                if (array[i] === 0) {
                    zeroCount++;
                }else if (array[i] % 2 === 0){
                evenCount++;
                }else {oddCount++;}
            }
    }
    console.log("Всего чётных элементов в массиве: " + evenCount)
    console.log("Всего нечётных элементов в массиве: " + oddCount)
    console.log("Всего нулей в массиве: " + zeroCount)
}

CountEvenOddNums(array)