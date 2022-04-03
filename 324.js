let fstcard = 0;
let sndcard = 0;
let _isalive = true;
let _notblack = true;
let cards = []
let msg = "";
let msgEl = document.getElementById("messege-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.querySelector("#sum-el");

let player = {
    playerName: "박창은",
    playerChips: 120
}
let playerEl = document.getElementById("person-el");
playerEl.textContent = player.playerName + ": " + player.playerChips + "개";
let sum = 0;

function start(){
    _notblack = true;
    _isalive = true;
    fstcard = getRandCard();
    sndcard = getRandCard();
    cards = [fstcard, sndcard]
    renderGame();
}
function getRandCard(){
    let Randcard = Math.floor( Math.random() * 13 ) + 1;
    if(Randcard === 1) return 11;
    else if(Randcard > 10) return 10;
    return Randcard;
}
function renderGame(){
    sum = 0;
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' ';
        sum += cards[i];
    }
    sumEl.textContent = "Sum: " + sum;

    if(sum < 21){
        msg = "HIT";

    }
    else if(sum == 21){
        msg = "BLACKJACK";
        _notblack = false;
    }
    else if(sum > 21){
       msg = "BURST"
       _isalive = false;
    }
    msgEl.textContent = msg;
}
function newcard(){
    if(_isalive && _notblack){
        let card = getRandCard();
        cards.push(card);
        renderGame();
    }
}

