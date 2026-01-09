// toggle class active
const navbarList = document.querySelector(".navbar-list");
// ketika  hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarList.classList.toggle("active");
};

//klik di luar sidebar utk hilang nav nya

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});

//acoordion
function toggleAccordion(index) {
  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion, i) => {
    const body = accordion.querySelector(".accordion-body");
    const button = accordion.querySelector(".toggle-btn");
    if (i === index) {
      // Toggle active state
      const isActive = body.classList.contains("active");
      body.classList.toggle("active", !isActive);
      button.textContent = isActive ? "+" : "-";
    } else {
      // Close other accordions
      body.classList.remove("active");
      button.textContent = "+";
    }
  });
}

// darkmode
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});