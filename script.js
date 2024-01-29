const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    scrollToTop.classList.toggle("active", window.scrollY > window.outerHeight / 3);
});