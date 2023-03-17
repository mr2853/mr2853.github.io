let aboutHtmlTextSerbian = `
<!-- About Start -->
<div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-6 py-6 px-5 smallMarginTopAboutUsTitle" id="aboutUsText">
            <h1 class="display-5 mb-4 aboutUsTextTitle">Dobrodošli u <span class="text-primary">Transport Evropom</span></h1>
            <h4 class="text-primary mb-4 aboutUsTextDescTitle">Brz, pouzdan i ekonomičan transport</h4>
            <p class="mb-4 aboutUsTextDesc">Mi smo firma za transport koja pruža širok spektar usluga prevoza robe i
                opreme na teritoriji Evrope. Naša vozila su specijalno prilagođena za prevoz velikih tereta poput vozila
                i radnih mašina. Naš tim vozača ima dugogodišnje iskustvo u prevozu, što garantuje siguran i efikasan
                transport vaše robe. Naša misija je da pružimo brz, pouzdan i ekonomičan prevoz za bilo koju vrstu robe
                i opreme uz visok nivo profesionalnosti.</p>
        </div>

        <div class="col-lg-6 smallMarginTopAboutUsTitle aboutUsImageDiv" style="width: fit-content;">
            <img class="aboutUsImage lazy" data-src="img/1.jpg" loading="lazy">
        </div>
    </div>
</div>
<!-- About End -->
`;

let aboutHtmlTextEnglish = `
<!-- About Start -->
<div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-6 py-6 px-5 smallMarginTopAboutUsTitle" id="aboutUsText">
            <h1 class="display-5 mb-4 aboutUsTextTitle">Welcome to <span class="text-primary">Transport Europe.</span></h1>
            <h4 class="text-primary mb-4 aboutUsTextDescTitle">Fast, reliable, and cost-effective transportation.</h4>
            <p class="mb-4 aboutUsTextDesc">We are a transportation company that provides a wide range of goods and equipment transportation services throughout Europe. Our vehicles are specially adapted for the transportation of large cargoes such as vehicles and heavy machinery. Our team of drivers has many years of experience in transportation, ensuring safe and efficient delivery of your goods. Our mission is to provide fast, reliable, and cost-effective transportation for any type of goods and equipment with a high level of professionalism.</p>
        </div>

        <div class="col-lg-6 smallMarginTopAboutUsTitle aboutUsImageDiv" style="width: fit-content;">
            <img class="aboutUsImage lazy" data-src="img/1.jpg" loading="lazy">
        </div>
    </div>
</div>
<!-- About End -->
`;

let aboutHtmlTextGerman = `
<!-- About Start -->
<div class="container-fluid bg-secondary p-0">
    <div class="row g-0">
        <div class="col-lg-6 py-6 px-5 smallMarginTopAboutUsTitle" id="aboutUsText">
            <h1 class="display-5 mb-4 aboutUsTextTitle">Willkommen bei <span class="text-primary">Transport Europa</span></h1>
            <h4 class="text-primary mb-4 aboutUsTextDescTitle">Wir sind ein Transportunternehmen, das eine breite Palette von Dienstleistungen für den Transport von Waren und Ausrüstungen in ganz Europa anbietet. Unsere Fahrzeuge sind speziell für den Transport von großen Frachten wie Fahrzeugen und schweren Maschinen angepasst. Unser Team von Fahrern verfügt über langjährige Erfahrung im Transportwesen, was eine sichere und effiziente Lieferung Ihrer Waren garantiert. Unsere Mission ist es, einen schnellen, zuverlässigen und kosteneffizienten Transport für jede Art von Waren und Ausrüstungen mit einem hohen Maß an Professionalität zu bieten." --> "Wir sind ein Transportunternehmen, das eine breite Palette von Dienstleistungen für den Transport von Waren und Ausrüstungen in ganz Europa anbietet. Unsere Fahrzeuge sind speziell für den Transport von großen Frachten wie Fahrzeugen und schweren Maschinen angepasst. Unser Team von Fahrern verfügt über langjährige Erfahrung im Transportwesen, was eine sichere und effiziente Lieferung Ihrer Waren garantiert. Unsere Mission ist es, einen schnellen, zuverlässigen und kosteneffizienten Transport für jede Art von Waren und Ausrüstungen mit einem hohen Maß an Professionalität zu bieten.</p>
        </div>

        <div class="col-lg-6 smallMarginTopAboutUsTitle aboutUsImageDiv" style="width: fit-content;">
            <img class="aboutUsImage lazy" data-src="img/1.jpg" loading="lazy">
        </div>
    </div>
</div>
<!-- About End -->
`;

let pageTitle = document.getElementById("pageTitle");
if (navigator.language.indexOf("en") != -1) {
    if (pageTitle != null) {
        pageTitle.innerHTML = "About Us";
    }
    document.getElementById("aboutTemplateId").innerHTML = aboutHtmlTextEnglish;

} else if (navigator.language.indexOf("de") != -1) {
    if (pageTitle != null) {
        document.getElementById("pageTitle").innerHTML = "Über uns";
    }
    document.getElementById("aboutTemplateId").innerHTML = aboutHtmlTextGerman;

} else {
    if (pageTitle != null) {
        document.getElementById("pageTitle").innerHTML = "O name";
    }
    document.getElementById("aboutTemplateId").innerHTML = aboutHtmlTextSerbian;
}