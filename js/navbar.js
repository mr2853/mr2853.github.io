let navbarTemplate = `
<nav class="navigationWrapper" id="navbarElement">
    <div class="logoWrapper" id="logoWrapper">
        <span class="stylish">Transport Evropa</span>
        <span class="logo">By Autoservice Mazić</span>
    </div>
    <div class="navigation listNavbarPages" id="contantDetails">
        <p class="link photoLarge"><a href="mailto:danilo.mazic12@gmail.com" class="listNavbarItem" id="fName"><i class="fa fa-envelope-open photoFa"></i>danilo.mazic12@gmail.com</a></p>
        <p class="link photoLarge"><a class="listNavbarItem" href="tel:+381 6286 07021" id="mob1"><i class="fa fa-phone-alt me-2 photoFa"></i>+381 6286 07021</a></p>
        <p class="link photoLarge"><a class="listNavbarItem" href="tel:+49 170436 2889" id="mob2"><i class="fa fa-phone-alt me-2 photoFa"></i>Viber/WA: +49 170436 2889</a></p>
    </div>
    <ul class="navigation" id="pagesList">
        <li class="parent paddingChange"><a href="index.html" class="link" id="homeTab">Pocetna</a></li>
        <li class="parent paddingChange"><a href="about.html" class="link" id="aboutTab">O nama</a></li>
        <li class="parent paddingChange"><a href="gallery.html" class="link" id="galleryTab">Galerija</a></li>
        <li class="parent paddingChange"><a href="contact.html" class="link" id="contactTab">Kontakt</a></li>
    </ul>
</nav>
`;

let navbarTemplateSmallWindow = `
<nav class="navigationWrapper" id="navbarElement">
    <div class="logoWrapper" id="logoWrapper">
        <span class="stylish">Transport Evropa</span>
        <span class="logo">By Autoservice Mazić</span>
    </div>
    <div class="navigation listNavbarPages" id="contantDetails">
        <p class="link photoLarge"><a href="mailto:danilo.mazic12@gmail.com" class="listNavbarItem" id="fName"><i class="fa fa-envelope-open photoFa"></i>danilo.mazic12@gmail.com</a></p>
        <p class="link photoLarge"><a class="listNavbarItem" href="tel:+381 6286 07021" id="mob1"><i class="fa fa-phone-alt me-2 photoFa"></i>+381 6286 07021</a></p>
        <p class="link photoLarge"><a class="listNavbarItem" href="tel:+49 170436 2889" id="mob2"><i class="fa fa-phone-alt me-2 photoFa"></i>Viber/WA: +49 170436 2889</a></p>
    </div>
    <ul class="navigation" id="pagesList">
        <ul class="navigation" id="pagesListChild">
            <li class="parent paddingChange"><a href="index.html" class="link" id="homeTab">Pocetna</a></li>
            <li class="parent paddingChange"><a href="about.html" class="link" id="aboutTab">O nama</a></li>
        </ul>
        <ul class="navigation" id="pagesListChild">
            <li class="parent paddingChange"><a href="gallery.html" class="link" id="galleryTab">Galerija</a></li>
            <li class="parent paddingChange"><a href="contact.html" class="link" id="contactTab">Kontakt</a></li>
        </ul>
    </ul>
</nav>
`;

document.getElementById('navbarTemplateId').innerHTML = navbarTemplate;

let currentLocation = document.getElementById("scriptNavbar").getAttribute("currentLocation");
setSelectedPage()


let smallWindowActive = false;

function setNavbarSmallScreen() {
    if (window.innerWidth < 770) {
        document.getElementById('navbarTemplateId').innerHTML = navbarTemplateSmallWindow;
    } else {
        document.getElementById('navbarTemplateId').innerHTML = navbarTemplate;
    }
    setSelectedPage()
}

function setSelectedPage() {
    if (currentLocation) {
        document.getElementById(currentLocation).style.color = "rgb(255, 123, 123)";
    }
}