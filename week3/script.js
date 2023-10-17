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

/* REPORT
"The challenge was ensuring that the images are changed in the correct order and 
that the JavaScript functions worked properly. To overcome this challenge, I 
made sure the JavaScript conditions for the functions were logically correct. 
I approached this by creating two functions: one named 'movePrev' and the other
named 'moveNext.'

In the 'movePrev' function, which is called when the 'Prev' button is 
clicked, the 'current' variable, responsible for tracking the current image,
is decreased or decremented to display the previous image.
In the 'moveNext' function, called when the 'Next' button is clicked, 
increases the 'current' count, causing the next image to be displayed.

In cases where the 1st image is displayed and the user clicks 'Prev,' it goes
to the 8th image and displays that. Similarly, if the user clicks 'Next' while
on the 8th image, it returns to the 1st image. This is achieved 
through the 'if' and 'else if' conditions.

The 'DisplaySlide()' function stores all the images with the class name 
'mySlides' in the 'slides' variable. The 'for loop' then iterates through all 
the elements with the 'mySlides' class, setting their display style property 
to 'none' to hide the slides. Finally, the last line of the function displays 
the slide according to the 'current' variable by changing the display style 
property to "block".

In essence, I hide the slides using 'DisplaySlide()', and in the last line, 
I display the slide based on the value of the 'current' variable.

*/