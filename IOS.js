function openApp(appId) {
  document.getElementById(appId).style.display = 'block';
}

function closeApp(appId) {
  document.getElementById(appId).style.display = 'none';
}

// Theme toggle function
function toggleTheme() {
  const theme = document.getElementById('theme-toggle').value;
  const desktop = document.getElementById('desktop');
  if (theme === 'dark') {
    desktop.classList.add('dark-mode');
  } else {
    desktop.classList.remove('dark-mode');
  }
}

// Change desktop wallpaper
function changeWallpaper(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const desktop = document.getElementById('desktop');
      desktop.style.backgroundImage = `url(${e.target.result})`;
      desktop.style.backgroundSize = 'cover';
      desktop.style.backgroundPosition = 'center center';
    };
    reader.readAsDataURL(file);
  }
}

