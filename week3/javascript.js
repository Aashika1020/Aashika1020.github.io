let prevBtn = document.getElementsByClassName("prev");
let nextBtn = document.getElementsByClassName("next");
var current = 1; //Current Slideshow Image Index
/*var slideshow_img = document.querySelectorAll("slideshow-img img");*/
var images= ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg'];


function movePrev(n){ //1
    current = current- n; // 1-(1) =0 , current=0
    if (current==0) { //0<=8
        current=8;
        DisplaySlide(current);
      } 
      else if(current <= images.length){
        DisplaySlide(current);
      }
   
    
}
function moveNext(n){ //1
    if(current<images.length){ //1<=(8) -> true
        current += n;//current= 1+1 -> current=2
        DisplaySlide(current);
    }
    else if(current>=images.length){ //if current=9
        current=1;
        DisplaySlide(current);
    }
    
}

function DisplaySlide(n) {
   // let i;
    let slides = document.querySelectorAll(".mySlides");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[current - 1].style.display = "block";
}

DisplaySlide(current); /* Display the initial image*/

/*function DisplaySlide(n) {
 // slideshow_img.setAttribute('src', 'images/' + images[current]);
 let i;
      let slides = document.getElementsByClassName("mySlides");

      if (n > slides.length) {
        current = 1;
      }

      if (n < 1) {
        current = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        current[i].style.display = "none";
      }

      slides[current - 1].style.display = "block";


}*/




/*function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }*/







/*function setSlide(){
    return slideshow_img.setAttribute('src', 'images/'+images[current]);
}

setSlide();*/ // Display the initial image

/*var currentSlide = 1;

function navigate(direction) {

    if (direction === "prev") {
        if (currentSlide > 1) {
            currentSlide--;
        }
    } else if (direction === "next") {
        if (currentSlide < 8) { 
            currentSlide++;
        }
    }
    slideShow();
}

function slideShow() {
    var slides = document.querySelectorAll(".mySlides");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}*/
