document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect to navigation menu items
    const navItems = document.querySelectorAll(".t-TreeNav .a-TreeView-row");
    navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateX(5px)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateX(0)";
        });
    });

    // Add fade-in animation to all cards
    const cards = document.querySelectorAll(".t-Card");
    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        cards.forEach((card) => {
            card.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        });
    }, 100);
});