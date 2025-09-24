document.addEventListener('DOMContentLoaded', function() {
    let currentTestimonialIndex = 0; // Start from the first testimonial
    const testimonials = document.querySelectorAll('.testimonial-card');
    const testimonialCarousel = document.querySelector('.testimonial-carousel');

    function showTestimonial(index) {
        const offset = index * (-90); // Adjusted offset for full width of each testimonial
        testimonialCarousel.style.transition = 'transform 0.5s ease-in-out'; // Adjust transition speed here
        testimonialCarousel.style.transform = `translateX(${offset}%)`;
    }

    function changeTestimonial(step) {
        currentTestimonialIndex = (currentTestimonialIndex + step + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    // Event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', function() {
        changeTestimonial(-1); // Move to previous testimonial
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeTestimonial(1); // Move to next testimonial
    });

    // Initial display
    showTestimonial(currentTestimonialIndex);
});
