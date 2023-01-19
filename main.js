const menuIconDivBars = document.getElementById("bars");
const menuIconBars = document.getElementById("nav-bars-icon");
const menuIconAngleDownL = document.getElementById("angle-down-l");

const menuIconDivsSocialMediaMenu = document.getElementById("social-media-menu");
const menuIconComositeMenu = document.getElementById("composite-menu-icon");
const menuIconAngleDownR = document.getElementById("angle-down-r");

const mobileLeftNav = document.getElementById("mobile-drop-down-left");
const mobileRightNav = document.getElementById("mobile-drop-down-right");
const topCover = document.getElementById("top-cover");
const bottomCover = document.getElementById("bottom-cover");

const projectsLink = document.getElementById("projects-link");
const projectsElement = document.getElementById("projects");
const writingLink = document.getElementById("writing-link");
const writingElement = document.getElementById("writing");
const bioLink = document.getElementById("bio-link");
const bioElement = document.getElementById("bio");

const heightOfDocElement = document.documentElement.scrollHeight;
const heightHero = document.getElementById("hero-image-div").scrollHeight;
const heightNavBar = document.getElementById("navbar").scrollHeight;
const heightLeftDropDownMenu = document.getElementById("mobile-drop-down-left").scrollHeight;
const heightRightDropDownMenu = document.getElementById("mobile-drop-down-right").scrollHeight;

function resestMobile() {
    // console.log(innerWidth);
    if (window.innerWidth > 850) {
        mobileLeftNav.style.display = "none";
        mobileRightNav.style.display = "none";

        menuIconDivBars.style.display = "none";
        menuIconDivsSocialMediaMenu.style.display = "none";

        menuIconAngleDownL.style.display = "none";
        menuIconAngleDownR.style.display = "none";

        topCover.style.display = "none";
        bottomCover.style.display = "none";
    } else {
        menuIconDivBars.style.display = "flex";
        menuIconDivsSocialMediaMenu.style.display = "flex";

        mobileLeftNav.style.display = "none";
        mobileRightNav.style.display = "none";
        menuIconBars.style.display = "inline";
        menuIconComositeMenu.style.display = "inline";
        menuIconAngleDownL.style.display = "none";
        menuIconAngleDownR.style.display = "none";
        topCover.style.display = "none";
        bottomCover.style.display = "none";
    }
}
setTimeout(() => {
    window.onresize = resestMobile;
  }, "100")
  
menuIconDivBars.addEventListener('click', function () {
    if (mobileLeftNav.style.display == "none") {
        mobileLeftNav.style.display = "flex";
        menuIconComositeMenu.style.display = "none";
        menuIconAngleDownL.style.display = "inline";
        menuIconBars.style.display = "none";
        topCover.style.display = "block";
        bottomCover.style.display = "block";
        bottomCover.style.top = "" + (heightHero + heightNavBar + 300) + "px";
        bottomCover.style.height = "" + (heightOfDocElement - heightHero - heightNavBar - 300) + "px";
    } else {
        mobileLeftNav.style.display = "none";
        menuIconComositeMenu.style.display = "inline";
        menuIconAngleDownL.style.display = "none";
        menuIconBars.style.display = "inline";
        topCover.style.display = "none";
        bottomCover.style.display = "none";
    }
})
menuIconDivsSocialMediaMenu.addEventListener('click', function () {
    if (mobileRightNav.style.display == "none") {
        mobileRightNav.style.display = "flex";
        menuIconComositeMenu.style.display = "none";
        menuIconAngleDownR.style.display = "inline";
        menuIconBars.style.display = "none";
        topCover.style.display = "block";
        bottomCover.style.display = "block";
        bottomCover.style.top = "" + (heightHero + heightNavBar + 400) + "px";
        bottomCover.style.height = "" + (heightOfDocElement - heightHero - heightNavBar - 400) + "px";
    } else {
        mobileRightNav.style.display = "none";
        menuIconComositeMenu.style.display = "inline";
        menuIconAngleDownR.style.display = "none";
        menuIconBars.style.display = "inline";
        topCover.style.display = "none";
        bottomCover.style.display = "none";
    }
})
topCover.addEventListener('click', function () {
    mobileLeftNav.style.display = "none";
    mobileRightNav.style.display = "none";
    menuIconDivsSocialMediaMenu.style.display = "flex";
    menuIconAngleDownL.style.display = "none";
    menuIconAngleDownR.style.display = "none";
    menuIconBars.style.display = "inline";
    topCover.style.display = "none";
    bottomCover.style.display = "none";
    menuIconComositeMenu.style.display = "inline";
})
bottomCover.addEventListener('click', function () {
    mobileLeftNav.style.display = "none";
    mobileRightNav.style.display = "none";
    menuIconDivsSocialMediaMenu.style.display = "flex";
    menuIconAngleDownL.style.display = "none";
    menuIconAngleDownR.style.display = "none";
    menuIconBars.style.display = "inline";
    topCover.style.display = "none";
    bottomCover.style.display = "none";
    menuIconComositeMenu.style.display = "inline";
})

projectsLink.addEventListener('click', function () {
    projectsElement.scrollIntoView();
    mobileLeftNav.style.display = "none";
    menuIconDivsSocialMediaMenu.style.display = "flex";
    menuIconAngleDownL.style.display = "none";
    menuIconBars.style.display = "inline";
    topCover.style.display = "none";
    bottomCover.style.display = "none";
})
writingLink.addEventListener('click', function () {
    writingElement.scrollIntoView();
    mobileLeftNav.style.display = "none";
    menuIconDivsSocialMediaMenu.style.display = "flex";
    menuIconAngleDownL.style.display = "none";
    menuIconBars.style.display = "inline";
    topCover.style.display = "none";
    bottomCover.style.display = "none";
})
bioLink.addEventListener('click', function () {
    bioElement.scrollIntoView();
    mobileLeftNav.style.display = "none";
    menuIconDivsSocialMediaMenu.style.display = "flex";
    menuIconAngleDownL.style.display = "none";
    menuIconBars.style.display = "inline";
    topCover.style.display = "none";
    bottomCover.style.display = "none";
})

// aboutNav.addEventListener('click', function () {
//     if (columnNav.style.top == "-1000px") {
//         columnNav.style.top = "var(--height-of-navbar)";
//         columnNav.style.pointerEvents = 'none';
//         menuIconDiv.style.backgroundColor = "var(--background)";
//         menuIcon.style.color = "var(--primary-color)";
//     } else {
//         columnNav.style.top = "-1000px";
//         columnNav.style.pointerEvents = 'auto';
//         menuIconDiv.style.backgroundColor = "var(--primary-color)";
//         menuIcon.style.color = "var(--background)";
//     }
// })
// bowlsNav.addEventListener('click', function () {
//     if (columnNav.style.top == "var(--height-of-navbar)") {
//         columnNav.style.top = "-1000px";
//         columnNav.style.pointerEvents = 'none';
//         menuIconDiv.style.backgroundColor = "var(--background)";
//         menuIcon.style.color = "var(--primary-color)";
//     } else {
//         columnNav.style.top = "var(--height-of-navbar)";
//         columnNav.style.pointerEvents = 'auto';
//         menuIconDiv.style.backgroundColor = "var(--primary-color)";
//         menuIcon.style.color = "var(--background)";
//     }
// })
// lidsNav.addEventListener('click', function () {
//     if (columnNav.style.top == "var(--height-of-navbar)") {
//         columnNav.style.top = "-1000px";
//         columnNav.style.pointerEvents = 'none';
//         menuIconDiv.style.backgroundColor = "var(--background)";
//         menuIcon.style.color = "var(--primary-color)";
//     } else {
//         columnNav.style.top = "var(--height-of-navbar)";
//         columnNav.style.pointerEvents = 'auto';
//         menuIconDiv.style.backgroundColor = "var(--primary-color)";
//         menuIcon.style.color = "var(--background)";
//     }
// })
// otherNav.addEventListener('click', function () {
//     if (columnNav.style.top == "var(--height-of-navbar)") {
//         columnNav.style.top = "-1000px";
//         columnNav.style.pointerEvents = 'none';
//         menuIconDiv.style.backgroundColor = "var(--background)";
//         menuIcon.style.color = "var(--primary-color)";
//     } else {
//         columnNav.style.top = "var(--height-of-navbar)";
//         columnNav.style.pointerEvents = 'auto';
//         menuIconDiv.style.backgroundColor = "var(--primary-color)";
//         menuIcon.style.color = "var(--background)";
//     }
// })


