let popupChangeLangEnglish = `
<p>Choose your preferred language: <br>
    <a href="fahrzeugtransport-europa.html">German</a> | 
    <a href="prevoz-transport-vozila-evropa.html">Serbian</a>
</p>
`;

document.getElementById('popupChangeLang').innerHTML = popupChangeLangEnglish;

let holdChangeLang = document.getElementById("changeLangScript").getAttribute("holdChangeLang");

setTimeout(function(){
    document.getElementById('popupChangeLang').className += "fade-in";
    setTimeout(function(){
        document.getElementById('popupChangeLang').className += "fade-in";
    }, parseInt(holdChangeLang));
}, 1500);