
/**-----------------------Header fixed---------------------- */
const headerRightBtn = document.querySelector('.header__right-button');
const headerMobile = document.querySelector('.header-mobile');
let headerTop = document.querySelector('.header-top');
let headerMainFixed = document.querySelector('.main-header--fixed');
let headerMiddleFixed = document.querySelector('.header__middle-fixed');
let headerMiddleNormal = document.querySelector('.header__middle-normal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.language-currency-modal');



/**------------------User Sub------------------ */
let userSub = document.querySelector('.header__right-user-sub');
let user = document.querySelector('.header__right-user');
user.onclick = function () {
    let userSub = document.querySelector('.header__right-user-sub');
    if (userSub.classList.contains('display')) {
        userSub.classList.remove('display');
    } else {
        userSub.classList.add('display');
    }
}


function notTarget(e) {

    /**-------------------Header Main Fixed--------------- */
    
    let userSub = document.querySelector('.header__right-user-sub');
    let user = document.querySelector('.header__right-user');

    if (userSub.classList.contains('display') && (!userSub.contains(e.target)) && (!user.contains(e.target))) {
        userSub.classList.remove('display');
    }

    /**------------------Modal Language - currency--------------- */
    
    
}

document.onclick = notTarget;



/*---------------Modal language- currency--------------------------*/

/**-----------------Display Modal  + Overlay------------------ */
// let modal = document.querySelector('.language-currency-modal');
headerRightBtn.onclick = function () {
    modal.classList.add('display');
    overlay.classList.add('display');
    document.querySelector('body').classList.add('disabled-scroll');
}
/**------------------Header-------------------- */
let navbarModalItems = document.querySelectorAll('.modal-navbar-item');
let modalLanguageBody = document.querySelector('.language-modal-body');
let modalCurrencyBody = document.querySelector('.currency-modal-body');
for (const item of navbarModalItems) {
    item.onclick = function () {
        if (!item.classList.contains('modal-navbar-item--active')) {
            let navbarItemActive = document.querySelector('.modal-navbar-item--active');
            navbarItemActive.classList.remove('modal-navbar-item--active');
            item.classList.add('modal-navbar-item--active');

            if (item.classList.contains('modal-navbar-language')) {
                modalLanguageBody.classList.remove('hide'); 
                modalCurrencyBody.classList.remove('display');
            } else if (item.classList.contains('modal-navbar-currency')) {
                modalLanguageBody.classList.add('hide');
                modalCurrencyBody.classList.add('display');
            }
        }
    }
}

/**---------------Footer--------------------- */
let footerBottomItems = document.querySelectorAll('.footer__bottom__item');
let modalClose = document.querySelector('.modal-close');
let modalNavbar = document.querySelector('.modal-navbar');
for (const item of footerBottomItems) {
    item.onclick = function () {
        modal.classList.add('display');
        overlay.classList.add('z-11');
        overlay.classList.add('display');
        document.querySelector('body').classList.add('disabled-scroll');
        modalNavbar.classList.add('hide');
        if (item.classList.contains('footer__bottom__languages')) {
            modalCurrencyBody = document.querySelector('.currency-modal-body');
            if (modalCurrencyBody.classList.contains('display')) {
                modalCurrencyBody.classList.remove('display')
            }
            if (modalLanguageBody.classList.contains('hide')) {
                modalLanguageBody.classList.remove('hide');
            }
        } else if (item.classList.contains('footer__bottom__currency')) {
            modalLanguageBody = document.querySelector('.language-modal-body');
            modalLanguageBody.classList.add('hide');
            modalCurrencyBody.classList.add('display');
        }
    }
}

function hideModal() {
    if (modal.classList.contains('display')) {
        modal.classList.remove('display');
        overlay.classList.remove('display');
        document.querySelector('body').classList.remove('disabled-scroll');
    }
    if (modalLanguageBody.classList.contains('hide')) {
        modalLanguageBody.classList.remove('hide');
    }

    if (modalNavbar.classList.contains('hide')) {
        modalNavbar.classList.remove('hide');
    }

    if (modalCurrencyBody.classList.contains('display')) {
        modalCurrencyBody.classList.remove('display');
    }

    if (!navbarModalItems[0].classList.contains('modal-navbar-item--active')) {
        document.querySelector('.modal-navbar-item--active').classList.remove('modal-navbar-item--active');
        navbarModalItems[0].classList.add('modal-navbar-item--active');
    }
}


modalClose.onclick = hideModal;



/**-------------------form-login----------------------- */
const headerRightUserLinks = document.querySelectorAll('.header__right-user-sub-link');
const loginResForm = document.querySelector('.login-register-form');
const formClose = document.querySelector('.login-register-form__head__icon');
for (const item of headerRightUserLinks) {
    item.onclick = function () {
        overlay.classList.add('z-11');
        overlay.classList.add('display');
        loginResForm.classList.add('display');
        document.querySelector('body').classList.add('disabled-scroll');
        userSub.classList.remove('display');
    }
}

function hideForm() {
    if (loginResForm.classList.contains('display')) {
        overlay.classList.remove('z-11');
        overlay.classList.remove('display');
        loginResForm.classList.remove('display');
        document.querySelector('body').classList.remove('disabled-scroll');
    }
}

formClose.onclick = hideForm;

overlay.onclick = function () {
    hideModal();
    hideForm();
}

/**------------------Navbar Mobile----------------------- */

let navbarMobileItems = document.querySelectorAll('.navbar-mobile-item');

function clearDisplay(element) {
    if (element.classList.contains('display')) {
        element.classList.remove('display');
    }

    if (document.querySelector('body').classList.contains('disabled-scroll')) {
        document.querySelector('body').classList.remove('disabled-scroll');
    }
}

for (const item of navbarMobileItems) {
    item.onclick = function () {
        if(!item.classList.contains('navbar-mobile-item--active')) {
            const itemActive = document.querySelector('.navbar-mobile-item--active');
            itemActive.classList.remove('navbar-mobile-item--active');
            item.classList.add('navbar-mobile-item--active');
            clearDisplay(loginResForm);
            if (item.classList.contains('navbar-mobile-item-login')) {
                loginResForm.classList.add('display');
                document.querySelector('body').classList.add('disabled-scroll'); 
            } else if (item.classList.contains('navbar-mobile-item-wishlist')) {
                window.location.href = "wishlists.html";
            } else if (item.classList.contains('navbar-mobile-item-index')) {
                window.location.href = "index.html";
            }
        }
    }
}

/**----------------Wishlist------------------- */






/**----------------scroll----------------- */

window.onscroll = function () {
    if (window.scrollY > 0) {
        headerTop.classList.add('main-header--fixed');
        headerMainFixed = document.querySelector('.main-header--fixed');
        /**-------------Header Mobile--------------- */
    }  
}