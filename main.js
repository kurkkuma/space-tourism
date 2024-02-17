const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const mobileMenu = document.querySelector(".mobile-menu");

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

openBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});
