let popupChangeLangSerbian = `
<p>Odaberite željeni jezik: <br>
    <a href="vehicle-transportation-europe.html">Engleski</a> | 
    <a href="fahrzeugtransport-europa.html">Nemački</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangSerbian;

let holdChangeLang = document.getElementById("changeLangScript").getAttribute("holdChangeLang");

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, parseInt(holdChangeLang));
}, 1500);