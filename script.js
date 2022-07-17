
//Mobile Navbar and modal functionality
let menuBtn = document.querySelector('.hamburger_menu');
let mobNav = document.querySelector('.nav_mobile_closed');
let modal = document.querySelector(".modal_closed");
let navLinks = document.querySelectorAll(".u-list a")

menuBtn.addEventListener('click', () => {
  mobNav.classList.toggle("nav_mobile")
  modal.classList.toggle("modal")
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobNav.classList.toggle("nav_mobile") 
    modal.classList.toggle("modal")
  })
})

modal.addEventListener('click', () => {
  mobNav.classList.toggle("nav_mobile")
  modal.classList.toggle("modal")
})

