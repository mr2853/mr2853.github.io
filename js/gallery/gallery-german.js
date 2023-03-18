let galleryGerman = `
<!-- Gallery Start -->
<div class="container-fluid bg-secondary p-0">
    <!-- Gallery -->
    <div class="row" id="galleryTemplateId2">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img data-src="img/1.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Transport von zwei Autos auf einem Lastwagen durch den Wald" />
            <img data-src="img/6.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Transport von zwei Autos auf einem Lastwagen" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/3.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Anhänger und Lastwagen von der Seite bei Tag" />

            <img data-src="img/4.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Anhänger und Lastwagen von hinten bei Tag" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/5.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Anhänger und Lastwagen von hinten bei Nacht" />

            <img data-src="img/2.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Verladen von Fahrzeugen auf einen Lastwagen bei Nacht" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/7.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy" alt="Auto auf einem Anhänger" />

            <img data-src="img/8.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Zwei Autos auf einem Anhänger" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/9.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Auto auf einem Anhänger mit einem Lastwagen im Hintergrund bei Nacht" />

            <img data-src="img/10.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Auto auf einem Anhänger mit einem Lastwagen im Hintergrund bei Tag" />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
            <img data-src="img/11.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Abschleppen eines Fahrzeugs aus dem Wald, LKW und Fahrzeug von der Seite" />

            <img data-src="img/12.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
                alt="Anhänger mit einem Auto vor einem Haus geparkt" />
        </div>
    </div>
    <!-- Gallery -->
</div>
<!-- Gallery End -->
`;

let gallerySecondGerman = `

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/13.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport einer Baumaschine auf einem Anhänger, LKW und Anhänger von der Seite" />

<img data-src="img/14.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport eines Baggers auf einem Anhänger, LKW und Anhänger von der Seite" />
</div>

<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/15.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport eines Pick-up-Trucks auf einem Anhänger" />

<img data-src="img/16.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport eines Pick-up-Trucks und eines Autos auf einem Anhänger" />
</div>
<div class="col-lg-4 mb-4 mb-lg-0">
<img data-src="img/17.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport eines älteren Autos auf einem Anhänger" />

<img data-src="img/18.jpg" class="w-100 shadow-1-strong rounded mb-4 lazy"
    alt="Transport eines Lieferwagens und eines Autos auf einem Anhänger" />
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

document.getElementById("galleryTemplateId1").innerHTML = galleryGerman;

setTimeout(function() {
    
    document.getElementById("galleryTemplateId2").innerHTML += gallerySecondGerman;
    lazyLoadInstance.update();

  }, 2000);