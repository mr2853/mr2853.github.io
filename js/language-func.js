function setCorrectLanguage(elementId, textOnSerbian, textOnEnglish, textOnGerman){
    const lang = navigator.language;
    if(lang.indexOf("en") != -1) {
        document.getElementById(elementId).innerHTML = textOnEnglish;

    } else if(lang.indexOf("de") != -1) {
        document.getElementById(elementId).innerHTML = textOnGerman;
        
    } else {
        document.getElementById(elementId).innerHTML = textOnSerbian;
    }
}