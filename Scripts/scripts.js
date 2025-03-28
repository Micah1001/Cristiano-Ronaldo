const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
navMenu.classList.toggle('visible');
});

window.addEventListener('load', () => {
const preloader = document.getElementById('preloader');
preloader.classList.add('fade-out');
});

let slideIndex = [1, 1, 1, 1, 
                  1, 1, 1, 1, 
                  1, 1, 1, 1, 
                  1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", 
               "mySlides5", "mySlides6", "mySlides7", "mySlides8", 
               "mySlides9", "mySlides10", "mySlides11","mySlides12", 
               "mySlides13", "mySlides14", "mySlides15", "mySlides16"];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let slides = document.querySelectorAll(`.${slideId[no]}`);
    let dotsContainer = document.querySelector(`.dots-container-${no}`); 

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex[no] = 1; }
    else if (n < 1) { slideIndex[no] = slides.length; }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex[no] - 1].style.display = "block";

    if (dotsContainer) {
        let dots = dotsContainer.getElementsByClassName("dot");
        for (let dot of dots) {
            dot.classList.remove("active");
        }
        dots[slideIndex[no] - 1].classList.add("active");
    }
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
}
