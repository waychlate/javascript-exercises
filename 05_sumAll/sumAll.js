const sumAll = function(numOne, numTwo) {
    if ((numOne < 0 || numTwo < 0) || (typeof numOne != 'number' || typeof numTwo != 'number')) {
        return "ERROR";
    }

    let sum = 0;
    let firstNum = (numOne < numTwo) ? numOne : numTwo;
    let secondNum = (firstNum == numOne) ? numTwo : numOne;

    for (; firstNum <= secondNum; firstNum++) {
        sum += firstNum;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
