const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.outerHeight / 3) {

        if (!scrollToTop.classList.contains("active")) {
            scrollToTop.classList.add("active");
        }
    } else if (scrollToTop.classList.contains("active")) {
        scrollToTop.classList.remove("active");
    }
});