document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var url = window.location.href;

    // Get all the navigation links
    var navLinks = document.querySelectorAll(".navbar a");

    // Loop through each link and check if it matches the current URL
    navLinks.forEach(function (link) {
        if (url.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});
