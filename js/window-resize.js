
window.addEventListener('resize', function () {
    
    currentLocation = document.getElementById("scriptNavbar").getAttribute("currentLocation");
    if(currentLocation == "homeTab") {
        changeLargeImages();
        console.log("izmenjeno");
    }
    setNavbarSmallScreen();
});

function changeLargeImages() {
    if(document.getElementById("imagePresentation1") != null) {
        if (window.innerWidth < 1000) {
            document.getElementById("imagePresentation1").dataSrc = "img/medium/36.jpg";
            document.getElementById("imagePresentation2").dataSrc = "img/medium/13.jpg";
            document.getElementById("imagePresentation3").dataSrc = "img/medium/28.jpg";
        } else {
            document.getElementById("imagePresentation1").dataSrc = "img/large/36.jpg";
            document.getElementById("imagePresentation2").dataSrc = "img/large/13.jpg";
            document.getElementById("imagePresentation3").dataSrc = "img/large/28.jpg";
        }
    }
}

setNavbarSmallScreen();


setTimeout(function() {
    
    changeLargeImages();
    lazyLoadInstance.update();

  }, 2000);