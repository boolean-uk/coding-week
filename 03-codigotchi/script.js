// Query the page for elements
const micBtn = document.getElementById('microphone')
const panelsData = document.getElementById('panels-data')
const transcript = document.getElementById('transcript')

// Set a default SpeechRecognition browser library to use
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

// Build the speech recognition library
const recognition = new SpeechRecognition()

// When button clicked, show the available commands
function onStartListening() {
    // Start listening to the microphone
    recognition.start()

    // Show the available commands
    panelsData.classList.add('listening')
}

// When finished speaking, run this function
function onResult(event) {
    // Hide the available commands
    panelsData.classList.remove('listening')

    // Get the words we spoke
    const text = event.results[0][0].transcript

    // Add what we spoke to the transcript HTML element for visibility
    transcript.textContent = `You said: ${text}`
}

// If anything goes wrong (it shouldn't), let us know in the console
function onError(event) {
    console.error(event.error)
}

micBtn.addEventListener('click', onStartListening)
recognition.addEventListener('result', onResult)
recognition.addEventListener('error', onError)