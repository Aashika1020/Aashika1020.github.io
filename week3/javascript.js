let prevBtn = document.getElementsByClassName("prevBtn");
let nextBtn = document.getElementsByClassName("nextBtn");
var current = 0; //Current Slideshow Image Index
var slideshow_img = document.querySelector("slideshow-img");
var images= ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];


prevBtn.onlick() = function(){
    if(current<=0)
        current--;
        return setSlide();
}
nextBtn.onlick() = function(){
    current++;
    return setSlide();
}

function setSlide(){
    return slideshow_img.setAttribute('src', 'images/'+images[current]);
}
