document.addEventListener("DOMContentLoaded", () => {
    const faqTriggers = document.querySelectorAll(".faq-accordion-trigger");

    faqTriggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const currentItem = trigger.parentElement;
            const currentPanel = currentItem.querySelector(".faq-accordion-panel");
            const isOpen = currentItem.classList.contains("is-open");

            // Option: Close other active accordion panels when opening a new one
            document.querySelectorAll(".faq-accordion-item.is-open").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("is-open");
                    item.querySelector(".faq-accordion-panel").style.maxHeight = null;
                }
            });

            // Toggle active visibility parameters
            if (!isOpen) {
                currentItem.classList.add("is-open");
                // Dynamically computes structural height content requirements to enable smooth transitions
                currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
            } else {
                currentItem.classList.remove("is-open");
                currentPanel.style.maxHeight = null;
            }
        });
    });
});
