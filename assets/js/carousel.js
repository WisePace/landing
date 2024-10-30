document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('reviewsSlider');
    const reviewsCarousel = document.getElementById('reviewsCarousel');
    
    let currentPosition = 0;
    const slides = slider.children.length;
    let slideWidth = 100; // 100% for mobile, will be overridden for larger screens

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentPosition * slideWidth}%)`;
    }

    function nextSlide() {
        if (currentPosition < slides - 1) {
            currentPosition++;
        } else {
            currentPosition = 0; // Loop back to the first slide
        }
        updateSliderPosition();
    }

    function prevSlide() {
        if (currentPosition > 0) {
            currentPosition--;
        } else {
            currentPosition = slides - 1; // Loop to the last slide
        }
        updateSliderPosition();
    }

    function createNavigationButtons() {
        const navigationButtons = document.createElement('div');
        navigationButtons.className = 'flex justify-center mt-8 space-x-4';
        navigationButtons.innerHTML = `
            <button id="prevButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button id="nextButton" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        `;
        reviewsCarousel.appendChild(navigationButtons);

        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    function updateCarousel() {
        createNavigationButtons();
        
        // Update slider for mobile
        slider.classList.add('flex', 'flex-nowrap', 'transition-transform', 'duration-300', 'ease-in-out');
        Array.from(slider.children).forEach(child => {
            child.classList.add('w-full', 'flex-shrink-0', 'md:w-1/3');
        });

        // Handle resize events
        function handleResize() {
            if (window.innerWidth >= 768) { // md breakpoint
                slideWidth = 100 / 3;
                if (currentPosition > slides - 3) {
                    currentPosition = slides - 3;
                }
            } else {
                slideWidth = 100;
            }
            updateSliderPosition();
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial state
    }

    // Call this function to set up the initial state
    updateCarousel();

    // Optional: Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    }, false);
});
