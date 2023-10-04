let firstNumber = parseInt(window.prompt("Enter the first integer:"));
let secondNumber = parseInt(window.prompt("Enter the second integer:"));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    window.alert("Please enter valid integers");
} else {
    if (firstNumber > secondNumber) {
        window.alert("The larger number is: " + firstNumber);
    } else if (secondNumber > firstNumber) {
        window.alert("The larger number is: " + secondNumber);
    } else {
        window.alert("Both numbers are equal: " + firstNumber);
    }
}