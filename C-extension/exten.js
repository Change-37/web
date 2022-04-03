let myLeads = [];
let myLinks = [];
const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const delBtn = document.getElementById("del-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("Leads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderItems();
}
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("Leads", JSON.stringify(myLeads));
    inputEl.value = '';
    renderItems();
    console.log('input');
})
saveBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs){
        let url = tabs[0].url;
        myLeads.push(url);
        localStorage.setItem("Leads", JSON.stringify(myLeads));
        renderItems();
    });
    console.log('saved');
})
delBtn.addEventListener("dblclick", function(){
    myLeads = [];
    localStorage.clear();
    renderItems();
    console.log('delete');
})

function renderItems(){
    let listItem = "";
    for(let i = 0; i < myLeads.length; i++){
        listItem += `
            <li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>
        `
    }
    ulEl.innerHTML = listItem;
}
