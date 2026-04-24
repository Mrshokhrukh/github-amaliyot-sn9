const header = document.querySelector(".site-header");
const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

if (header && toggleButton) {
    toggleButton.addEventListener("click", () => {
        const isOpen = header.classList.toggle("menu-open");
        toggleButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("menu-open");
            toggleButton.setAttribute("aria-expanded", "false");
        });
    });
}
