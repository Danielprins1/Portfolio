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


document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");

    let counter = 0;
    const slideWidth = images[0].clientWidth;

    function slideNext() {
        if (counter >= images.length - 1) return;
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }

    function slidePrev() {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }

    document.getElementById("nextBtn").addEventListener("click", slideNext);
    document.getElementById("prevBtn").addEventListener("click", slidePrev);
});


var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
     }
    }, 5000);
