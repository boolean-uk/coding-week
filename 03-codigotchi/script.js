// REMEMBER: use Chrome browser. Speech Recognition API is non-standard.
// Provide default value
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Query the page for elements
const micBtn = document.getElementById('microphone');
const screen = document.getElementById('screen');
const panelsData = document.getElementById('panels-data');
const transcript = document.getElementById('transcript');

const commands = ['eat', 'dance', 'sleep'];

// Initialisation
const recognition = new SpeechRecognition();

function onStartListening() {
    recognition.start();
    panelsData.classList.add('listening');
}

function onResult(e) {
    panelsData.classList.remove('listening');

    // retrieve the transcribed speech
    const text = e.results[0][0].transcript;
    // update the page with the transcript
    transcript.textContent = `You said: '${text}'`;

    // find if the command is available
    const action = commands.find(function(cmd) {
        return text.toLowerCase().includes(cmd);
    });

    let actionClassname
    // if the action was found, apply the CSS rule by class
    if (action) {
      actionClassname = 'codigotchi-screen_' + action;

      screen.classList.add(actionClassname);
    } else {
      // show user message saying it's not valid
      transcript.textContent += ' - not a valid command!';
    }

    // Show GIFs for 2seconds
    // then reset the message area
    setTimeout(function() {
        screen.classList.remove(actionClassname);
        transcript.innerText = '';
    }, 2000);
}

function onError(e) {
    console.error(e.error);
}

micBtn.addEventListener('click', onStartListening);
recognition.addEventListener('result', onResult);
recognition.addEventListener('error', onError);
