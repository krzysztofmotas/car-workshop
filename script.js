const headerNav = document.querySelector(".header-nav");
const offsetTop = headerNav.offsetTop;
const hamburgerCheckbox = document.getElementById("hamburger-checkbox");
const companyLogo = document.querySelector(".company-logo");

window.addEventListener("scroll", () => {
    if (window.scrollY >= offsetTop + 120) {
        headerNav.classList.add("sticky");
        // headerNav.classList.add("slide-down-animation");

        if (!hamburgerCheckbox.checked) {
            headerNav.classList.remove("sticky-nocolor");
        }
    } else {
        headerNav.classList.remove("sticky");
        // headerNav.classList.remove("slide-down-animation");
    }

    // Zabezpiecza przypadek, gdy rozwijane menu jest aktywne i użytkownik scrolluje stronę.
    if (headerNav.classList.contains("sticky") && hamburgerCheckbox.checked && !headerNav.classList.contains("sticky-nocolor")) {
        headerNav.classList.add("sticky-nocolor");
    }
});

hamburgerCheckbox.addEventListener("change", () => {
    // "Usuwanie" koloru header-nav podczas otworzenia rozwijanego menu.
    if (headerNav.classList.contains("sticky")) {
        if (hamburgerCheckbox.checked) {
            headerNav.classList.add("sticky-nocolor");
        } else {
            headerNav.classList.remove("sticky-nocolor");
        }
    }

    if (hamburgerCheckbox.checked) {
        companyLogo.style.visibility = "hidden";
    } else {
        companyLogo.style.visibility = "visible";
    }
});
