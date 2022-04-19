const btn = document.getElementById("btn");
const RGB = document.getElementById("color");
const code = "0123456789ABCDEF";

btn.addEventListener("click", function() {
    let color = "#";
    let id;
    for(let i = 0; i < 6; i++){
        id = Math.floor( Math.random() * 16 );
        color += code.substring(id, id+1);
    }
    document.body.style.backgroundColor = color;
    RGB.textContent = color;
})
