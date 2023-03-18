let galleryEnglish = `
<!-- Gallery Start -->
<div class="container-fluid bg-secondary p-0">
    <!-- Gallery -->
    <div class="row" id="galleryTemplateId2">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/1.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Transport of two cars on a truck through the forest" />

            <img data-src="img/6.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Transport of two cars on a truck" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/3.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Trailer and truck from the side during the day" />

            <img data-src="img/4.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Trailer and truck from the rear during the day" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/5.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Trailer and truck from the rear at night" />

            <img data-src="img/2.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Loading vehicles onto a truck at night" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/7.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="Car on a trailer platform" />

            <img data-src="img/8.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="Two cars on a trailer" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/9.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Car on a trailer with a truck in the background driving at night" />

            <img data-src="img/10.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Car on a trailer with a truck in the background driving during the day" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/11.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Towing a vehicle from the forest, truck and vehicle from the side" />

            <img data-src="img/12.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Trailer with a car parked in front of a house" />
        </div>
    </div>
    <!-- Gallery -->
</div>
<!-- Gallery End -->
`;

let gallerySecondEnglish = `

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/13.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transporting a construction machine on a trailer, truck and trailer from the side" />

<img data-src="img/14.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transporting an excavator on a trailer, truck and trailer from the side" />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/15.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transporting a pickup truck on a trailer" />

<img data-src="img/16.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transporting a pickup truck and a car on a trailer" />
</div>
<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/17.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of an older car on a trailer" />

<img data-src="img/18.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of a van and a car on a trailer" />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/19.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of a van and a car, close-up photo on a trailer" />

<img data-src="img/20.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of a van and a car, rear view photo on a trailer" />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/21.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of a van and a car, side view photo on a trailer" />

<img data-src="img/22.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of two cars on a trailer" />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/23.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of construction materials on a trailer" />

<img data-src="img/24.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Loading of construction materials onto a trailer" />
</div>

<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
<img data-src="img/33.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Truck from the right side" />

<img data-src="img/34.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="Truck from the left side" />
</div>

<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
<img data-src="img/35.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Truck from the front side" />

<img data-src="img/36.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport of two cars on a truck" />
</div>
`;

document.getElementById("galleryTemplateId1").innerHTML = galleryEnglish;

setTimeout(function() {
    
    document.getElementById("galleryTemplateId2").innerHTML += gallerySecondEnglish;
    lazyLoadInstance.update();

  }, 2000);