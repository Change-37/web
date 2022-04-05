const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const BETA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ,'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const uni = ['!', '@', '#', '$', '%', '^', '&'];

const rec1 = document.getElementById('rec1');
const rec2 = document.getElementById('rec2');
const rec3 = document.getElementById('rec3');
const rec4= document.getElementById('rec4');
const recs = [rec1, rec2, rec3, rec4];

function copy1()
{
    rec1.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy2()
{
    rec2.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy3()
{
    rec3.select();
    document.execCommand('copy');
    console.log('copied');
}
function copy4()
{
    rec4.select();
    document.execCommand('copy');
    console.log('copied');
}
function recommand()
{
    for(let i = 0; i < 4; i++)
    {
        let Up = [];
        let Dn = [];
        let Un = [];
        let Nu = [];
        recs[i].textContent = "";
        let pwd = [];
        let n = Math.floor( Math.random() * 5 ) + 8;
        for(let j = 0; j < n; j++)
        {
            let m = Math.floor( Math.random() *10 )
            switch (m%4)
            {
                case 0:
                    pwd[j] = Math.floor( Math.random() * 10 );
                    Nu.push(j);
                    break;
                case 1:
                    let a = Math.floor( Math.random() * alpha.length );
                    pwd[j] = alpha[a];
                    Dn.push(j);
                    break;
                case 2:
                    let b = Math.floor( Math.random() * BETA.length );
                    pwd[j] = BETA[b];
                    Up.push(j);
                    break;
                case 3:
                    let u = Math.floor( Math.random() * uni.length );
                    pwd[j] = uni[u];
                    Un.push(j);
                    break;
            }
        }
        if(Nu.length == 0)
        {
            if(Un.length >= 2)
            {
                let id = Un[Un.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Nu.push(id);
                Nu.sort(function(a, b) { return a - b; });
                Un.pop();
            }
            else if(Up.length >= 2)
            {
                let id = Up[Up.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Nu.push(id);
                Nu.sort(function(a, b) { return a - b; });
                Up.pop();
            }
            else if(Dn.length >= 2)
            {
                let id = Dn[Dn.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Nu.push(id);
                Nu.sort(function(a, b) { return a - b; });
                Dn.pop();
            }
        }
        if(Dn.length == 0)
        {
            if(Un.length >= 2)
            {
                let id = Un[Un.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Dn.push(id);
                Dn.sort(function(a, b) { return a - b; });
                Un.pop();
            }
            else if(Up.length >= 2)
            {
                let id = Up[Up.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Dn.push(id);
                Dn.sort(function(a, b) { return a - b; });
                Up.pop();
            }
            else if(Nu.length >= 2)
            {
                let id = Nu[Nu.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Dn.push(id);
                Dn.sort(function(a, b) { return a - b; });
                Nu.pop();
            }
        }
        if(Up.length == 0)
        {
            if(Un.length >= 2)
            {
                let id = Un[Un.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Up.push(id);
                Up.sort(function(a, b) { return a - b; });
                Un.pop();
            }
            else if(Dn.length >= 2)
            {
                let id = Dn[Dn.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Up.push(id);
                Up.sort(function(a, b) { return a - b; });
                Dn.pop();
            }
            else if(Nu.length >= 2)
            {
                let id = Nu[Nu.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Up.push(id);
                Up.sort(function(a, b) { return a - b; });
                Nu.pop();
            }
        }
        if(Un.length == 0)
        {
            if(Up.length >= 2)
            {
                let id = Up[Up.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Un.push(id);
                Un.sort(function(a, b) { return a - b; });
                Up.pop();
            }
            else if(Dn.length >= 2)
            {
                let id = Dn[Dn.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Un.push(id);
                Un.sort(function(a, b) { return a - b; });
                Dn.pop();
            }
            else if(Nu.length >= 2)
            {
                let id = Nu[Nu.length];
                pwd[id] = Math.floor( Math.random() * 10 );
                Un.push(id);
                Un.sort(function(a, b) { return a - b; });
                Nu.pop();
            }
        }
        for(let j = 0; j < n; j++)
        {
            recs[i].textContent += pwd[j];
        }
    }
    console.log("recommanded!");
}
