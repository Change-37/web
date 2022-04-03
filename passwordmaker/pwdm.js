const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const BETA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ,'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const uni = ['!', '@', '#', '$', '%', '^', '&'];

const rec1 = document.getElementById('rec1');
const rec2 = document.getElementById('rec2');
const rec3 = document.getElementById('rec3');
const rec4= document.getElementById('rec4');
const recs = [rec1, rec2, rec3, rec4];

function copy1(){
    rec1.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy2(){
    rec2.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy3(){
    rec3.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy4(){
    rec4.select();
    document.execCommand('copy');
    console.log('copied');
}
function recommand(){
    for(let i = 0; i < 4; i++){
        recs[i].textContent = "";
        let pwd = [];
        let n = Math.floor( Math.random() * 9 ) + 8;
        for(let j = 0; j < n; j++){
            let m = Math.floor( Math.random() * 4 )
            switch (m){
                case 0:
                    recs[i].textContent += Math.floor( Math.random() * 10 );
                    break;
                case 1:
                    let a = Math.floor( Math.random() * alpha.length );
                    recs[i].textContent += alpha[a];
                    break;
                case 2:
                    let b = Math.floor( Math.random() * BETA.length );
                    recs[i].textContent += BETA[b];
                    break;
                case 3:
                    let u = Math.floor( Math.random() * uni.length );
                    recs[i].textContent += uni[u];
                    break;
            }
        }

    }
    console.log("recommanded!");
}