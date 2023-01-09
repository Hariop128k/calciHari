const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
let currentNumber = '0';
let previousNumber = null;
let operator = null;

for (const button of buttons) {
  button.addEventListener('click', function(event) {
    const value = event.target.dataset.value;

    if (value === 'clear') {
      currentNumber = '0';
      previousNumber = null;
      operator = null;
    } else if (value === '.') {
      if (currentNumber.includes('.')) return;
      currentNumber += value;
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '0';
    } else if (value === '=') {
      const result = eval(previousNumber + operator + currentNumber);
      currentNumber = result.toString();
      operator = null;
      previousNumber = null;
    } else {
      if (currentNumber === '0') {
        currentNumber = value;
      } else {
        currentNumber += value;
      }
    }

    display.textContent = currentNumber;
  });
}
