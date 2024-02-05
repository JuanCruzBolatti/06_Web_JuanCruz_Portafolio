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
    if (window.scrollY > 200) {
        logoContainer.classList.add("logo-scrolled");
        if(aboutButton.classList.contains('about-opener-open')) {
            toggleAbout();
        }
    } else {
        logoContainer.classList.remove("logo-scrolled");
    }
    if (window.scrollY > 800) {
        logoDisplay(4)
    }
    // Bottom Navbar Display
    bottomNavbarDisplay();

    if(window.scrollY > (getScrollYOffset(portfolio)) - 400) {
        animationHat01.play();
    } else {
        animationHat01.goToAndStop(0, true);
    }
}

// Logo
var logoContainer = document.querySelector("#logo-pc");
var logos = logoContainer.getElementsByTagName('img');

function logoDisplay(number) {
    for (let i = 0; i < logos.length; i++) {
        logos[i].classList.add("hidden");
    }
    logos[number].classList.remove("hidden");
}

// Toggle Navbar
function toggleNav(navbar) {
    navbar.classList.toggle('displayed');
    if(aboutButton.classList.contains('about-opener-open')) {
        toggleAbout();
    }
}

// Navbar Anchors
function anchorTo(element) {
    scrollTo(document.querySelector(element.getAttribute("href")));
}

// Display: To Top Button & Media Anchors
var toTopButton = document.getElementById("toTopButton");
var media = document.getElementById("media");

function bottomNavbarDisplay() {
    if (window.scrollY > 200) {
        toTopButton.style.display = "block";
        media.style.display = "flex";
    } else {
        toTopButton.style.display = "none";
        media.style.display = "none";
    }
}
// About Opener
var aboutButton = document.querySelector('.about-opener');
var aboutSection = document.querySelector('.about');
function toggleAbout() {
    aboutButton.classList.toggle('about-opener-open');
    aboutSection.classList.toggle('display-none');
}

// Animations
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-home'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animation/animation-home.lottie.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-home-main'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: '/js/animation/animation-home-main.lottie.json'
});
var animationHat01 = bodymovin.loadAnimation({
    container: document.getElementById('animation-hat-01'),
    rederer: 'svg',
    loop: false,
    autoplay: false,
    path: '/js/animation/animation-hat-01.lottie.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-art-01'),
    rederer: 'svg',
    loop: false,
    autoplay: true,
    path: '/js/animation/animation-hat-01.lottie.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-art-02'),
    rederer: 'svg',
    loop: false,
    autoplay: true,
    path: '/js/animation/animation-hat-01.lottie.json'
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('animation-art-03'),
    rederer: 'svg',
    loop: false,
    autoplay: true,
    path: '/js/animation/animation-hat-01.lottie.json'
});

// Tab
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab=>{tab.classList.remove('tab-active')});
        tab.classList.add('tab-active');

        var line = document.querySelector('.tab-line');
        line.style.width = (e.target.offsetWidth - 40) + "px";
        line.style.left = (e.target.offsetLeft + 20) + "px";
        line.style.backgroundColor = window.getComputedStyle(tabs[index], null).getPropertyValue('background-color');

        tabContents.forEach(content => {content.classList.remove('tab-active')});
        tabContents[index].classList.add('tab-active');
    });
});

// Hats
var portfolio = document.querySelector('.portfolio');

// List
function openList(list) {
    const contentList = document.getElementById("content" + list.id);
    if (contentList.style.maxHeight) {
        contentList.style.maxHeight = null;
    } else {
        contentList.style.maxHeight = (contentList.scrollHeight + 25) + "px";
    }
}

// Home Button Position
document.querySelector("#homeToPortfolioButton").onmousemove = e => {
    const bg = document.querySelector("#homeToPortfolioButton");
    const rect = bg.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    
    bg.style.setProperty("--bg-x", `${x}px`);
    bg.style.setProperty("--bg-y", `${y}px`);    
  
}