let prevBtn = document.getElementsByClassName("prev");
let nextBtn = document.getElementsByClassName("next");
var current = 1; //Current Slideshow Image Index
var images= ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg', 'images/7.jpg', 'images/8.jpg'];


function movePrev(n){ //1
    current = current- n; // 1-(1) =0 , current=0
    if (current<1) { //0<=8
        current=1;
        DisplaySlide(current); //takes care of the edge case
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
        current=8;
        DisplaySlide(current); //takes care of the edge case
    }
    
}

function DisplaySlide(n) {
   
    let slides = document.querySelectorAll(".mySlides");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[current - 1].style.display = "block"; //displays the correct image
    
}

DisplaySlide(current); /* Display the initial image*/

/*Functions for Login page*/


function validateUsername(){
    var username= document.getElementById("username").value;
    var userErr= document.getElementById("user-err");
    if(username == ""){ //if username is empty
        userErr.innerHTML = "Username Cannot Be Empty";
        userErr.style.color = "#8b0000";
    }
    else if (username.trim() === ""){ //if username has spaces
        userErr.innerHTML = "Username Cannot have spaces";
        userErr.style.color = "#8b0000";
    }
    else if(!username == ""){//if username is of the correct form
        userErr.innerHTML = "Username Correct ";
        userErr.style.color = "#006400";
    }

}

function validateEmail()
{
    
    var email= document.getElementById("email").value;
    var text= document.getElementById("email-err");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(!email.match(pattern)){ //if email doesnt match the correct form
        text.innerHTML = "Please Enter Valid Email Address";
        text.style.color = "#8b0000";
        emailBor.style.bordercolor = "#006400";
    }
    else{//if email matches the correct form
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#006400";
       
    }
    if(email == ""){//if username is empty
        text.innerHTML = " ";
        text.style.color = "#00ff00";
    }    
}

function validatePassword(){
    var password= document.getElementById("password").value;
    var passErr= document.getElementById("pass-err");

    if(password == ""){//if password is empty
        passErr.innerHTML=" Password Cannot Be Empty";
        passErr.style.color = "#8b0000";
    }
    else if(password.length < 8){//if password is of less characters
        passErr.innerHTML=" Password cannot be less than 8 characters";
        passErr.style.color = "#8b0000";
    }
    else if(password.length >= 8){//if password is of the correct form
        passErr.innerHTML="Password is Correct";
        passErr.style.color = "#006400";
    }

}

function validateConfirmPassword(){
    var password= document.getElementById("password").value;
    var confirmPass= document.getElementById("confirmPass").value;
    var conPassErr= document.getElementById("conPass-err");

    if(password === confirmPass){//if the confirm password field matches the password
        conPassErr.innerHTML = "Password matched!";
        conPassErr.style.color = "#006400";
    }
    if(confirmPass == ""){//if confirm password field is left empty
        conPassErr.innerHTML=" Password Cannot Be Empty";
        conPassErr.style.color = "#8b0000";
    }
    else if(password != confirmPass){// if password is not matched 
        conPassErr.innerHTML = "Password are not matched";
        conPassErr.style.color = "#8b0000";
    }
    
}

//to validate the form
 
function validateForm() {
    var username = document.getElementById("username").value;  //variable declarations
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmedPassword = document.getElementById("confirmPass").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //if all the conditions below are met the form submits
    if ((!username == "") && email.match(pattern) && (password.length >= 8) && (password === confirmedPassword ) ) {  
        return true; 
    }

    else {
        return false;  //if any condition is not met, the form doesnt submit
    }
}


    

    
    
    


