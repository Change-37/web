function convert1(){
    var num = document.getElementById("fst-num").value;
    var beunit = document.getElementById("fst-unit").value;

    switch(beunit){
        case 'cm':
            num /= 100;
            break;
        case 'm':
            break;
        case 'km':
            num *= 1000;
            break;
        case 'in':
            num /= 39.37;
            break;
        case 'ft':
            num /= 3.281;
            break;
        default:
    }

    console.log(num + 'm');
    var afunit = document.getElementById("snd-unit").value;
    switch(afunit){
        case 'cm':
            num *= 100;
            break;
        case 'm':
            break;
        case 'km':
            num /= 1000;
            break;
        case 'in':
            num *= 39.37;
            break;
        case 'ft':
            num *= 3.281;
            break;
        default:
    }
    document.getElementById("snd-num").value = num;
}
function convert2(){
    var num = document.getElementById("snd-num").value;
    var beunit = document.getElementById("snd-unit").value;

    switch(beunit){
        case 'cm':
            num /= 100;
            break;
        case 'm':
            break;
        case 'km':
            num *= 1000;
            break;
        case 'in':
            num /= 39.37;
            break;
        case 'ft':
            num /= 3.281;
            break;
        default:
    }

    console.log(num + 'm');
    var afunit = document.getElementById("fst-unit").value;
    switch(afunit){
        case 'cm':
            num *= 100;
            break;
        case 'm':
            break;
        case 'km':
            num /= 1000;
            break;
        case 'in':
            num *= 39.37;
            break;
        case 'ft':
            num *= 3.281;
            break;
        default:
    }
    document.getElementById("fst-num").value = num;
}