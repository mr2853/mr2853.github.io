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

function setCorrectLanguageAddHtml(elementId, textOnSerbian, textOnEnglish, textOnGerman){
    const lang = navigator.language;
    if(lang.indexOf("en") != -1) {
        document.getElementById(elementId).innerHTML += textOnEnglish;

    } else if(lang.indexOf("de") != -1) {
        document.getElementById(elementId).innerHTML += textOnGerman;
        
    } else {
        document.getElementById(elementId).innerHTML += textOnSerbian;
    }
}

function setCorrectLanguageContent(elementId, textOnSerbian, textOnEnglish, textOnGerman){
    const lang = navigator.language;
    if(lang.indexOf("en") != -1) {
        document.getElementById(elementId).content = textOnEnglish;

    } else if(lang.indexOf("de") != -1) {
        document.getElementById(elementId).content = textOnGerman;
        
    } else {
        document.getElementById(elementId).content = textOnSerbian;
    }
}

function setCorrectLanguageAlt(elementId, textOnSerbian, textOnEnglish, textOnGerman){
    const lang = navigator.language;
    if(lang.indexOf("en") != -1) {
        document.getElementById(elementId).alt = textOnEnglish;

    } else if(lang.indexOf("de") != -1) {
        document.getElementById(elementId).alt = textOnGerman;
        
    } else {
        document.getElementById(elementId).alt = textOnSerbian;
    }
}