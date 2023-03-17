let body = document.querySelector("body");
let navAdressLink = document.querySelector("#nav__adress-link");
let hamburger = document.querySelector("#hamburger");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
function navShow() {
   let startHeight = window.pageYOffset;
   console.log(startHeight);
   window.onscroll = function() {
      let realHeight = window.pageYOffset;
      if (realHeight == 0 || startHeight > realHeight) {
         nav.style.top = "0px";
         if (realHeight != 0) {
            nav.classList.add("nav_white");   
            navLinks.classList.add("nav__links-color-white");
            navContacts.classList.add("nav__contacts-color-white");
         }
         else {
            nav.classList.remove("nav_white");
            navLinks.classList.remove("nav__links-color-white");
            navContacts.classList.remove("nav__contacts-color-white");
         }
      }
      else {
         nav.style.top = "-113px";
      }
      startHeight = realHeight;
   }
}
navShow();


hamburger.onclick = function() {
   hamburger.classList.toggle("hamburger_active");
   navLinks.classList.toggle("nav__links_active");
   navContacts.classList.toggle("nav__contacts_active");
   body.classList.toggle("scroll_none");
}
navLinks.onclick = function() {
   hamburger.classList.remove("hamburger_active")
   navLinks.classList.remove("nav__links_active");
   navContacts.classList.remove("nav__contacts_active");
   body.classList.remove("scroll_none");
}
navContacts.onclick = function() {
   hamburger.classList.remove("hamburger_active")
   navLinks.classList.remove("nav__links_active");
   navContacts.classList.remove("nav__contacts_active");
   body.classList.remove("scroll_none");
}