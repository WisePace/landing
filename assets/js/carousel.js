document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('reviewsSlider');
    const reviewsCarousel = document.getElementById('reviewsCarousel');
    
    let currentPosition = 0;
    const slides = slider.children.length;
    let slideWidth = 100; // 100% for mobile, will be overridden for larger screens
    let slidesPerView = 1; // 1 for mobile, 3 for desktop
    let navigationButtons;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentPosition * (slideWidth / slidesPerView)}%)`;
    }

    function nextSlide() {
        if (currentPosition < slides - slidesPerView) {
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
            currentPosition = slides - slidesPerView; // Loop to the last set of slides
        }
        updateSliderPosition();
    }

    function createNavigationButtons() {
        navigationButtons = document.createElement('div');
        navigationButtons.className = 'flex justify-center mt-8 space-x-4 md:hidden'; // Hide by default on md+
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
                slideWidth = 100;
                slidesPerView = 3;
                if (currentPosition > slides - slidesPerView) {
                    currentPosition = slides - slidesPerView;
                }
                // Show arrows on md+ only if there are 4 or more slides
                if (slides > 3) {
                    navigationButtons.classList.remove('md:hidden');
                } else {
                    navigationButtons.classList.add('md:hidden');
                }
            } else {
                slideWidth = 100;
                slidesPerView = 1;
                navigationButtons.classList.remove('md:hidden'); // Always show on mobile
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


document.addEventListener('DOMContentLoaded', function() {
    // Projects Carousel
    (function() {
        const slider = document.getElementById('projectsSlider');
        const carousel = document.getElementById('projectsCarousel');
        
        let currentPosition = 0;
        const slides = slider.children.length;
        let slidesPerView = 1; // Default to 1 for mobile
        let navigationButtons;

        function updateSliderPosition() {
            const slideWidthPercentage = 100 / slidesPerView;
            slider.style.transform = `translateX(-${currentPosition * slideWidthPercentage}%)`;
        }

        function nextSlide() {
            if (currentPosition < slides - slidesPerView) {
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
                currentPosition = slides - slidesPerView; // Loop to the last set of slides
            }
            updateSliderPosition();
        }

        function createNavigationButtons() {
            navigationButtons = document.createElement('div');
            navigationButtons.className = 'flex justify-center mt-8 space-x-4';
            navigationButtons.innerHTML = `
                <button id="projectsPrevButton" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="projectsNextButton" class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full">
                    <i class="fas fa-chevron-right"></i>
                </button>
            `;
            carousel.appendChild(navigationButtons);

            const prevButton = document.getElementById('projectsPrevButton');
            const nextButton = document.getElementById('projectsNextButton');
            prevButton.addEventListener('click', prevSlide);
            nextButton.addEventListener('click', nextSlide);
        }

        function updateCarousel() {
            if (!navigationButtons) {
                createNavigationButtons();
            }
            
            // Update slider styling
            slider.classList.add('flex', 'flex-nowrap', 'transition-transform', 'duration-300', 'ease-in-out');
            Array.from(slider.children).forEach(child => {
                child.classList.add('flex-shrink-0');
            });

            // Handle resize events
            function handleResize() {
                if (window.innerWidth >= 768) { // md breakpoint
                    slidesPerView = 3;
                    Array.from(slider.children).forEach(child => {
                        child.style.width = `${100 / slidesPerView}%`;
                    });
                    // On MD+ devices, hide navigation buttons if slides <= slidesPerView
                    if (slides <= slidesPerView) {
                        navigationButtons.style.display = 'none';
                    } else {
                        navigationButtons.style.display = 'flex';
                    }
                } else {
                    slidesPerView = 1;
                    Array.from(slider.children).forEach(child => {
                        child.style.width = '100%';
                    });
                    // On mobile devices, always show navigation buttons
                    navigationButtons.style.display = 'flex';
                }
                // Adjust currentPosition if necessary
                if (currentPosition > slides - slidesPerView) {
                    currentPosition = slides - slidesPerView;
                }
                updateSliderPosition();
            }

            window.addEventListener('resize', handleResize);
            handleResize(); // Initial call
        }

        // Initialize the carousel
        updateCarousel();

        // Touch swipe functionality
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
    })();
});