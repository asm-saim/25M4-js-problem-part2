//The highest scorer will get the prize. Find out who will get the price between 2 person. 

const Aysha=56;
const Wasi=45;
if(Aysha>Wasi){
    console.log('Aysha will get the prize');
}
else{
    console.log('Wasi will ge the prize');
}

//Using function:
function highestScore(input1, input2){
    if(input1>input2)
    {
        return input1;
    }
    else{
        return input2;
    }
}
const getValue1= highestScore(67, 89);
const getValue2= highestScore(87, 59);
console.log('Max of two is: ',getValue1);
console.log('Max of two is: ',getValue2);