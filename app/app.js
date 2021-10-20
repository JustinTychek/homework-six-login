function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");

  //takes you to the home page if the url is empty
  if (pageID == "") {
    navToPage("home");
  } else {
    navToPage(pageID);
  }
}

//creating the hamburger menu
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  links.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  links.classList.remove("active");
}

//function that takes you to the page based on the pageID
function navToPage(pageName) {
  MODEL.getPageContent(pageName);
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();

  //use when developing to take your directly to the page you want to work on
  //   navToPage("contact");
});
