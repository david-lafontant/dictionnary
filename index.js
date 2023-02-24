document.getElementById("msg1").innerHTML = "Default";

async function getWord(e) {
  document.getElementById("msg1").innerHTML = "Trigger";
  const texte = document.getElementById("inputBox");
  var key = e.keyCode || e.which;
  if (key == 13) {
    // document.getElementById("msg1").innerHTML = texte.value;
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${texte.value}`
    );
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    display(result);
  }
}
