let OP = document.getElementById("output");
localStorage.setItem("APP", "When I was young, I was young.");
const leadsFromLocalStorage = localStorage.getItem("APP");

if(leadsFromLocalStorage){
    OP.textContent = leadsFromLocalStorage;
}