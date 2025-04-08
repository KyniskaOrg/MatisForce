function changeLanguage() {
    let heading = document.getElementById('heading');
    let paragraph = document.getElementById('paragraph');
    
    if (document.documentElement.lang === 'en') {
        // Switch to Spanish
        document.documentElement.lang = 'es';
        heading.innerText = '¡Hola, Mundo!';
        paragraph.innerText = 'Este documento está en español.';
    } else {
        // Switch back to English
        document.documentElement.lang = 'en';
        heading.innerText = 'Hello, World!';
        paragraph.innerText = 'This document is in English.';
    }
}