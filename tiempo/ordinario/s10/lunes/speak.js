function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.2; // Velocidad de lectura
    utterance.lang = 'es-ES'; // Idioma español de España
    // Seleccionar la voz "Microsoft Andrés Online"
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === 'Microsoft Andrés Online' && voice.lang === 'es-ES');
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    } else {
        console.warn('No se encontró la voz "Microsoft Andrés Online".');
    }
    speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que las voces estén cargadas
    speechSynthesis.onvoiceschanged = () => {
        // Este evento se dispara cuando las voces están disponibles
    };
});
