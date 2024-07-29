const words = {
    hindi: [
        { english: "Hello", translated: "namaste" },
        { english: "morning", translated: "subah"},
        { english: "how are you", translated:"aap kaise hain"},
        { english: "Thank you", translated: "dhanyavaads" },
        { english: "Please", translated: "krpaya" }
    ],
    telugu: [
        { english: "Hello", translated: "Halō" },
        { english: "morning", translated: "Udayaṁ"},
        { english: "how are you", translated:"Mīru elā unnāru"},
        { english: "Thank you", translated: "Dhan'yavādālu" },
        { english: "Please", translated: "Dayacēsi" }
    ],
    spanish: [
        { english: "Hello", translated: "Hola" },
        { english: "morning", translated: "mañana"},
        { english: "how are you", translated:"Cómo estás"},
        { english: "Thank you", translated: "Gracias" },
        { english: "Please", translated: "Por favor" }
    ],
    french: [
        { english: "Hello", translated: "Bonjour" },
        { english: "morning", translated: "matin"},
        { english: "how are you", translated:"comment vas-tu ?"},
        { english: "Thank you", translated: "Merci" },
        { english: "Please", translated: "S'il vous plaît" }
    ],
    german: [
        { english: "Hello", translated: "Hallo" },
        { english: "morning", translated: "Morgen"},
        { english: "how are you", translated:"Wie geht es dir"},
        { english: "Thank you", translated: "Danke" },
        { english: "Please", translated: "Bitte" }
    ]
};

function showWords() {
    const language = document.getElementById('language').value;
    const wordList = document.getElementById('word-list');
    wordList.innerHTML = '';

    if (language === 'select') {
        return;
    }

    words[language].forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.innerHTML = `<strong>${word.english}:</strong> ${word.translated}`;
        wordList.appendChild(wordElement);
    });
}
