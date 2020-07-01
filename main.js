const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;

function display() {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}

function nextSlide() {
    index ++;
    if(index > slides.length - 1){
        index = 0;
    }
    display();
}

function prevSlide() {
    index --;
    if(index < 0){
        index = slides.length - 1;
    }
    display();
}



prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)