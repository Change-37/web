let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const btn = document.getElementById("jane-btn");

btn.addEventListener("click", function(){
    console.log(data[0].score);
});