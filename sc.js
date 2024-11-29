const toggleButton = document.getElementById('themeToggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const icon = toggleButton.querySelector('i');

      // Change icon based on mode
      if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    });
