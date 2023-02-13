// Calculator

let value1 = prompt("Enter a number")
let operater = prompt("Enter an operater")
let value2 = prompt("Enter second number")
let num1 = parseInt(value1);
let num2 = parseInt(value2);

if (operater === "+") {
    let sum = num1 + num2;
    alert(sum);
}
else if(operater === "-") {
    let sum = num1 - num2
    alert(sum)
}
else if(operater === "*") {
    let sum = num1 * num2
    alert(sum)
}
else if(operater === "/") {
    let sum = num1 / num2
    alert(sum)
}

