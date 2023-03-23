function handleErrors(spinner, response) {
  spinner.setAttribute('hidden', '');
  const message = `An error has occured: ${response.message}`;
  document.getElementById('definition').innerHTML = message;
  throw new Error(message);
}

export default handleErrors;
