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
  // console.log(result[0].phonetics.length);
  // console.log(result[0].phonetics[result[0].phonetics.length-1]["audio"]);

  //   signification += `<h1>${word}</h1>`;
  //   signification += `<p>${phonetic}</p>`;
  //   signification += ` <audio controls >
  //    <source src="${mp3}" type="audio/mpeg">
  //   Your browser does not support the audio element.
  // </audio>`;

  //   signification += `<div class="d-flex flex-row justify-content-between align-items-center">
  //   <div>
  //     <h1>${word}</h1>
  //     <p class="purple">${phonetic}</p>
  //   </div>
  //   <div>
  //     <audio controls >
  //       <source src="${mp3}" type="audio/mpeg">
  //       Your browser does not support the audio element.
  //     </audio>
  //   </div>
  // </div>
  // `;

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

async function getWord(e) {
  const texte = document.getElementById('inputBox');
  const key = e.keyCode || e.which;
  if (key === 13) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`,
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.message}`;
      document.getElementById('definition').innerHTML = message;
      throw new Error(message);
    }
    const result = await response.json();
    display(result);
    texte.value = '';
  }
}
