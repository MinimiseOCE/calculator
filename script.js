let activeNum = 0;
let inActiveNum = 0;
let operator = 0;
let currentOperator = 0;

let justOperated = false;
let hasDecimal = false;
let canOperate = true;

const activeNumText = document.getElementById("active");
const inActiveNumText = document.getElementById("inActive");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const equalButtons = document.querySelectorAll(".equalButton")
const decimalButtons = document.querySelectorAll(".decimalButton")


function addInput(num) {
    if (activeNum == 0) {
        activeNum = num;
        hasDecimal = false
    } else if (justOperated == true) {
        inActiveNumText.textContent = (activeNum)
        activeNum = num;
        hasDecimal = false
    } else {
        activeNum = (activeNum + num);
    }
    canOperate = true;
    justOperated = false;
    activeNumText.textContent = (activeNum);
}

function operate(operation) {
    if (canOperate === true) {
        inActiveNum = parseFloat(activeNum);
        inActiveNumText.textContent = (inActiveNum + ' ' + operation);
        activeNum = '0';
        activeNumText.textContent = '0';
        if (operation == '+') {
            currentOperator = 1
            canOperate = false
        } else if (operation == '-') {
            currentOperator = 2
            canOperate = false
        } else if (operation == '×') {
            currentOperator = 3
            canOperate = false
        } else {
            currentOperator = 4
            canOperate = false
        }
    }  
}

function solve() {
    if (currentOperator == 0) {
        console.log('bruh')
    } else if (currentOperator == 1) {
        inActiveNumText.textContent = (inActiveNum + ' + ' + activeNum + ' =')
        activeNum = (parseFloat(inActiveNum) + parseFloat(activeNum))
        activeNumText.textContent = activeNum
        justOperated = true
    } else if (currentOperator == 2) {
        inActiveNumText.textContent = (inActiveNum + ' - ' + activeNum + ' =')
        activeNum = (parseFloat(inActiveNum) - parseFloat(activeNum))
        activeNumText.textContent = activeNum
        justOperated = true
    } else if (currentOperator == 3) {
        inActiveNumText.textContent = (parseFloat(inActiveNum) + ' × ' + parseFloat(activeNum) + ' =')
        activeNum = (inActiveNum * activeNum)
        activeNumText.textContent = activeNum
        justOperated = true
    } else if (currentOperator == 4) {
        inActiveNumText.textContent = (parseFloat(inActiveNum) + ' ÷ ' + parseFloat(activeNum)+ ' =')
        activeNum = (inActiveNum / activeNum)
        activeNumText.textContent = activeNum
        justOperated = true
    }
}

numButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    addInput(event.target.innerText);
  });
});

opButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    operate(event.target.innerText);
  });
});

decimalButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    if (hasDecimal === false) {
        addInput(event.target.innerText)
    };
    hasDecimal = true
  });
});

equalButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    solve();
  });
});