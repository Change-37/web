let fruits = ["banana", "apple", "pineapple", "strawberry"]

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

fruits.pop(); // 맨 뒤 제거

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

fruits.push("orange"); // 맨 뒤에 요소 추가

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

fruits.shift(); // 맨 앞 제거

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");

fruits.unshift("melon"); // 맨 앞에 요소 추가

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log(" ");
