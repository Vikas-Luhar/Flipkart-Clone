let slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }