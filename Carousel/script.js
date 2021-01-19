let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n){ 
    slideIndex += n
    showSlides(slideIndex);
}

function currentSlide(n){
    slideIndex = n
    showSlides(n);
}

function showSlides(n){
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length){
        n = 1;
    }

    if(n < 1){
        n = slides.length;
    }

    slideIndex = n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';        
    }


    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');   
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}