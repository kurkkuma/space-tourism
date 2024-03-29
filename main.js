// show and hide mobile menu
const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const mobileMenu = document.querySelector(".mobile-menu");

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

// explore button
const exploreBtn = document.querySelector(".explore");
const destinationSection = document.querySelector(".destination-container");

exploreBtn.addEventListener("click", () => {
  destinationSection.scrollIntoView({ behavior: "smooth" });
});

//navbar novigation
function handleNavigation(navItems) {
  navItems.forEach((item) => {
    const sectionName =
      item.textContent
        .trim()
        .replace(/^\d+\s*/, "")
        .toLowerCase() + "-container";

    const section = document.querySelector(`.${sectionName}`);

    item.addEventListener("click", () => {
      navItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });
      item.classList.add("active");

      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}

const desktopNavigation = document
  .querySelector(".menu-container")
  .querySelectorAll("li");

const mobileNavigation = document
  .querySelector(".mobile-menu")
  .querySelectorAll("li");

handleNavigation(desktopNavigation);
handleNavigation(mobileNavigation);

const sections = document.querySelectorAll(".main-container > div");

// Function to handle navigation based on scroll position
function handleScrollNavigation(entries) {
  entries.forEach((entry) => {
    const sectionName = entry.target.classList[0];
    const navItem = document.getElementById(`${sectionName}-nav`);

    if (navItem) {
      desktopNavigation.forEach((item) => {
        item.classList.remove("active");
      });
      navItem.classList.add("active");
    }
  });
}

const observer = new IntersectionObserver(handleScrollNavigation, {
  threshold: 0.5,
});

const reversedSections = Array.from(sections).reverse();

reversedSections.forEach((section) => {
  observer.observe(section);
});

// destination planet nav
const planets = destinationSection.querySelectorAll("li");

planets.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedItem = event.target;

    planets.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });

    item.classList.add("active");

    document.getElementById("planet-image").src = clickedItem.dataset.image;
    document.getElementById("planet-name").innerHTML = clickedItem.dataset.name;
    document.getElementById("planet-info").innerHTML = clickedItem.dataset.info;
    document.getElementById("planet-distance").innerHTML =
      clickedItem.dataset.distance;
    document.getElementById("planet-time").innerHTML = clickedItem.dataset.time;
  });
});

// crew
const crewDots = document.getElementById("crew-dots").querySelectorAll("li");

crewDots.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedItem = event.target;
    crewDots.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    item.classList.add("active");

    document.getElementById("person-image").src = clickedItem.dataset.image;
    document.getElementById("person-speciality").innerHTML =
      clickedItem.dataset.speciality;
    document.getElementById("person-name").innerHTML = clickedItem.dataset.name;
    document.getElementById("person-info").innerHTML = clickedItem.dataset.info;
  });
});

// technology
const technologyDots = document
  .getElementById("technology-dots")
  .querySelectorAll("li");

technologyDots.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedItem = event.target;

    technologyDots.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    item.classList.add("active");

    document.getElementById("technology-title").innerHTML =
      clickedItem.dataset.title;
    document.getElementById("technology-info").innerHTML =
      clickedItem.dataset.info;
    document.getElementById("technology-mobile-image").srcset =
      clickedItem.dataset.mobileimage;
    document.getElementById("technology-desktop-image").srcset =
      clickedItem.dataset.desktopimage;
    document.getElementById("technology-default-image").src =
      clickedItem.dataset.desktopimage;
  });
});
