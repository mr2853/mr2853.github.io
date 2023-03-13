
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });

window.addEventListener('resize',function () {
    lazyLoadInstance.update();
});


setTimeout(function() {
    
  document.getElementById('delayScript2').src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
  document.getElementById('delayScript3').src = "lib/easing/easing.min.js";
  document.getElementById('delayScript4').src = "lib/waypoints/waypoints.min.js";
  document.getElementById('delayScript5').src = "lib/owlcarousel/owl.carousel.min.js";
  lazyLoadInstance.update();

}, 2000);