const hamButton = document.querySelector('.ham');
const getStartedHam = document.querySelector('.hamgs');
const hamFeatures = document.querySelector('.hamfeatures');
const hamProduct = document.querySelector('.product');
const hamFooter = document.querySelector('.footer');
const filter = document.querySelector('.dark-filter');
const header = document.querySelector('#header');



function hideHam() {
    const root = document.documentElement;
    root.style.setProperty('--topp', '-900%');
    document.removeEventListener('click', insideHam);
    filter.classList.remove('filter-active');
    header.classList.remove('header-active');
}



function showHam(event) {
    const root = document.documentElement;
    root.style.setProperty('--topp', '0%');
    document.addEventListener('click', insideHam);
    event.stopPropagation();
    filter.classList.add('filter-active');
    header.classList.add('header-active');
}

function insideHam(event) {
    hideHam();
    if (event.target.classList.contains("hamm")) {

    } else {
        event.preventDefault();
    }
};


hamButton.addEventListener('click', showHam);


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1000) {
        document.querySelector('.backtop').classList.add('backtopshow');
    } else {
        document.querySelector('.backtop').classList.remove('backtopshow');
    }
});