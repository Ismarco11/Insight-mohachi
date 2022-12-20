let slideIndex = 0;
let i;
let slides = document.getElementsByClassName("myslide");
let dots = document.getElementsByClassName("dot");
showSlides();

function showSlides() {

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active1";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let quoteIndex = 0;
let j;
let quotes = document.getElementsByClassName("myquote");
let dot = document.getElementsByClassName("dot2");
showQuotes();

function showQuotes() {

    for (j = 0; j < quotes.length; j++) {
        quotes[j].style.display = "none";
    }
    quoteIndex++;
    if (quoteIndex > quotes.length) { quoteIndex = 1 }
    for (j = 0; j < dot.length; j++) {
        dot[j].className = dot[j].className.replace("active1", "");
    }
    quotes[quoteIndex - 1].style.display = "block";
    dot[quoteIndex - 1].className += " active1";
    setTimeout(showQuotes, 2000); // Change image every 2 seconds
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } 
    }
}

window.addEventListener("scroll", reveal);