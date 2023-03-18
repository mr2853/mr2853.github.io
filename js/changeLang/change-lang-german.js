let popupChangeLangGerman = `
<p>Wählen Sie Ihre gewünschte Sprache: <br>
    <a href="vehicle-transportation-europe.html">Englisch</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbisch</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangGerman;

let holdChangeLang = document.getElementById("changeLangScript").getAttribute("holdChangeLang");

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, parseInt(holdChangeLang));
}, 1500);