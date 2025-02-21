// Dark Mode speichern
function toggleDarkMode() {
    let darkMode = localStorage.getItem("darkMode") === "enabled";
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
}

// Sprache wechseln
function changeLanguage(lang) {
    alert("Sprache wurde zu " + lang.toUpperCase() + " geändert.");
}