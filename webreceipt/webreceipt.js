let _btn1 = false;
let _btn2 = false;
let _btn3 = false;
let s = 0;
const ulEl = document.getElementById("ul-el");
const btn1 = document.getElementById("btn1-el");
const btn2 = document.getElementById("btn2-el");
const btn3 = document.getElementById("btn3-el");
const reset = document.getElementById("reset-btn");
const sumEl = document.getElementById("sum");

function renderList(){
    ulEl.innerHTML = "";
    s = 0;
    if(_btn1){
        s += 30000;
        ulEl.innerHTML += `<li>차량 외부 손세차</li>`
    }
    if(_btn2){
        s += 40000;
        ulEl.innerHTML += `<li>차량 내부 손세차</li>`
    }
    if(_btn3){
        s += 20000;
        ulEl.innerHTML += `<li>스팀 세차</li>`
    }
    sumEl.textContent = "총합: " + s + "원"
}
btn1.addEventListener("click", function(){
    _btn1 = true;
    renderList();
})
btn2.addEventListener("click", function(){
    _btn2 = true;
    renderList();
})
btn3.addEventListener("click", function(){
    _btn3 = true;
    renderList();
})
reset.addEventListener("click", function(){
    _btn1 = false;
    _btn2 = false;
    _btn3 = false;
    renderList();
})

