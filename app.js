const date = document.getElementById("date");
date.textContent = new Date().getFullYear();

const linksContainer = document.querySelector(".links-container");
const ulLinks = document.querySelector(".links");
const btn = document.querySelector(".nav-toggle");

btn.addEventListener("click", function () {
  const ulLinksHeight = ulLinks.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${ulLinksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navBarHeight = navBar.getBoundingClientRect().height;
  if (scrollHeight > navBarHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const btns = document.querySelectorAll(".scroll-link");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    const navBarHeight = navBar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNavBar = navBar.classList.contains("fixed-nav");
    if (!fixedNavBar) {
      position -= navBarHeight;
    }
    if (navBarHeight > 82) {
      position += linksContainerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position - navBarHeight,
    });
    linksContainer.style.height = 0;
  });
});

// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

// const linksContainer = document.querySelector(".links-container");
// const links = document.querySelector(".links");
// const btn = document.querySelector(".nav-toggle");

// btn.addEventListener("click", function () {
//   const linksContainerHeight = linksContainer.getBoundingClientRect().height;
//   const linksHeight = links.getBoundingClientRect().height;
//   if (linksContainerHeight === 0) {
//     linksContainer.style.height = `${linksHeight}px`;
//   } else {
//     linksContainer.style.height = 0;
//   }
// });

// const navbar = document.getElementById("nav");
// const topLinkBtn = document.querySelector(".top-link");

// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   const navbarHeight = navbar.getBoundingClientRect().height;
//   if (scrollHeight > navbarHeight) {
//     navbar.classList.add("fixed-nav");
//   } else {
//     navbar.classList.remove("fixed-nav");
//   }
//   if (scrollHeight > 500) {
//     topLinkBtn.classList.add("show-link");
//   } else {
//     topLinkBtn.classList.remove("show-link");
//   }
// });

// const btns = document.querySelectorAll(".scroll-link");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     const navbarHeight = navbar.getBoundingClientRect().height;
//     const linksContainerHeight = linksContainer.getBoundingClientRect().height;
//     let position = element.offsetTop - navbarHeight;
//     const navFixed = navbar.classList.contains("fixed-nav");
//     if (!navFixed) {
//       position = position - navbarHeight;
//     }
//     if (navbarHeight > 82) {
//       position = position + linksContainerHeight;
//     }
//     scrollTo({
//       left: 0,
//       top: position,
//     });
//     linksContainer.style.height = 0;
//   });
// });
