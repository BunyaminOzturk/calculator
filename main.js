let screen = document.querySelector(".screen");
var scrArr = "0";
var displayNum = 0;

// 0123456789. buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if(scrArr.length <= 20){
            if(scrArr.length == 1 && scrArr[0] === "0") {
            if(button.id === "dot"){
                scrArr = "0.";
                displayNum = 0.0;
                screen.textContent = scrArr;
            } else {
            scrArr = button.id;
            displayNum = scrArr;
            screen.textContent = displayNum;
            }
        } else if(!scrArr.includes(".") && button.id === "dot"){
            scrArr += ".";
            screen.textContent = scrArr;
        } else if(button.id !== "dot"){
            scrArr += button.id;
            displayNum = scrArr;
            screen.textContent = displayNum;
        }
        }
    });
});
// ± button
const plusMinusButton = document.querySelector("#plus-minus");
plusMinusButton.addEventListener('click', function(displayNum){
    displayNum = Number(scrArr);
     displayNum = (-1) * scrArr;
        scrArr = displayNum.toString();
        screen.textContent = scrArr;
        return displayNum;
});
// % button
const percentButton = document.querySelector("#percent");
percentButton.addEventListener('click', function(){
    displayNum = Number(scrArr);
    displayNum = (0.01 * displayNum);
    displayNum = Number(displayNum.toFixed(5));
    scrArr = displayNum.toString();
    screen.textContent = scrArr;
});
// AC button
const clearButton = document.querySelector("#ac");
clearButton.addEventListener('click', function(){
    displayNum = 0;
    scrArr = "0";
    screen.textContent = scrArr;
});
// / button
const divideButton = document.querySelector("#divide");
divideButton.addEventListener('click', function(){
    displayNum = Number(scrArr);
    if(!checkDivide(scrArr) && !checkMultiply(scrArr) && !checkMinus(scrArr) && displayNum !== 0 && !checkPlus(scrArr)){
        scrArr += "/";
        displayNum = scrArr;
        screen.textContent = scrArr;
    } else if(displayNum === 0){    // check first num is 0
        scrArr = "0";
        screen.textContent = scrArr;
    }
});
// * button
const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener('click', function(){
    displayNum = Number(scrArr);
    if(!checkMultiply(scrArr) && !checkDivide(scrArr) && !checkMinus(scrArr) && displayNum !== 0 && !checkPlus(scrArr)){
        scrArr += "*";
    } else if(displayNum === 0){    // check first num is 0
        scrArr = "0";
    }
    displayNum = scrArr;
    screen.textContent = scrArr;
});
// - button
const subtractButton = document.querySelector("#minus");
subtractButton.addEventListener('click', function(){
    displayNum = Number(scrArr);
    if(!checkMultiply(scrArr) && !checkDivide(scrArr) && !checkMinus(scrArr) && displayNum !== 0 && !checkPlus(scrArr)){
        scrArr += "-";
    } else if(displayNum === 0){
        scrArr = "-";
    }
    displayNum = scrArr;
    screen.textContent = scrArr;
});
// + button
const plusButton = document.querySelector("#plus");
plusButton.addEventListener('click', function(){
    displayNum = Number(scrArr)
    if(!checkPlus(scrArr) && displayNum !== 0 && !checkDivide(scrArr) && !checkMultiply(scrArr) && !checkMinus(scrArr)){
        scrArr += "+";
        screen.textContent = scrArr;
    } if(displayNum === 0){
        scrArr = "0";
        screen.textContent = scrArr;
    } if(scrArr.length === 1 && scrArr === "-"){
        scrArr = "+";
        screen.textContent = scrArr;
    }
    
});
// = button
const equalButton = document.querySelector("#equal");
equalButton.addEventListener('click', function(){
    checkNumbers(scrArr);
})

function checkNumbers(){
    if(checkMinus(scrArr)){
        let minusIndex = scrArr.slice(1).indexOf("-") + 1;
        let num1 = Number(scrArr.slice(0, minusIndex));
        let num2 = Number(scrArr.slice(minusIndex));
        displayNum = add(num1, num2);
    } else if(checkPlus(scrArr)){
        let plusIndex = scrArr.indexOf("+");
        let num1 = Number(scrArr.slice(0, plusIndex));
        let num2 = Number(scrArr.slice(plusIndex));
        displayNum = add(num1, num2);
    } else if(checkDivide(scrArr)){
        let divideIndex = scrArr.indexOf("/");
        let num1 = Number(scrArr.slice(0, divideIndex));
        let num2 = Number(scrArr.slice(divideIndex + 1));
        if(divide(num1, num2).toString().includes(".")){
            displayNum = (divide(num1, num2)).toFixed(5);
        } else {
            displayNum = divide(num1, num2);
        }
    } else if(checkMultiply(scrArr)){
        let multiplyIndex = scrArr.indexOf("*");
        let num1 = Number(scrArr.slice(0, multiplyIndex));
        let num2 = Number(scrArr.slice(multiplyIndex + 1));
        displayNum = multiply(num1, num2);
    }
    scrArr = displayNum;
    screen.textContent = scrArr;
}

// Check - arithmetic operator
function checkMinus(scrArr){
    scrArr = scrArr.slice(1);
    if(scrArr.slice(1).includes("-")){
        return true;
    } else {
        return false;
    }
}
// Check + arithmetic operator
function checkPlus(scrArr){
    if(scrArr.includes("+")){
        return true;
    } else {
        return false;
    }
}
// Check * arithmetic operator
function checkMultiply(scrArr){
    if(scrArr.includes("*")){
        return true;
    } else {
        return false;
    }
}
// Check / arithmetic operator
function checkDivide(scrArr){
    if(scrArr.includes("/")){
        return true;
    } else {
        return false;
    }
}

const add = function(num1, num2){
    return num1 + num2;
}
const subtract = function(num1, num2){
    return num1 - num2;
}
const multiply = function(num1, num2){
    return num1 * num2;
}
const divide = function(num1, num2){
    return num1 / num2;
}

const operate = function(operator, num1, num2){
    switch(operator){
        case "+" : return add(num1, num2);
        case "-" : return subtract(num1, num2);
        case "*" : return multiply(num1, num2);
        case "/" : return divide(num1, num2);
    }
}


