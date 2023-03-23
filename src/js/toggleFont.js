function toggleFont(e) {
  if (e.target.value === 'serif') {
    document.body.style.fontFamily = 'serif';
  }
  if (e.target.value === 'sans-serif') {
    document.body.style.fontFamily = 'sans-serif';
  }
  if (e.target.value === 'monospace') {
    document.body.style.fontFamily = 'monospace';
  }
}

export default toggleFont;
