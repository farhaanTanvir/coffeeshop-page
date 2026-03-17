const hamButton = document.querySelector('.ham');
const getStartedHam = document.querySelector('.hamgs');
const hamFeatures = document.querySelector('.hamfeatures');
const hamProduct = document.querySelector('.product');
const hamFooter = document.querySelector('.footer');

function hideHam() {
    const root = document.documentElement;
    root.style.setProperty('--topp', '-500%');
    document.removeEventListener('click', insideHam);
}



function showHam(event) {
    const root = document.documentElement;
    root.style.setProperty('--topp', '0%');
    document.addEventListener('click', insideHam);
    event.stopPropagation()
}

function insideHam(event) {
    hideHam();
    if (event.target.classList.contains("hamm")) {

    } else {
        event.preventDefault();
    }
};


hamButton.addEventListener('click', showHam);