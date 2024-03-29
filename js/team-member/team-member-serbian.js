let teamMemberSerbian = `
<!-- Team Start -->
<div class="container-fluid py-6 px-5">
    <div class="row g-5">
        <div class="col-lg-4">
            <div class="team-item position-relative overflow-hidden">
                <img id="profile_photo_Danilo" class="img-fluid w-100 lazy" data-src="img/profile_photo.jpg" alt="Slika osnivača Transport Evropa">
                <div class="w-100 position-absolute top-50 text-center bg-primary p-4">
                    <h3 class="text-white">Danilo Mazić</h3>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Team End -->
`;


let delayMember = document.getElementById("memberScript").getAttribute("delayMember");

setTimeout(function() {
    
    document.getElementById("team-memberTemplateId").innerHTML = teamMemberSerbian;
    lazyLoadInstance.update();

  }, parseInt(delayMember));