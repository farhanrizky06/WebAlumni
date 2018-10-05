window.addEventListener("scroll", function() {
  if (this.pageYOffset > 100) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "white";
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "";
  }
});


var sectionIntro = document.getElementsByClassName("section")[0];
var intro = document.getElementById("box2");

var rect;
var y;

window.addEventListener("scroll",function(){
	rect = sectionIntro.getBoundingClientRect();
	intro.style.transition = "2s"
	y = rect.top;
	
	if(y >= 250){
		intro.style.opacity = "0";
		intro.style.transform = "translate3D(0,300px,0)"
	}
	else{
		intro.style.opacity = "1";
		intro.style.transform = "translate3D(0,0,0)"
	}
})


