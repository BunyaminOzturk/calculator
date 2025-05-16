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
            console.log(displayNum)
        }
        }
    });
});


