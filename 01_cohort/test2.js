const users = [
    {
        firstName : "aryan",
        age : 22
    },
    {
        firstName : "yash",
        age : 19
    },
    {
        firstName : "ritesh",
        age : 25
    }
];

for(let i=0; i<users.length; i++){
    if(users[i].age >= 22){
        console.log(users[i].firstName); 
    }
}



//callback functions
function sum(a,b,fnToCall){
    let res = a+b;
    fnToCall(res);
}

function displayResult(data){
    console.log(data);
}

function displayResultPassive(data){
    console.log(data);
}

//use only one function to do sum and print ans
sum(2,4,displayResult);




let x = () => {  //arrow func used 
    setTimeout(function(){ //this is callback func passed 
        console.log("hii")
    },3000)
};
// x();

let y = () => {
    setInterval(function(){
        console.log("hellow")
    },1000);  //keeps on printing hellow after every interval of 2000ms or 2sec
}
y();