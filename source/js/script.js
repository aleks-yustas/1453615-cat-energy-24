(function() {
  let jsInit = function () {
    let hiddenElements = document.querySelectorAll("[hidden]");

    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].removeAttribute("hidden");
    }
  }

  let nav = document.querySelector(".main-nav");
  let navToggler = nav.querySelector(".main-nav__toggler");
  let navList = nav.querySelector(".main-nav__list");

  let navInit = function () {
    nav.classList.remove("main-nav--no-js");

    if (!navToggler.classList.contains("main-nav__toggler--closed")) {
      navToggler.classList.add("main-nav__toggler--closed");
    }

    if (!navList.classList.contains("main-nav__list--closed")) {
      navList.classList.add("main-nav__list--closed");
    }
  };

  let openNav = function () {
    navToggler.classList.toggle("main-nav__toggler--closed");
    navList.classList.toggle("main-nav__list--closed");
  }

  jsInit();
  navInit();
  nav.addEventListener("click", openNav);
}());
