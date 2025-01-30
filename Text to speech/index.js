function speak(){
    const text = document.getElementById('text').value;
    const speak = new SpeechSynthesisUtterance(text);

    speak.lang = 'en-US';
    speak.rate = 1;
    speak.pitch = 1;
    window.speechSynthesis.speak(speak);
}