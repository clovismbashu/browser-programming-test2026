// ===== Console + Variables =====
console.log('Portfolio page loaded');

// State variables
let isDarkMode = false;
let clickCount = 0;

// DOM elements
const themeBtn = document.getElementById('themeBtn');
const clickBtn = document.getElementById('clickBtn');

// ===== Functions =====
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark');
  console.log('Dark mode state:', isDarkMode);
}

function handleClickCount() {
  clickCount++;
  console.log('Click button pressed', clickCount, 'times');
}

// ===== Events =====
themeBtn.addEventListener('click', toggleTheme);
clickBtn.addEventListener('click', handleClickCount);
