// const player = {
//     name: 'Park Changeun',
//     club: 'BSSM',
//     address: {
//         city: 'Busan'
//     }
// }
// console.log(player.address.city);

// const { name, club, address: {city} } = player;
// console.log(`${name} students for ${club}`);
// console.log(`${name} live in ${city}`);

// let fullname = ['Changeun', 'Park'];
// console.log(fullname[1]);

// let [firstname, lastname] = ['Changeun', 'Park'];
// lastname = 'Bak'
// console.log(lastname);

// function addressMaker(city, state) {
//     const newAddress = {city, state};
//     console.log(newAddress);
// }
// addressMaker('Jin-gu', 'Busan');

// let incomes = [63000, 67000, 75000];
// let total = 0;

// for(const income of incomes) {
//     console.log(income);
//     total += income;
// }
// console.log(total);

// let answer = 'BSSM is awesome!'
// for(const a of answer){
//     console.log(a);
// }

// let atog = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// let atoi = [...atog, 'h', 'i']; // 간접연결
// console.log(atoi);

// let person = {
//     name: 'Ain',
//     age: 25
// }
// let employee = {
//     ...person,
//     salary: 5000,
//     job: 'programmer'
// }
// console.log(employee);

// function add(...nums){
//     console.log(nums);
// }

// add(4,1,3,32,2,6,3,3,21,2,1);

// function breakfastMenu(food) {
//     return `I'm going to eat ${food} for breakfast.`
// }
// console.log( breakfastMenu('McMorning') );

// const lunchMenu = function(food = 'soup') {
//     return `I'm going to eat ${food} for lunch.`
// }
// console.log( lunchMenu('pasta') );
// console.log( lunchMenu() );

// const dinnerMenu = (food) => `I'm going to eat ${food} for dinner.`
// console.log( dinnerMenu('chicken') );

// const dinnerMenu2 = (food, drink) => `I'm going to eat ${food} with ${drink} for dinner.`
// console.log( dinnerMenu2('chicken', 'soda') );

// const array1 = new Set([1, 2, 3, 6, 1, 2, 4, 1, 3, 2, 4, 3]);
// // console.log(array1.includes(2));
// array1.add(5);
// array1.add(3).add(27);
// console.log(array1.delete(5));
// console.log(array1.has(27));
// console.log(array1);
// console.log([...array1][0]);

// const pets = ['dog', 'cat', 'snake'];
// console.log(pets.includes('rabbit'));

// let example = 'Wah!';

// console.log(example.padStart(120, 'A'));
// console.log(example.padEnd(10, 'A'));

// class Animal {
//     constructor(type, legs) {
//         this._type = type;
//         this.legs = legs;
//     }
//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }
//     get type() {
//         return this._type.toUpperCase();
//     }
//     set type(newType) {
//         if(newType) {
//             this._type = newType;
//         }
//     }
//     static return10() {
//         return 10;
//     }
// }

// class Cat extends Animal {
//     constructor(type, legs, tail) {
//         super(type, legs);
//         this.tail = tail;
//     }
//     makeNoise(sound = 'Meow') {
//         console.log(sound);
//     }
// }

// let dog = new Animal('dog', 4);
// dog.makeNoise();
// dog._type = 'siba';
// console.log(dog._type);

// const buyFlightTicket = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const error = false;
//             if (error) {
//                 reject('Sorry');
//             }
//             else{
//                 resolve('Success');
//             }
//         }, 3000);
//     })
// }
// buyFlightTicket()
// .catch( (error) => console.log(error) )
// .then( (success) => console.log(success) );

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// const photos = [];
// async function photoUpload() {
//     let uploadStatus = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             photos.push("Profile pic");
//             resolve("Photo uploaded!");
//         }, 3000);
//     });
//     let result = uploadStatus;
//     console.log(result);
//     console.log(photos.length);
// }
// photoUpload();

// const shoppingList = ["eggs", "milk", "butter"];
// const shoppingBasket = [...shoppingList, "bread", "water"];
// console.log(shoppingBasket);

// function foodShopping(shop = "nothing"){
//     console.log(`I'm going to buy ${shop} form the grocery shop.`);
// }
// foodShopping("egg");
// foodShopping();

// const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];
// console.log(listIngredients.includes("butter"));

// let example = 'YouTube.com/CodingTutorials360';
// // console.log(example.padStart(100)); // 앞에 띄워쓰기 100번 함
// // console.log(example.padEnd(1)); // 뒤에 띄워쓰기 1번 함

// class Player {
//     constructor(name, country) {
//         this.name = name;
//         this.country = country;
//     }
//     introduce(name = this.name, country = this.country){
//         console.log(`${name} was born in ${country}`);
//     }
// }
// class TennisPlayer extends Player {
//     constructor(name, age) {
//         super(name)
//         this.age = age;
//     }
//     introduce(name = this.name, age = this.age) {
//         console.log(`${name} is ${age} years old and how to play Tennis`);
//     }
// }

// let messi = new Player('Messi', 'Argentina');
// messi.introduce();
// let rafael = new TennisPlayer('Rafael Nadal', 34);
// rafael.introduce();

// const getUserData = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const error = false;
//             if (error) {
//                 reject('Error');
//             }
//             else{
//                 resolve('data');
//             }
//         }, 3000);
//     })
// }
// getUserData()
// .catch( (error) => console.log(error) )
// .then( (success) => console.log(success) );

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json.body));

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json.body));

// async function getRandJoke() {
//     return await fetch('https://api.chucknorris.io/jokes/random')
//       .then(response => response.json())
//       .then(json => console.log(json.value));
// }
// getRandJoke();