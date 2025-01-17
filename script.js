const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const body = document.body;

// Append a number to the display
function appendNumber(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Append an operator to the display
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

// Calculate the result
function calculate() {
  try {
    display.value = eval(display.value) || "0";
  } catch {
    display.value = "Error";
  }
}

// Theme switching functionality
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeLabel.textContent = 'Light Theme';
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeLabel.textContent = 'Dark Theme';
  }
});
