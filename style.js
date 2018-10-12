window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "black";
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
  }
});

var heart = document.getElementsByClassName("fa-heart")[0];
var sectionIntro = document.getElementsByClassName("section")[0];
var intro = document.getElementById("box2");

var rect;
var y;

window.addEventListener("scroll", function() {
  rect = sectionIntro.getBoundingClientRect();
  intro.style.transition = "2s";
  y = rect.top;

  if (y >= 250) {
    intro.style.opacity = "0";
    intro.style.transform = "translate3D(0,300px,0)";
  } else {
    intro.style.opacity = "1";
    intro.style.transform = "translate3D(0,0,0)";
  }
});

function landingPageTextAnimation(x) {
  x.style.opacity = 1;
}

var landingPageText = document.getElementsByClassName("theTextBox")[0];
if (landingPageText == undefined) {
  console.log("nil");
} else {
  setTimeout(function() {
    landingPageTextAnimation(landingPageText);
  }, 500);
}

var typewriter = document.getElementById("typewriter");

if (typewriter == undefined) {
  console.log("error typewriter");
} else {
  setInterval(() => {
    if (typewriter.innerHTML == "Alumni") {
      typewriter.innerHTML = "Friends";
    } else if (typewriter.innerHTML == "Friends") {
      typewriter.innerHTML = "Menthors";
    } else if (typewriter.innerHTML == "Menthors") {
      typewriter.innerHTML = "Family";
    } else if (typewriter.innerHTML == "Family") {
      typewriter.innerHTML = "Alumni";
    }
  }, 2500);
}
