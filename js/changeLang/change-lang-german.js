let popupChangeLangGerman = `
<p>Wählen Sie Ihre gewünschte Sprache: <br>
    <a href="vehicle-transportation-europe.html">Englisch</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbisch</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangGerman;

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, 10000);
}, 1500);