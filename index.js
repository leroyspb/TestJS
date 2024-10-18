
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
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
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
//     Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


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


