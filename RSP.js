let p = document.getElementById("result");
function button(){
    let RSP = Math.floor( Math.random() * 3 );
    switch(RSP){
        case 0:
            p.textContent = "가위";
            break;
        case 1:
            p.textContent = "바위";
            break;
        case 2:
            p.textContent = "보";
            break;
    }
}
