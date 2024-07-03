// -------------------------------Navbar Dropdown-------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown elements
    var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('mouseover', function () {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
                dropdownMenu.style.opacity = '1';
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
                dropdownMenu.style.opacity = '0';
            }
        });
    });
});


// ------------------------------- Accenture content change------------------------------
function AccentureOverview(){
    let Accentureoverview=document.getElementById("Accentureoverview");
    Accentureoverview.style.display="block";

    let AccentureCognitive=document.getElementById("AccentureCognitive");
    AccentureCognitive.style.display="none";
    let AccentureTechnical=document.getElementById("AccentureTechnical");
    AccentureTechnical.style.display="none";
    let AccentureCoding=document.getElementById("AccentureCoding");
    AccentureCoding.style.display="none";
    let AccentureCommunication=document.getElementById("AccentureCommunication");
    AccentureCommunication.style.display="none";
}

function AccentureCognitive(){
    let Cognitive=document.getElementById("AccentureCognitive");
    Cognitive.style.display="block";

    let Accentureoverview=document.getElementById("Accentureoverview");
    Accentureoverview.style.display="none";
    let AccentureTechnical=document.getElementById("AccentureTechnical");
    AccentureTechnical.style.display="none";
    let AccentureCoding=document.getElementById("AccentureCoding");
    AccentureCoding.style.display="none";
    let AccentureCommunication=document.getElementById("AccentureCommunication");
    AccentureCommunication.style.display="none";
}

function AccentureTechnical(){
    let AccentureTechnical=document.getElementById("AccentureTechnical");
    AccentureTechnical.style.display="block";

    let Accentureoverview=document.getElementById("Accentureoverview");
    Accentureoverview.style.display="none";
    let AccentureCognitive=document.getElementById("AccentureCognitive");
    AccentureCognitive.style.display="none";
    let AccentureCoding=document.getElementById("AccentureCoding");
    AccentureCoding.style.display="none";
    let AccentureCommunication=document.getElementById("AccentureCommunication");
    AccentureCommunication.style.display="none";
}


function AccentureCoding(){
    let AccentureCoding=document.getElementById("AccentureCoding");
    AccentureCoding.style.display="block";

    let Accentureoverview=document.getElementById("Accentureoverview");
    Accentureoverview.style.display="none";
    let AccentureCognitive=document.getElementById("AccentureCognitive");
    AccentureCognitive.style.display="none";
    let AccentureTechnical=document.getElementById("AccentureTechnical");
    AccentureTechnical.style.display="none";
    let AccentureCommunication=document.getElementById("AccentureCommunication");
    AccentureCommunication.style.display="none";
}

function AccentureCommunication(){
    let AccentureCommunication=document.getElementById("AccentureCommunication");
    AccentureCommunication.style.display="block";

    let Accentureoverview=document.getElementById("Accentureoverview");
    Accentureoverview.style.display="none";
    let AccentureCognitive=document.getElementById("AccentureCognitive");
    AccentureCognitive.style.display="none";
    let AccentureTechnical=document.getElementById("AccentureTechnical");
    AccentureTechnical.style.display="none";
    let AccentureCoding=document.getElementById("AccentureCoding");
    AccentureCoding.style.display="none";
}


// ------------------------------- Deloitte content change------------------------------
function DeloitteOverview(){
    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "block";

    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "none";
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "none";
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "none";
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "none";
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "none";
}

function DeloitteQuants(){
    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "block";

    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "none";
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "none";
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "none";
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "none";
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "none";
}

function DeloitteVerbal(){
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "block";

    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "none";
    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "none";
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "none";
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "none";
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "none";
}

function DeloitteLogical(){
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "block";

    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "none";
    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "none";
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "none";
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "none";
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "none";
}

function DeloitteTechnical(){
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "block";

    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "none";
    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "none";
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "none";
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "none";
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "none";
}

function DeloitteCoding(){
    let DeloitteCoding = document.getElementById("DeloitteCoding");
    DeloitteCoding.style.display = "block";

    let DeloitteOverview = document.getElementById("DeloitteOverview");
    DeloitteOverview.style.display = "none";
    let DeloitteQuants = document.getElementById("DeloitteQuants");
    DeloitteQuants.style.display = "none";
    let DeloitteVerbal = document.getElementById("DeloitteVerbal");
    DeloitteVerbal.style.display = "none";
    let DeloitteLogical = document.getElementById("DeloitteLogical");
    DeloitteLogical.style.display = "none";
    let DeloitteTechnical = document.getElementById("DeloitteTechnical");
    DeloitteTechnical.style.display = "none";
}
