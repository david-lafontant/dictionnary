import getWord from './src/js/getWord.js';
import toggleFont from './src/js/toggleFont.js';
import toggleTheme from './src/js/toggleTheme.js';

// getWord is a function that fetch the meaning of a word from DIctionary Api
const inputBox = document.getElementById('inputBox');
inputBox.addEventListener('keypress', (e) => {
  const key = e.keyCode || e.which;
  if (key === 13) {
    getWord(e);
  }
});

// Change document font family according to select element value
const choice = document.getElementById('fontChoice');
choice.addEventListener(
  'change',
  (e) => {
    e.preventDefault();
    toggleFont(e);
  },
  false,
);

// Change document theme : dark light
document.getElementById('mode').addEventListener('change', (e) => {
  toggleTheme(e);
});
