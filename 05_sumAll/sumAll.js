const sumAll = function(firstNum, secondNum) {
    let smallerNum = 0;
    let largerNum = 0;
    let value = 0;

    if(firstNum<secondNum){
        smallerNum = firstNum;
        largerNum = secondNum;
    }
    else{
        smallerNum = secondNum;
        largerNum = firstNum;
    }
    for(let i=smallerNum; i<=largerNum; i++ && (smallerNum>=0) && (largerNum>=0) ){
        value += i;
    }
    if (smallerNum<=0 || largerNum<=0 || typeof smallerNum !== 'number' || typeof largerNum !== 'number') {
        return "ERROR";
    }
    else{
    return value;
    }
};

// Do not edit below this line
module.exports = sumAll;
