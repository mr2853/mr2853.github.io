
$(window).resize(function () {
    changeLargeImages();
    setNavbarSmallScreen();
});

function changeLargeImages() {
    if (window.innerWidth < 1000) {
        document.getElementById("imagePresentation1").src = "img/medium/36.jpg";
        document.getElementById("imagePresentation2").src = "img/medium/13.jpg";
        document.getElementById("imagePresentation3").src = "img/medium/28.jpg";
    } else {
        document.getElementById("imagePresentation1").src = "img/large/36.jpg";
        document.getElementById("imagePresentation2").src = "img/large/13.jpg";
        document.getElementById("imagePresentation3").src = "img/medium/28.jpg";
    }
}

changeLargeImages();
setNavbarSmallScreen();