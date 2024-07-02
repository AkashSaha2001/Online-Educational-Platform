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


// -------------------------------content change------------------------------
function overview(){
    let overview=document.getElementById("overview");
    overview.style.display="block";

    let Cognative=document.getElementById("Cognative");
    Cognative.style.display="none";
    let Technical=document.getElementById("Technical");
    Technical.style.display="none";
    let Coding=document.getElementById("Coding");
    Coding.style.display="none";
    let Communication=document.getElementById("Communication");
    Communication.style.display="none";
}

function Cognative(){
    let Cognative=document.getElementById("Cognative");
    Cognative.style.display="block";

    let overview=document.getElementById("overview");
    overview.style.display="none";
    let Technical=document.getElementById("Technical");
    Technical.style.display="none";
    let Coding=document.getElementById("Coding");
    Coding.style.display="none";
    let Communication=document.getElementById("Communication");
    Communication.style.display="none";
}

function Technical(){
    let Technical=document.getElementById("Technical");
    Technical.style.display="block";

    let overview=document.getElementById("overview");
    overview.style.display="none";
    let Cognative=document.getElementById("Cognative");
    Cognative.style.display="none";
    let Coding=document.getElementById("Coding");
    Coding.style.display="none";
    let Communication=document.getElementById("Communication");
    Communication.style.display="none";
}


function Coding(){
    let Coding=document.getElementById("Coding");
    Coding.style.display="block";

    let overview=document.getElementById("overview");
    overview.style.display="none";
    let Cognative=document.getElementById("Cognative");
    Cognative.style.display="none";
    let Technical=document.getElementById("Technical");
    Technical.style.display="none";
    let Communication=document.getElementById("Communication");
    Communication.style.display="none";
}

function Communication(){
    let Communication=document.getElementById("Communication");
    Communication.style.display="block";

    let overview=document.getElementById("overview");
    overview.style.display="none";
    let Cognative=document.getElementById("Cognative");
    Cognative.style.display="none";
    let Technical=document.getElementById("Technical");
    Technical.style.display="none";
    let Coding=document.getElementById("Coding");
    Coding.style.display="none";
}