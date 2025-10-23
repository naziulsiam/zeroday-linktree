// Hide loader and show content
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loader').style.opacity = '0';
    document.getElementById('loader').style.visibility = 'hidden';
    document.getElementById('main-content').classList.remove('hidden');
  }, 1800);
});

// Easter egg: Open terminal with backtick
document.addEventListener('keydown', (e) => {
  if (e.key === '/') {
    alert('lsbu-zeroday@linktree:~$ echo "Stay curious. Stay secure."');
  }
});
