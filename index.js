document.getElementById("definition").innerHTML;

function display(result) {
  let signification = "";
  const word = result[0]["word"];
  const phonetic = result[0]["phonetic"];
  const source = result[0]["sourceUrls"];
  const mp3 = result[0]["phonetics"][0]["audio"];
  const meanings = result[0]["meanings"];
  const partOfSpeech = [];
  const wordsMeanings = [];
  const synonyms = [];

  for (let item of meanings) {
    partOfSpeech.push(item["partOfSpeech"]);
    wordsMeanings.push(item["definitions"]);
    synonyms.push(item["synonyms"]);
  }

  signification += `<h1>${word}</h1>`;
  signification += `<p>${phonetic}</p>`;
  signification += ` <audio controls >
   <source src="${mp3}" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`;

  for (let item = 0; item < partOfSpeech.length; item++) {
    signification += ` <h2><i>${partOfSpeech[item]}</i></h2>`;
    for (let element of wordsMeanings[item]) {
      signification += `<p>${element["definition"]}</p>`;
    }
    if (item < synonyms.length && synonyms[item].length !== 0) {
      signification += `<p>Synonym: ${synonyms[item]}</p>`;
    }
  }
  signification += `<p>${source}</p>`;
  document.getElementById("definition").innerHTML = signification;

  return;
}

async function getWord(e) {
  const texte = document.getElementById("inputBox");
  var key = e.keyCode || e.which;
  if (key == 13) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.message}`;
      document.getElementById("definition").innerHTML = message;
      throw new Error(message);
    }
    const result = await response.json();
    display(result);
    texte.value = "";
  }
}
