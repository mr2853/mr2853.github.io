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
            <img class="aboutUsImage lazy" data-src="img/1.jpg" loading="lazy" alt="Picture of a truck with trailer in Transport Europe's fleet">
        </div>
    </div>
</div>
<!-- About End -->
`;

document.getElementById("aboutTemplateId").innerHTML = aboutHtmlTextEnglish;