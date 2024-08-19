document.getElementById('speak-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (text.trim() === "") {
        alert("Please enter some text to convert to speech.");
        return;
    }
    if (text.split(' ').length > 500) {
        alert("Text exceeds 500 words. Please enter a shorter text.");
        return;
    }
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'hi-IN'; 

  
    const voices = window.speechSynthesis.getVoices();
    
   
    const maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));
    if (maleVoice) {
        speech.voice = maleVoice;
    } else {
        alert("No male voice found. Using default voice.");
    }

    window.speechSynthesis.speak(speech);

    window.speechSynthesis.onend = function() {
        document.getElementById('download-btn').disabled = false; 
    };
});

document.getElementById('download-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (text.trim() === "") {
        alert("No speech to download. Please convert text to speech first.");
        return;
    }
    if (text.split(' ').length > 500) { 
        alert("Text exceeds 500 words. Cannot download.");
        return;
    }

    
    alert("Downloading speech is not supported in this implementation.");
});


window.speechSynthesis.onvoiceschanged = function() {
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(voice => voice.name.toLowerCase().includes('male'));
    if (maleVoice) {
        console.log("Male voice available:", maleVoice.name);
    } else {
        console.log("No male voice found.");
    }
};
