function navShow() {
   let startHeight = window.pageYOffset;
   console.log(startHeight);
   window.onscroll = function() {
      let realHeight = window.pageYOffset;
      console.log(realHeight);
      if (realHeight == 0 || startHeight > realHeight) {
         nav.style.top = "0px";
         if (realHeight != 0) {
            nav.classList.add("nav_white");           
         }
         else {
            nav.classList.remove("nav_white");
         }
      }
      else {
         nav.style.top = "-113px";
      }
      startHeight = realHeight;
   }
}
navShow();