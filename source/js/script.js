(function() {
  let jsInit = function() {
    let hiddenElements = document.querySelectorAll('[hidden]');

    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].removeAttribute('hidden');
    }
  }

  let nav = document.querySelector('.main-nav');
  let navToggler = nav.querySelector('.main-nav__toggler');
  let navList = nav.querySelector('.main-nav__list');

  let openNav = function() {
    navToggler.classList.toggle('main-nav__toggler--closed');
    navList.classList.toggle('main-nav__list--closed');
  }

  jsInit();
  nav.addEventListener('click', openNav);
}());
