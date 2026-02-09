console.log('Portfolio page loaded');

let isDarkMode = false;
let clickCount = 0;

const themeBtn = document.getElementById('themeBtn');
const clickBtn = document.getElementById('clickBtn');

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark');
  console.log('Dark mode state:', isDarkMode);
}

function handleClickCount() {
  clickCount++;
  console.log('Click button pressed', clickCount, 'times');
}

themeBtn.addEventListener('click', toggleTheme);
clickBtn.addEventListener('click', handleClickCount);
