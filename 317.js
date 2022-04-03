//document.getElementById("count-el").innerText = 5;

console.log("java loaded");
let a = 37;
let nam = 'Changeun';
console.log(a);
console.log(nam);
console.log(a/10 + a%10)
let id = 2137;
console.log(id + nam);

let cnt = 0;


let sam = 3;
let saam = '3';
let s = 0;
console.log(sam + saam);

function increase(){
    console.log("clicked!");
    document.getElementById("count-el").innerText = ++cnt;
}

function save(){
    if(s == 0) {
        document.getElementById("history").textContent += cnt;
        s++;
    }
    else {
        document.getElementById("history").textContent += ' - ' + cnt;
    }
    cnt = 0;
    console.log("cleared!");
    document.getElementById("count-el").innerText = cnt;
}