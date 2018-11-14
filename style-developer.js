window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
  }
});
