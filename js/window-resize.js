
$(window).resize(function () {
    changeLargeImages();
});

$(window.window.length).resize(function () {
    changeLargeImages();
});


function changeLargeImages() {
    if (window.innerWidth < 1000) {
        document.getElementById("imagePresentation1").src = "img/medium/32.avif";
        document.getElementById("imagePresentation2").src = "img/medium/13.avif";
    } else {
        document.getElementById("imagePresentation1").src = "img/large/32.avif";
        document.getElementById("imagePresentation2").src = "img/large/13.avif";
    }
}