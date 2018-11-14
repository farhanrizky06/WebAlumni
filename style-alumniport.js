navlink = document.getElementsByClassName("nav-link");

window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.cssText = "color:black !important";
    }
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.cssText = "color:white !important";
    }
  }
});

nav = document.getElementsByTagName("nav")[0];

nav.addEventListener("mouseenter", function() {
  for (let i = 0; i < navlink.length; i++) {
    navlink[i].style.cssText = "color:black !important";
  }
});
nav.addEventListener("mouseleave", function() {
  for (let i = 0; i < navlink.length; i++) {
    navlink[i].style.cssText = "color:white !important";
  }
});
