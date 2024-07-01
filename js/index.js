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


//------------------------------- Text Replacement-------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const textchangearray = ['Programming', 'Upskill', 'Engineering', 'Placement'];
    let index = 0;

    setInterval(() => {
        let textchange = document.getElementById("textchange");
        if (textchange) { // Check if the element exists
            textchange.style.opacity = 0; // Start fade out

            setTimeout(() => {
                textchange.innerHTML = textchangearray[index];
                textchange.style.opacity = 1; // Start fade in
                index = (index + 1) % textchangearray.length; // Loop through the array
            }, 500); // Match this timeout with the CSS transition duration
        }
    }, 3000);
});

