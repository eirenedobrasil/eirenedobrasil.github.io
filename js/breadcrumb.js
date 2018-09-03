var scrollPosition = window.scrollY;
var showBc = document.getElementsByClassName('breadcrumb')[0];

window.addEventListener('scroll', function() {

  scrollPosition = window.scrollY;

  if (scrollPosition >= 600) {
    showBc.classList.add('is-fixed');
  } else {
    showBc.classList.remove('is-fixed');
  }
});

//var scrollPosition = window.scrollY;
//var logoContainer = document.getElementsByClassName('js-logo');

//window.addEventListener('scroll', function() {

//    scrollPosition = window.scrollY;

//    if (scrollPosition >= 30) {
//        logoContainer.classList.add('c-logo--scrolled');
//    } else {
//        logoContainer.classList.remove('c-logo--scrolled');
//    }

//});