// Home page specific interactive logic
document.addEventListener('DOMContentLoaded', () => {
    // Collect all critical functional components from DOM array
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    
    let currentSlideIndex = 0;
    let sliderAutoCycleTimer;
    const autoCycleDelayDuration = 5000; // Duration variable in milliseconds (5 seconds)

    // Primary state update handler function
    function updateSliderView(targetIndex) {
        // Drop standard active flags down across current frames
        slides[currentSlideIndex].classList.remove('active');
        dots[currentSlideIndex].classList.remove('active');

        // Transition local scope counter reference address
        currentSlideIndex = targetIndex;

        // Apply updated active states
        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
    }

    function advanceToNextSlide() {
        let logicalNextIndex = (currentSlideIndex + 1) % slides.length;
        updateSliderView(logicalNextIndex);
    }

    function regressToPreviousSlide() {
        let logicalPrevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSliderView(logicalPrevIndex);
    }

    // Instantiates safe intervals to manage recurring automation cycles
    function startAutoRotationCycle() {
        clearInterval(sliderAutoCycleTimer);
        sliderAutoCycleTimer = setInterval(advanceToNextSlide, autoCycleDelayDuration);
    }

    // Interactive event hooks
    nextBtn.addEventListener('click', () => {
        advanceToNextSlide();
        startAutoRotationCycle(); // Resets timer on click
    });

    prevBtn.addEventListener('click', () => {
        regressToPreviousSlide();
        startAutoRotationCycle(); // Resets timer on click
    });

    // Wire up interactive clickable page indicators
    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const indexSelected = parseInt(e.target.getAttribute('data-index'));
            if (indexSelected !== currentSlideIndex) {
                updateSliderView(indexSelected);
                startAutoRotationCycle();
            }
        });
    });

    // Start auto-rotation on page load
    startAutoRotationCycle();
});

document.addEventListener('DOMContentLoaded', () => {
    // Collect components from DOM framework arrays
    const track = document.getElementById('senseiTrack');
    const dots = document.querySelectorAll('.carousel-dot');

    if (track && dots.length > 0) {
        // Base coordinate metric parameters configurations
        const totalUniqueSensei = 4; 
        const cardWidthWithGap = 340; // 310px width + 30px flexbox column gap layout spacing

        // 🚀 PART A: Dynamic Tracking Observer Loop
        // Monitors translation matrix offsets to sync dots automatically during autoplays
        setInterval(() => {
            // Read hardware transform coordinates from track component nodes
            const styleMatrix = window.getComputedStyle(track);
            const transformValue = styleMatrix.getPropertyValue('transform');
            
            if (transformValue && transformValue !== 'none') {
                // Parse matrix arrays data safely to isolate horizontal X axis position translate vectors
                const matrixValues = transformValue.split('(')[1].split(')')[0].split(',');
                const currentXOffset = Math.abs(parseFloat(matrixValues[4]));
                
                // Calculate which specific card section index block matches active scroll views 
                let exactMatchingIndex = Math.floor((currentXOffset + (cardWidthWithGap / 2)) / cardWidthWithGap) % totalUniqueSensei;
                
                // Clean flags out to toggle highlight nodes state positions
                dots.forEach((dot, dotIndex) => {
                    if (dotIndex === exactMatchingIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }, 300);

        // 🚀 PART B: User Tap/Click Navigation Warp Jump Overrides
        dots.forEach((dot) => {
            dot.addEventListener('click', (e) => {
                const targetIndex = parseInt(e.target.getAttribute('data-slide'));
                
                // Temporal freeze track execution by changing CSS animation state properties values
                track.style.animation = 'none';
                
                // Force jump calculate coordinate alignment offsets directly 
                const newTranslateX = targetIndex * cardWidthWithGap;
                track.style.transform = `translate3d(-${newTranslateX}px, 0, 0)`;
                
                // Sync indicator classes instantly
                dots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                // Restore infinite autoplay smooth loop matrix running speeds safely after short user interaction delay
                setTimeout(() => {
                    track.style.transform = '';
                    track.style.animation = 'smoothInfiniteGlidetrack 35s linear infinite';
                }, 4000);
            });
        });
    }
});
