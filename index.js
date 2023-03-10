function display(result) {
  let signification = '';
  const { word } = result[0];
  const { phonetic } = result[0];
  const source = result[0].sourceUrls;
  const mp3 = result[0].phonetics[result[0].phonetics.length - 1].audio;
  const { meanings } = result[0];
  const partOfSpeech = [];
  const wordsMeanings = [];
  const synonyms = [];

  signification += `<div class="d-flex flex-row justify-content-between align-items-center">
<div>
  <h1>${word}</h1>
  <p class="purple">${phonetic}</p>
</div>
<div>
<audio id="player" src="${mp3}" ></audio>
<div>
    <button id="playbutton" onclick="document.getElementById('player').play()"></button>
    </div>
</div>
</div>
`;

  for (const item of meanings) {
    partOfSpeech.push(item.partOfSpeech);
    wordsMeanings.push(item.definitions);
    synonyms.push(item.synonyms);
  }

  for (let item = 0; item < partOfSpeech.length; item += 1) {
    signification += `<h2><i>${partOfSpeech[item]}</i></h2>`;
    signification += '<p class="gray"><i>Meaning</i></p><ul class="results">';
    for (const element of wordsMeanings[item]) {
      signification += `<li>
      <p>
      ${element.definition}
      </p>
      <p>${element.example ? element.example : ''}</p>
      </li>`;
    }
    signification += '</ul>';
    if (item < synonyms.length && synonyms[item].length !== 0) {
      signification += `<p><span class="gray">Synonym<span>&emsp; <span class="purple">${synonyms[item]}</span></p>`;
    }
  }
  signification += `<p><span class="gray">Source</span>&emsp;<span class="uderline">${source}</span></p>`;
  document.getElementById('definition').innerHTML = signification;
}

// getWord is a function that fetch the meaning of a word from DIctionary Api
async function getWord(e) {
  const texte = document.getElementById('inputBox');
  const key = e.keyCode || e.which;
  if (key === 13) {
    const spinner = document.getElementById('spinner');
    spinner.removeAttribute('hidden');
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`,
    );
    if (!response.ok) {
      spinner.setAttribute('hidden', '');
      const message = `An error has occured: ${response.message}`;
      document.getElementById('definition').innerHTML = message;
      throw new Error(message);
    }
    const result = await response.json();
    display(result);
    spinner.setAttribute('hidden', '');
    texte.value = '';
  }
}

// Change document font family according to select element value
const choice = document.getElementById('fontChoice');
choice.addEventListener(
  'change',
  (e) => {
    e.preventDefault();
    if (e.target.value === 'serif') {
      document.body.style.fontFamily = 'serif';
    }
    if (e.target.value === 'sans-serif') {
      document.body.style.fontFamily = 'sans-serif';
    }
    if (e.target.value === 'monospace') {
      document.body.style.fontFamily = 'monospace';
    }
  },
  false,
);

// Change document theme : dark light
document.getElementById('mode').addEventListener('change', () => {
  const DARK_THEME_PATH = 'src/bootstrap2/bootstrap-dark.min.css';
  const LIGHT_THEME_PATH = 'src/bootstrap2/bootstrap.min.css';
  const DARK_STYLE_LINK = document.getElementById('theme-style');
  const THEME_TOGGLER = document.getElementById('mode');

  if (THEME_TOGGLER.checked) {
    DARK_STYLE_LINK.setAttribute('href', DARK_THEME_PATH);
  } else {
    DARK_STYLE_LINK.setAttribute('href', LIGHT_THEME_PATH);
  }
});
