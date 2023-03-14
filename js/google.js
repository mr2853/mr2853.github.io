

setTimeout(function() {
    
    document.getElementById("googleMainScript").src = "https://www.googletagmanager.com/gtag/js?id=G-7TF35R6TLG";

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-7TF35R6TLG');

  }, 5000);