document.getElementById('lightThemeButton').addEventListener('click', () => {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
});

document.getElementById('darkThemeButton').addEventListener('click', () => {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
});