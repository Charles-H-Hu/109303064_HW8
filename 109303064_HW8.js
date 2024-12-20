document.getElementById('operator').addEventListener('change', function () {
    const operator = document.getElementById('operator').value;
    const button = document.getElementById('calculateButton');

    switch (operator) {
        case '+':
            button.textContent = "Add";
            break;
        case '-':
            button.textContent = "Subtract";
            break;
        case '*':
            button.textContent = "Multiply";
            break;
        case '/':
            button.textContent = "Divide";
            break;
    }
});

document.getElementById('calculateButton').addEventListener('click', function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;

    if (num1.trim() === "" || num2.trim() === "" || isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (operator === '/' && number2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
    }

    document.getElementById('result').textContent = `Result = ${result.toFixed(2)}`;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


