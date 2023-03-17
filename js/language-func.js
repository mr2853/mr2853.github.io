function setCorrectLanguage(elementId, textOnSerbian, textOnEnglish, textOnGerman){
    
    if(navigator.language.indexOf("en") != -1) {
        document.getElementById(elementId).innerHTML = textOnEnglish;

    } else if(navigator.language.indexOf("de") != -1) {
        document.getElementById(elementId).innerHTML = textOnGerman;
        
    } else {
        document.getElementById(elementId).innerHTML = textOnSerbian;
    }
}