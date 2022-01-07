const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');

const prvBtn = document.querySelector('#prv');
const nextBtn = document.querySelector('#next');

let counter = 1;
let size = slide[0].clientWidth;

slide[1].classList.add('active');

slider.style.transform = 'translate(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function () {
    if (counter >= slide.length - 1) return;
    slider.style.transition = "1s ease-in-out";
    counter++;
    slider.style.transform = 'translate(' + (-size * counter) + 'px)';
    function animation() {
        slide.forEach((slid) => {
            slid.classList.remove('active');
        });
        slide[counter].classList.add('active');
    }
    animation();

});
prvBtn.addEventListener('click', function () {
    if (counter <= 0) return;
    slider.style.transition = "1s ease-in-out";
    counter--;
    slider.style.transform = 'translate(' + (-size * counter) + 'px)';
    function animation() {
        slide.forEach((slid) => {
            slid.classList.remove('active');
        });
        slide[counter].classList.add('active');
    }
    animation();

});

slider.addEventListener('transitionend', () => {

    if (slide[counter].id === 'lastColon') {
        slider.style.transition = "none";
        counter = slide.length - 2;
        slider.style.transform = 'translate(' + (-size * counter) + 'px)';
        slide[5].classList.add('active');
    }
    if (slide[counter].id === 'firstColon') {
        slider.style.transition = "none";
        counter = slide.length - counter;
        slider.style.transform = 'translate(' + (-size * counter) + 'px)';
        slide[1].classList.add('active');
    }

});
setInterval(function () {
    slider.style.transition = "1s ease-in-out";
    counter++;
    slider.style.transform = 'translate(' + (-size * counter) + 'px)';
    //animation of slider
    function animation() {
        slide.forEach((slid) => {
            slid.classList.remove('active');
        });
        slide[counter].classList.add('active');
    }
    animation();
}, 8000);