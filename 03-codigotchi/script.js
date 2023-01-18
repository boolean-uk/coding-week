// Query the page for elements
const micBtn = document.getElementById('microphone')
const panelsData = document.getElementById('panels-data');

// When button clicked, show the available commands
function onStartListening() {
    panelsData.classList.add('listening')
}

micBtn.addEventListener('click', onStartListening)