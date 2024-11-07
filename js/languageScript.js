const languageBox = document.getElementById('languageBox');

languageBox.addEventListener('change', (event) => {
    window.location.href = event.target.value;
});
