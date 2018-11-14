navlink = document.getElementsByClassName("nav-link");

window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.cssText =
        "color:black !important;text-shadow:0 0 0 #000000;";
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
  if (window.pageYOffset < 100) {
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.cssText =
        "color:black !important;text-shadow:0 0 0 #000000;";
    }
  }
});

nav.addEventListener("mouseleave", function() {
  if (window.pageYOffset < 100) {
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].style.cssText = "color:white !important";
    }
  }
});
