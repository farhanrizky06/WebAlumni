window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor =
      "white";
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

var typewriter = document.getElementById("typewriterText");

backspaceOnce = theStr => {
  prevStr = theStr;
  if (prevStr.length == 0) {
  } else {
    theStr = prevStr.substring(0, prevStr.length - 1);
  }
  return theStr;
};

typeOnce = (theStr, theNewStr) => {
  if (theStr.length == theNewStr.length) {
  } else {
    theStr = theNewStr.substring(0, theStr.length + 1);
  }
  return theStr;
};

deleteAndType = newStr => {
  let isDeleted = false;
  let isDeletedAndTyped = false;
  let theInterval = setInterval(() => {
    if (isDeleted != true) {
      if (typewriter.innerHTML != 0) {
        typewriter.innerHTML = backspaceOnce(typewriter.innerHTML);
      } else {
        isDeleted = true;
      }
    } else {
      if (typewriter.innerHTML.length != newStr.length) {
        typewriter.innerHTML = typeOnce(typewriter.innerHTML, newStr);
      } else {
        clearInterval(theInterval);
      }
    }
  }, 200);
};

if (typewriter == undefined) {
  console.log("error typewriter");
} else {
  if (typewriter.innerHTML == "Alumni") {
    deleteAndType("Friends");
  }
  setInterval(() => {
    if (typewriter.innerHTML == "Alumni") {
      deleteAndType("Friends");
    } else if (typewriter.innerHTML == "Friends") {
      deleteAndType("Families");
    } else if (typewriter.innerHTML == "Families") {
      deleteAndType("Mentors");
    } else if (typewriter.innerHTML == "Mentors") {
      deleteAndType("Alumni");
    }
  }, 3600);
}
