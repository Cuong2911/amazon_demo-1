const modal = 
document.querySelector('.modal');
const modalDeliver = 
document.querySelector('.modal-deliver');
const navDeliverLocation = 
document.querySelector('.nav-deliver-location');
const modalOverlay =
document.querySelector('.modal-overlay');
function showModalDeliver() {
    modal.classList.add('display-flex');
    modalDeliver.classList.add('display-block');
}
function hiddenModalDeliver() {
    modal.classList.remove('display-flex');
    modalDeliver.classList.remove('display-block')
}
navDeliverLocation.addEventListener('click',showModalDeliver);
modalOverlay.addEventListener('click',hiddenModalDeliver);

// modal menu
const modalMenu =
document.querySelector('.modal-menu');
const navMenu =
document.querySelector('.nav-menu');
function showModalMenu() {
    modal.classList.add('display-flex');
    modalMenu.classList.add('display-block');
}
function hiddenModalMenu() {
    modal.classList.remove('display-flex');
    modalMenu.classList.remove('display-block')
}
navMenu.addEventListener('click',showModalMenu);
modalOverlay.addEventListener('click',hiddenModalMenu);


// input focus

const navbarWithSearch =
document.querySelector('.navbar-with-search');
const navSearchHistory =
document.querySelector('.nav-search-history');
const navbarSearchInput =
document.querySelector('.navbar-search-input');
function searchFocus() {
    navbarWithSearch.style.boxShadow = 'rgb(236 154 31) 0px 0px 2px 3px';
    navFlyoutOverlay.classList.add('display-block');
    navSearchHistory.classList.add('display-block');
};
function searchBlur() {
    navbarWithSearch.style.boxShadow = 'unset';
    navFlyoutOverlay.classList.remove('display-block');
    navSearchHistory.classList.remove('display-block');
};
navbarSearchInput.addEventListener('focus', searchFocus)
navbarSearchInput.addEventListener('blur', searchBlur)

// -------------
const navFlyoutOverlay = 
document.querySelector('.navbar-flyout-overlay');

const navFlyoutChangLanguge =
document.querySelector('.nav-flyout__change-languge');
const navFlyoutAccount =
document.querySelector('.nav-flyout__account');

function showNavFlyoutChangLanguge() {
    navFlyoutChangLanguge.classList.add('display-block');
    navFlyoutOverlay.classList.add('display-block');
};
function hideNavFlyoutChangLanguge() {
    navFlyoutChangLanguge.classList.remove('display-block');
    navFlyoutOverlay.classList.remove('display-block');
}
function showNavFlyoutAccount() {
    navFlyoutAccount.classList.add('display-block');
    navFlyoutOverlay.classList.add('display-block');
};
function hideNavFlyoutAccount() {
    navFlyoutAccount.classList.remove('display-block');
    navFlyoutOverlay.classList.remove('display-block');
}

const navChangeLang = 
document.querySelector('.nav-change-language');
const navAccount = 
document.querySelector('.nav-account');

navChangeLang.addEventListener('mouseover', showNavFlyoutChangLanguge);
navAccount.addEventListener('mouseover', showNavFlyoutAccount);

const navflyoutWrapChangeLangs =
document.querySelectorAll('.nav-flyout-wrap__change-language .nav-flyout-wrap_js');

for(var navflyoutWrapChangeLang of navflyoutWrapChangeLangs) {
    navflyoutWrapChangeLang.addEventListener('mouseover', hideNavFlyoutChangLanguge);
}
const navflyoutWrapAccounts =
document.querySelectorAll('.nav-flyout-wrap__account .nav-flyout-wrap_js');

for(var navflyoutWrapAccount of navflyoutWrapAccounts) {
    navflyoutWrapAccount.addEventListener('mouseover', hideNavFlyoutAccount);
}




// slide show
var counter = 1;
setInterval(function() {
    document.getElementById('slide-radio-' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 20000);

const sliderBtnLeft = 
document.querySelector('.slider-btn-left');
const sliderBtnRight = 
document.querySelector('.slider-btn-right');

function slideTransLeft() {
    counter--;
    if(counter < 1){
        counter = 5;
    }
    document.getElementById('slide-radio-' + counter).checked = true;
}
function slideTransRight() {
    counter++;
    if(counter > 5){
        counter = 1;
    }
    document.getElementById('slide-radio-' + counter).checked = true;
}

sliderBtnLeft.addEventListener('click',slideTransLeft);
sliderBtnRight.addEventListener('click',slideTransRight);

// scroll
const hScroll = document.querySelectorAll('.page-card__slider-container');

const btnCardLeft =
document.querySelectorAll('.btn-page-card-left');
const btnCardRight =
document.querySelectorAll('.btn-page-card-right');
const sCont = document.querySelectorAll('.page-card__slider-list');

let currentScrollPosition = 0;

function scrollHorizontally(val, i) {
    currentScrollPosition += (val * (hScroll[i].offsetWidth - 50));

    if(currentScrollPosition > 0) {
        currentScrollPosition = 0;
    };
    if(currentScrollPosition < (-sCont[i].offsetWidth + hScroll[i].offsetWidth)) {
        currentScrollPosition = (-sCont[i].offsetWidth + hScroll[i].offsetWidth);
    };
    if(currentScrollPosition === 0) {
        btnCardLeft[i].classList.add('btn-page-card__disabled');
        btnCardRight[i].classList.remove('btn-page-card__disabled');
    } else
    if(currentScrollPosition === (-sCont[i].offsetWidth + hScroll[i].offsetWidth)) {
        btnCardRight[i].classList.add('btn-page-card__disabled');
        btnCardLeft[i].classList.remove('btn-page-card__disabled');
    } else {
        btnCardRight[i].classList.remove('btn-page-card__disabled');
        btnCardLeft[i].classList.remove('btn-page-card__disabled');

    };
    sCont[i].style.left = currentScrollPosition + "px";
};

