const button = document.querySelector("button");

const body = document.body;

const themeButtonText = ["Trocar Para: Ligth Mode", "Trocar Para: Dark Mode"];


let darkMode;

button.addEventListener('click', () => {
    function themeChange () {
        darkMode = !darkMode
        body.classList.toggle("dark-mode")
        localStorage.setItem("dark-mode", darkMode)
        themeChangeButtonText(button)   
    }
    return themeChange()
})

function themeChangeButtonText (ButtonElement) {
    darkMode
    ? (ButtonElement.innerText = themeButtonText [0])
    : (ButtonElement.innerText = themeButtonText [1])
}

function themePreferenceAnalysis () {
    darkMode = JSON.parse(localStorage.getItem("dark-mode"))

    if(darkMode) {
        themeChangeButtonText(button);
        body.classList.add('dark-mode')
    } else {
        themeChangeButtonText(button)
    }
}

themePreferenceAnalysis();