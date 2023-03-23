function display(result) {
  let signification = "";
  const { word } = result[0];
  const { phonetic } = result[0];
  const source = result[0].sourceUrls;
  const mp3 = result[0].phonetics[result[0].phonetics.length - 1].audio;
  const { meanings } = result[0];
  const partOfSpeech = [];
  const wordsMeanings = [];
  const synonyms = [];
  for (const item of meanings) {
    partOfSpeech.push(item.partOfSpeech);
    wordsMeanings.push(item.definitions);
    synonyms.push(item.synonyms);
  }

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

  for (let item = 0; item < partOfSpeech.length; item += 1) {
    signification += `<h2 class='line'><span><i>${partOfSpeech[item]}</i></span></h2>`;
    signification += '<p class="gray"><i>Meaning</i></p><ul class="results">';
    for (const element of wordsMeanings[item]) {
      signification += `<li>
      <p>
      ${element.definition}
      </p>
      <p>${element.example ? element.example : ""}</p>
      </li>`;
    }
    signification += "</ul>";
    if (item < synonyms.length && synonyms[item].length !== 0) {
      signification += `<p><span class="gray">Synonym<span>&emsp; <span class="purple">${synonyms[item]}</span></p>`;
    }
  }
  signification += `<p><span class="gray">Source</span>&emsp;<span class="uderline">${source}</span></p>`;

  document.getElementById("definition").innerHTML = signification;
}

export default display;
