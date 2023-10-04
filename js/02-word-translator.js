let languageCode = window.prompt("Enter a language code (es, de, en, fr):");

if (languageCode === "es") {
    console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (languageCode === "de") {
    console.log("Hello World translated in German is: Hallo Welt");
} else if (languageCode === "fr") {
    console.log("Hello World translated in French is: Bonjour le monde");
} else {
    // Default to English if the entered code isn't one of the expected values
    console.log("Hello World translated in English is: Hello World");
}
