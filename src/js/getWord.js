import display from './display.js';
import handleErrors from './handleErrors.js';

async function getWord(e) {
  const texte = document.getElementById('inputBox');
  const spinner = document.getElementById('spinner');
  spinner.removeAttribute('hidden');
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`,
  );
  if (!response.ok) {
    handleErrors(spinner, response);
  }
  const result = await response.json();
  display(result);
  spinner.setAttribute('hidden', '');
  texte.value = '';
}

export default getWord;
