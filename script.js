document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.querySelector(".back-to-top-container");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            // Show back-to-top button when user scrolls down
            backToTopButton.style.display = "block";
        } else {
            // Hide back-to-top button when at the top of the page
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function(e) {
        e.preventDefault();
        // Scroll to the top of the page with smooth behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


