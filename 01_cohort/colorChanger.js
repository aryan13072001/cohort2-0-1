//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";  //hex values se color banta hai
    let color = "#";
    for(let i=0;i<6;i++){  //as color codes in css are of length 6 like #FFFFFF is white
        color += hex[Math.floor(Math.random() * 16)];  //Math.random() generates a random number between 0 and 1 
    }
    return color;
}
// console.log(randomColor());

let referenceId;
const startChangingColor = function (){
    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!referenceId) referenceId = setInterval(changeBg,1000);
}

const stoptChangingColor = function(){
    clearInterval(referenceId);
    referenceId = null; //clearing out unused variable and also helps us to ensure only one session ie clikcing again and again has no impact on changing color speed as only one operation on click event goes on as referenceId isnt null yet.
}

document.getElementById("btn1").addEventListener("click",startChangingColor);
document.getElementById("btn2").addEventListener("click",stoptChangingColor);
