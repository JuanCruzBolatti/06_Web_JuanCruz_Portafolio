// Scroll
function getScrollYOffset(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}

function scrollTo(element) {
    document.body.scroll({
        top: getScrollYOffset(element)
    });
    document.documentElement.scroll({
        top: getScrollYOffset(element)
    });
}

function scrollToTop() {
    document.body.scroll({
        top: 0
    });
    document.documentElement.scroll({
        top: 0
    });
}

window.onscroll = () => {
    // Logo
    if (window.scrollY > 0) {
        logoDisplay(0)
    }
    if (window.scrollY > 800) {
        logoDisplay(4)
    }
    // To top
    toTopDisplay();
}

// Logo
var logos = document.querySelector(".logo-container").getElementsByTagName('img');

function logoDisplay(number) {
    for (let i = 0; i < logos.length; i++) {
        logos[i].classList.add("hidden");
    }
    logos[number].classList.remove("hidden");
}

// Toggle Navbar
function toggleNav(navbar) {
    navbar.classList.toggle('displayed');

}

// Navbar Anchors
function anchorTo(element) {
    scrollTo(document.querySelector(element.getAttribute("href")));
}

// Display: To Top Button & Media Anchors
var toTopButton = document.getElementById("toTopButton");
var media = document.getElementById("media");

function toTopDisplay() {
    if(window.scrollY > 200) {
        toTopButton.style.display = "block";
        media.style.display = "flex";
    } else {
        toTopButton.style.display = "none";
        media.style.display = "none";
    }
}


