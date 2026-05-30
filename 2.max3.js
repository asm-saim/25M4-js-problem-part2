//find out max between 3 .

const Tim= 34;
const Richard=85;
const Dineal=67;

//normal process
if(Tim>Richard && Tim>Dineal)
{
    console.log("Tim is the max scorer");
}
else if(Richard>Tim && Richard>Dineal)
{
    console.log("Richard is the max scorer")
}
else{
    console.log("Dineal is the max scorer");
}

//using function
function findMax(num1, num2, num3){
    if(num1>num2 & num1>num3)
    {
        return num1;
    }
    else if(num2>num1 && num2>num3)
    {
        return num2;
    }
    else{
        return num3;
    }

}
const scoreHigh=findMax(34,67,23);
console.log(scoreHigh);

//Shortcut technique:
const maxFinder=Math.max(34,65,13);
console.log(maxFinder);