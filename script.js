
//Mobile Navbar functionality
let menuBtn = document.querySelector('.hamburger_menu');
let mobNav = document.querySelector('.nav_mobile_closed');

menuBtn.addEventListener('click', () => {
  mobNav.classList.toggle("nav_mobile")
})