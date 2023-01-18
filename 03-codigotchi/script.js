// Query the page for elements
const micBtn = document.getElementById('microphone')
const panelsData = document.getElementById('panels-data')
const transcript = document.getElementById('transcript')
const screen = document.getElementById('screen')

const commands = ['eat', 'sleep', 'dance']

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

    // Look at my list of commands
    // Try to find one that matches the word spoken
    const action = commands.find(function (command) {
        return text.toLowerCase().includes(command)
    })

    // If it matches an available command, add a relevant CSS class

    if (action) {
        // You spoke a valid command
        screen.classList.add(`codigotchi-screen_${action}`)
    } else {
        // You said something off-script!
        transcript.textContent += ' - not a valid command!'
    }

    // Show the animated GIF for 2 seconds, then remove the css class added
    setTimeout(function () {
        screen.classList.remove(`codigotchi-screen_${action}`)
        transcript.innerText = ''
    }, 3000)
}

// If anything goes wrong (it shouldn't), let us know in the console
function onError(event) {
    console.error(event.error)
}

micBtn.addEventListener('click', onStartListening)
recognition.addEventListener('result', onResult)
recognition.addEventListener('error', onError)