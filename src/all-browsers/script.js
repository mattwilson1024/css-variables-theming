import cssVars from 'css-vars-ponyfill';

const themes = {
  light: {
    '--bg-col': '#EFEFEF',
    '--text-col': '#444',
    '--header-col': '#092299',
    '--link-col': '#004AEF'
  },
  dark: {
    '--bg-col': '#494949',
    '--text-col': '#F1F1F1',
    '--header-col': '#FF5500',
    '--link-col': '#00BEEF'
  }
};

function applyTheme(theme = themes.light) {
  cssVars({
    variables: theme
  });
}

applyTheme(themes.light);

document.getElementById('lightThemeButton').addEventListener('click', () => {
  applyTheme(themes.light);
});

document.getElementById('darkThemeButton').addEventListener('click', () => {
  applyTheme(themes.dark);
});