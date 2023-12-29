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

// Logo
var logos = document.querySelector(".logo-container").getElementsByTagName('img');

function logoDisplay(number) {
    for (let i = 0; i < logos.length; i++) {
        logos[i].classList.add("hidden");
    }
    logos[number].classList.remove("hidden");
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        logoDisplay(0)
    }
    if (window.scrollY > 800) {
        logoDisplay(4)
    }
}

// Toggle Navbar
function toggleNav(navbar) {
    navbar.classList.toggle('displayed');

}

// Navbar Anchors
function anchorTo(element) {
    scrollTo(document.querySelector(element.getAttribute("href")));
}
