let aboutHtmlText = `
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
            <img class="aboutUsImage" src="img/1.jpg">
        </div>
    </div>
</div>
<!-- About End -->
`;

document.getElementById('aboutTemplateId').innerHTML = aboutHtmlText;