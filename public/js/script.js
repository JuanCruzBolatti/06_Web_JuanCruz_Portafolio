// Cursor
const cursor = document.querySelector(".cursor");
const allButtons = document.querySelectorAll("button");
const allAnchors = document.querySelectorAll("a");
let cursorPositionX = 0;
let cursorPositionY = 0;
let cursorDelay = 10;

document.addEventListener("mousemove", (e) => {
    cursorPositionX = e.pageX + 8;
    cursorPositionY = e.pageY + 8 - window.scrollY;
});

document.addEventListener("mouseenter", () => {
    cursor.style.opacity = 1;
});

document.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
});

function updateCursorPosition() {
    let dx = (cursorPositionX - parseInt(cursor.style.left || 0, 10)) / 10;
    let dy = (cursorPositionY - parseInt(cursor.style.top || 0, 10)) / 10;

    cursor.style.left = parseInt(cursor.style.left || 0, 10) + dx + "px";
    cursor.style.top = parseInt(cursor.style.top || 0, 10) + dy + "px";

    setTimeout(updateCursorPosition, cursorDelay);
}

updateCursorPosition();

const cursorButtonHover = document.querySelector(".cursor-button-hover");

allButtons.forEach(element => {
    element.addEventListener("mouseenter", e => {
        if(!element.classList.contains('tab-btn')) {
            cursorButtonHover.textContent = e.target.getAttribute("value");
            cursorButtonHover.style.opacity = 1;
            cursor.style.opacity = 0;
        } else {
            cursor.classList.add("cursor-hover-white");
        }
    });

    element.addEventListener("mousemove", e => {
        cursorButtonHover.style.top = e.clientY + 'px';
        cursorButtonHover.style.left = e.clientX + 'px';
    });
});

allButtons.forEach(element => {
    element.addEventListener("mouseleave", () => {
        if(!element.classList.contains('tab-btn')) {
            cursorButtonHover.style.opacity = 0;
            cursor.style.opacity = 1;
        } else {
            cursor.classList.remove("cursor-hover-white");
        }
       
    });
});

allAnchors.forEach(element => {
    element.addEventListener("mouseenter", () => {
        if(element.id == "portfolioAnchor") {
            cursor.classList.add("cursor-hover-white");
        } else {
            cursor.classList.add("cursor-hover");
        }
    });
    
});

allAnchors.forEach(element => {
    element.addEventListener("mouseleave", () => {
        if(element.id == "portfolioAnchor") {
            cursor.classList.remove("cursor-hover-white");
        } else {
            cursor.classList.remove("cursor-hover");
        }
    });
});

// Scroll
function getScrollYOffset(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.pageY || document.documentElement.scrollTop;
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
    if (window.scrollY > getScrollYOffset(portfolio) - 200) {
        logoDisplay(1);
    }
    if (window.scrollY > getScrollYOffset(knowledge) - 200) {
        logoDisplay(2);
    }
    if (window.scrollY > getScrollYOffset(art) - 200) {
        logoDisplay(3);
    }
    if (window.scrollY > getScrollYOffset(contact) - 200) {
        logoDisplay(4);
    }
    // Bottom Navbar Display
    bottomNavbarDisplay();

    if(window.scrollY > (getScrollYOffset(portfolio)) - 400) {
        animationHat01.play();
    } else {
        animationHat01.goToAndStop(0, true);
    }

    // About Mobile 
    if((window.innerWidth < 768) && (window.scrollY > (getScrollYOffset(aboutButton)/2 - 25) )) {
        aboutSection.style.setProperty("--about-top", "52vh");
    } else {
        aboutSection.style.setProperty("--about-top", "5vh");
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
    path: '/js/animation/animation-home-main-01.lottie.json'
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
       
        if(document.documentElement.clientWidth < 769) {
            tabContents[index - 5].classList.add('tab-active');
        } else {
            tabContents[index].classList.add('tab-active');
        }
    });
});

// 
const artButtons = document.querySelectorAll("#button-opener-art");
const artContents = document.querySelectorAll("#art-card-content");

artButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        artButtons.forEach(button => {button.classList.remove('art-button-active')});
        button.classList.add('art-button-active');

        artContents.forEach(content => {content.classList.remove('art-card-active')});
        artContents[index].classList.add('art-card-active');
    });
});

// Hats
var portfolio = document.querySelector('.portfolio');
var knowledge = document.querySelector('.knowledge');
var art = document.querySelector('.art');
var contact = document.querySelector('.contact');

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

document.querySelector(".about").onmousemove = e => {
    const bg = document.querySelector(".about");
    const rect = bg.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    
    bg.style.setProperty("--bg-x", `${x}px`);
    bg.style.setProperty("--bg-y", `${y}px`);    
}

