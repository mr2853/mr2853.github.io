let gallery1 = `
<!-- Gallery Start -->
<div class="container-fluid bg-secondary p-0">
    <!-- Gallery -->
    <div class="row" id="galleryTemplateId2">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/1.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/6.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/3.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/4.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/5.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/2.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/7.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/8.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/9.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/10.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/11.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/12.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>
    </div>
    <!-- Gallery -->
</div>
<!-- Gallery End -->
`;

let gallery2 = `
        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/13.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/14.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/15.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/16.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/17.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/18.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/19.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/20.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/21.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/22.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/23.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/24.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/33.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />

            <img data-src="img/36.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/35.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/34.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="transport vozila" />
        </div>
`;

document.getElementById('galleryTemplateId1').innerHTML = gallery1;


setTimeout(function() {
    
    document.getElementById('galleryTemplateId2').innerHTML += gallery2;
    lazyLoadInstance.update();

  }, 2000);