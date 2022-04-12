const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const cont = document.getElementById("container");

for(let i = 0; i < imgs.length; i++){
    cont.innerHTML += `<img class="team-img" src=${imgs[i]}>`
}