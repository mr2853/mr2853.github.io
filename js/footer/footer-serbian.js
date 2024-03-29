let footerSerbian = `
<!-- Footer Start -->
<div class="container-fluid bg-dark text-secondary p-5">
    <div class="row g-5">
        <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Linkovi:</h3>
            <div class="d-flex flex-column justify-content-start">
                <a class="text-secondary mb-2" href="prevoz-transport-vozila-evropa.html"><i
                        class="bi bi-arrow-right text-primary me-2"></i>Početna</a>
                <a class="text-secondary mb-2" href="o-nama-transport-vozila-evropa.html"><i class="bi bi-arrow-right text-primary me-2"></i>O
                    nama</a>
                <a class="text-secondary mb-2" href="galerija-vozila.html"><i
                        class="bi bi-arrow-right text-primary me-2"></i>Galerija</a>
                <a class="text-secondary" href="kontakt-prevoz-evropa.html"><i
                        class="bi bi-arrow-right text-primary me-2"></i>Kontakt</a>
            </div>
        </div>
        <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Kontakt:</h3>
            <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>Vrbas, Srbija</p>
            <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i><a href="mailto:danilo.mazic12@gmail.com">danilo.mazic12@gmail.com</a></p>
            <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i><a href="tel:+381 6286 07021">+381 6286 07021</a></p>
            <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i><a href="tel:+49 170436 2889">Viber/WA: +49 170436 2889</a></p>
        </div>
    </div>
</div>
<div class="container-fluid bg-dark text-secondary text-center border-top py-4 px-5"
    style="border-color: rgba(256, 256, 256, .1) !important;">
    <p class="m-0">&copy; <a class="text-secondary border-bottom" href="#">transport-evropa</a>. All Rights Reserved.
        Designed by <span class="text-secondary border-bottom">TransportEvropa</span></p>
</div>
<!-- Footer End -->
`;

let delayFooter = document.getElementById("footerScript").getAttribute("delayFooter");

setTimeout(function() {
    
    document.getElementById('footerTemplateId').innerHTML = footerSerbian;
    
    lazyLoadInstance.update();

  }, parseInt(delayFooter));