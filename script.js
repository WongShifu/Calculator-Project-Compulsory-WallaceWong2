//add function
function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

//substract function
function substract() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

//multiply function
function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

//divide function
function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

//simple interest function
function calculateSimpleInterest() {
  const principal = parseFloat(prompt("Enter the principal amount:"));
  const rate = parseFloat(prompt("Enter the annual interest rate (%):"));
  const time = parseFloat(prompt("Enter the time period (in years):"));
  
  // Convert rate to decimal
  const decimalRate = rate / 100;
  
  // Calculate simple interest
  const interest = principal * decimalRate * time;
  
  // Calculate total amount
  const totalAmount = principal + interest;
  
  // Display the result
  alert(`Principal amount: ${principal}\nAnnual interest rate: ${rate}%\nTime period: ${time} years\nSimple interest: ${interest}\nTotal amount: ${totalAmount}`);
}



//compound interest function
function calculateCompoundInterest() {
  const principal = parseFloat(prompt("Enter the principal amount:"));
  const rate = parseFloat(prompt("Enter the annual interest rate (%):"));
  const time = parseFloat(prompt("Enter the time period (in years):"));
  const compoundingFrequency = parseFloat(prompt("Enter the compounding frequency (per year):"));
  
  // Convert rate to decimal and calculate the periodic interest rate
  const decimalRate = rate / 100;
  const periodicRate = decimalRate / compoundingFrequency;
  
  // Calculate the number of compounding periods
  const n = compoundingFrequency * time;
  
  // Calculate compound interest
  const interest = principal * (Math.pow(1 + periodicRate, n) - 1);
  
  // Calculate total amount
  const totalAmount = principal + interest;
  
  // Display the result
  alert(`Principal amount: ${principal}\nAnnual interest rate: ${rate}%\nTime period: ${time} years\nCompounding frequency: ${compoundingFrequency} per year\nCompound interest: ${interest}\nTotal amount: ${totalAmount.toFixed(2)}`);
}

