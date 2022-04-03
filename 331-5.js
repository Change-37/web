const para = document.getElementById("para");
const arr1 = ["사과", "바나나", "딸기"];
const arr2 = ["시금치", "오이"];

function generateSentence(desc, arr) {
    para.innerHTML += `제가 ${desc} ${arr.length}개는 ${arr[0]}`
    for(let i = 1; i < arr.length; i++){
        para.innerHTML += `, ${arr[i]}`;
    }
    para.innerHTML += `입니다. `;
    
}

generateSentence("좋아하는 과일", arr1);
generateSentence("싫어하는 채소", arr2);