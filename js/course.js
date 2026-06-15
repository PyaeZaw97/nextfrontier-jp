document.addEventListener('DOMContentLoaded', () => {
    console.log("Course Catalog system loaded successfully.");
});

document.addEventListener('DOMContentLoaded', () => {
    // Target the main parent graphic module container
    const graphicColumn = document.querySelector('.skills-graphic-column');

    if (graphicColumn) {
        // Build the native intersection observer parameters layout configuration
        const scrollOptions = {
            root: null,         // Tracks relative to browser device window layout bounds
            threshold: 0.2,     // Triggers once 20% of the section enters the screen workspace
            rootMargin: "0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // If the user has scrolled to the targeted section layout spot
                if (entry.isIntersecting) {
                    // Inject active class to trigger clean CSS animation frames
                    graphicColumn.classList.add('revealed');
                    
                    // Unobserve immediately to save computer memory cycles
                    observer.unobserve(entry.target);
                }
            });
        }, scrollOptions);

        // Instruct observer engine to start monitoring the graphic column block
        revealObserver.observe(graphicColumn);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-pill");
    const catalogCards = document.querySelectorAll(".catalog-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active style from previous selection and apply to current
            document.querySelector(".filter-pill.active")?.classList.remove("active");
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-target");

            catalogCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                // Evaluate display logical constraints
                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }
            });
        });
    });
});


