document.addEventListener('DOMContentLoaded', function() {
    // Add click event to navigation links
    document.querySelectorAll('.nav-right li a').forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            document.querySelectorAll('.nav-right li a').forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.carousel-control.prev');
    const next = document.querySelector('.carousel-control.next');

    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }

        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
            dots[index].classList.remove('active');
        });

        slides[slideIndex].style.display = 'block';
        setTimeout(() => slides[slideIndex].classList.add('active'), 10);
        dots[slideIndex].classList.add('active');
    }

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => changeSlide(-1));
    next.addEventListener('click', () => changeSlide(1));
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    showSlides(slideIndex);

    // Auto change slide every 5 seconds
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});
