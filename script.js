const hamButton = document.querySelector('.ham');
const getStartedHam = document.querySelector('.hamgs');
const hamFeatures = document.querySelector('.hamfeatures');
const hamProduct = document.querySelector('.product');
const hamFooter = document.querySelector('.footer');
const page = document.querySelector('.shadow');



function hideHam() {
    const root = document.documentElement;
    root.style.setProperty('--topp', '-900%');
    document.removeEventListener('click', insideHam);
    page.classList.remove('dark')
}



function showHam(event) {
    const root = document.documentElement;
    root.style.setProperty('--topp', '0%');
    document.addEventListener('click', insideHam);
    event.stopPropagation();
    page.classList.add('dark')
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