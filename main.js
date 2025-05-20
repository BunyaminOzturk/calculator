let screen = document.querySelector(".screen");
var scrArr = "0";
var displayNum = 0;

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
            //console.log(displayNum)
        }
        }
    });
});

const plusMinusButton = document.querySelector("#plus-minus");
plusMinusButton.addEventListener('click', function(displayNum){
    displayNum = Number(scrArr);
     displayNum = (-1) * scrArr;
        scrArr = displayNum.toString();
        screen.textContent = scrArr;
        //console.log("dispaly num " + displayNum)
        return displayNum;
});

const percentButton = document.querySelector("#percent");
percentButton.addEventListener('click', function(){
    displayNum = Number(scrArr);
    displayNum = (0.01 * displayNum);
    displayNum = Number(displayNum.toFixed(5));
    scrArr = displayNum.toString();
    screen.textContent = scrArr;
});

// Check - arithmetic operator
function checkMinus(scrArr){
    scrArr = scrArr.slice(1);
    if(scrArr.slice(1).includes("-")){
        console.log("ilk index ten sonra - işaret var")
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

var displayNumbers;

const clearButton = document.querySelector("#ac");
clearButton.addEventListener('click', function(){
    displayNum = 0;
    scrArr = "0";
    screen.textContent = scrArr;
});


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
const plusButton = document.querySelector("#plus");
plusButton.addEventListener('click', function(){
    displayNum = Number(scrArr)
    if(!checkPlus(scrArr) && displayNum !== 0 && !checkDivide(scrArr) && !checkMultiply(scrArr)){
        scrArr += "+";
        screen.textContent = scrArr;
    } else if(displayNum === 0){
        scrArr = "0";
        screen.textContent = scrArr;
    }
    
});

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

num1 = 4;
num2 = 33;
let operator = "+";

const operate = function(operator, num1, num2){
    switch(operator){
        case "+" : return add(num1, num2);
        case "-" : return subtract(num1, num2);
        case "*" : return multiply(num1, num2);
        case "/" : return divide(num1, num2);
    }
}

console.log(operate(operator, num1, num2));

