
  const selector = document.getElementById('theme-selector');
  const themeClassPrefix = 'theme-';

  // Load saved theme or fallback
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  selector.value = savedTheme;

  // Change theme when user selects a new one
  selector.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });

  function setTheme(themeName) {
    // Remove all theme- classes
    document.body.classList.forEach(cls => {
      if (cls.startsWith(themeClassPrefix)) {
        document.body.classList.remove(cls);
      }
    });

    document.body.classList.add(themeClassPrefix + themeName);
    localStorage.setItem('theme', themeName);
  }

