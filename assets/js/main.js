const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const takeRoom = document.querySelector('.header__search-take-room');
const checkOut = document.querySelector('.header__search-check-out');
const customer = document.querySelector('.header__search-customer');
const day = document.querySelector('.header__search-day');
const placeSub = document.querySelector('.header__search-place-sub');
const takeRoomSub = document.querySelector('.header__search-take-room-sub');
const header__search = document.querySelector('.header__search');
const headerSearchItems = document.querySelectorAll('.header__search-item');
const headerSearchCustomer = document.querySelector('.header__search-customer');
const headerSearchCustomerSub = document.querySelector('.header__search-customer-sub');
const headerSearchBtn = document.querySelector('.header__search-btn');
const headerMobile = document.querySelector('.header-mobile');
const headerRightBtn = document.querySelector('.header__right-button');

let modal = document.querySelector('.language-currency-modal');

/*----------------Active search item-------------- */
for (const item of headerSearchItems) {
    item.onclick = function activeSearchItem() {
        const active = document.querySelector('.header__search-item--active');
        if(active != null) {
            active.classList.remove('header__search-item--active');
        }
        const subDisplayed = document.querySelector('.header__search-sub--display');
        if (subDisplayed) {
            subDisplayed.classList.remove('header__search-sub--display');
        }

        if (item.classList.contains('header__search-place')) {
            placeSub.classList.add('header__search-sub--display');
        }

        if (item.classList.contains('header__search-take-room') || item.classList.contains('header__search-check-out')|| (item.classList.contains('header__search-day'))) {
            takeRoomSub.classList.add('header__search-sub--display');
        }

        if (item.classList.contains('header__search-customer')) {
            headerSearchCustomerSub.classList.add('header__search-sub--display');
        }


        header__search.classList.add('header__search--gray');
        item.classList.add('header__search-item--active');

        headerSearchCustomer.classList.add('flex2');
        headerSearchBtn.classList.add('header__search-btn--full');
    }
}


/* -------------------------- changeTab ---------------------- */

function changeTab1() {
    if (header__search.classList.contains('header__search--gray')) {
        header__search.classList.remove('header__search--gray');
    }
    const subDisplayed = document.querySelector('.header__search-sub--display');
    if (subDisplayed) {
        subDisplayed.classList.remove('header__search-sub--display');
    }

    const active = document.querySelector('.header__search-item--active');
    if(active != null) {
        active.classList.remove('header__search-item--active');
    }
    takeRoom.classList.remove('hide');
    checkOut.classList.remove('hide');
    customer.classList.remove('hide');
    day.classList.remove('display-flex');

    const placeSubTab1 = document.querySelector('.header__search-place-sub-tab1');

    if (placeSubTab1.classList.contains('hide')) {
        placeSubTab1.classList.remove('hide'); 
    }

    const placeSubTab2 = document.querySelector('.header__search-place-sub-tab2');
    placeSubTab2.classList.add('hide');

    if (takeRoomSub.classList.contains('header__search-take-room-sub--tab2')) {
        takeRoomSub.classList.remove('header__search-take-room-sub--tab2'); 
    }
}

function changeTab2() {
    if (header__search.classList.contains('header__search--gray')) {
        header__search.classList.remove('header__search--gray');
    }
    const subDisplayed = document.querySelector('.header__search-sub--display');
    if (subDisplayed) {
        subDisplayed.classList.remove('header__search-sub--display');
    }
    const active = document.querySelector('.header__search-item--active');
    if(active != null) {
        active.classList.remove('header__search-item--active');
    }

    takeRoom.classList.add('hide');
    checkOut.classList.add('hide');
    customer.classList.add('hide');
    day.classList.add('display-flex');

    const placeSubTab1 = document.querySelector('.header__search-place-sub-tab1');
    placeSubTab1.classList.add('hide');
    const placeSubTab2 = document.querySelector('.header__search-place-sub-tab2');
    placeSubTab2.classList.remove('hide');

    takeRoomSub.classList.add('header__search-take-room-sub--tab2');
}

if (tab1.checked) {
    changeTab1();
}
tab1.onclick = changeTab1;
tab2.onclick = changeTab2;


/*-----------Take room sub------------- */


const listDay = document.querySelectorAll('.take-room-sub__date__calendar__body .take-room-sub__date__calendar__column:not(.take-room-sub__date__calendar__column--disabled)');
for (const day of listDay) {
    day.onclick = function () {
        const activeDay = document.querySelector('.take-room-sub__date__calendar__column--active');

        const dayItem = day.parentElement.parentElement.parentElement.parentElement;
        const currentMonth = dayItem.querySelector('.take-room-sub__date__navbar-date');
        
        const dayItemOld = (activeDay != null) ? activeDay.parentElement.parentElement.parentElement.parentElement : null;

        if (activeDay) {
            activeDay.classList.remove('take-room-sub__date__calendar__column--active');
        }
        /* ------------Check Day--------- */
        
        const currentTab = document.querySelector('.header__search-item--active');
        const searchItemDay = currentTab.querySelector('.header__search-item-day');
        const searchItemContent = currentTab.querySelector('.header__search-item-content');
        
        const currentParent = day.parentElement;
        const calenderRows = currentParent.parentElement.children;

        day.classList.add('take-room-sub__date__calendar__column--active');
        searchItemContent.classList.add('hide');
        searchItemDay.innerHTML = day.innerHTML +' '+ currentMonth.innerHTML;
        searchItemDay.classList.add('display');
    }
}


/** --------------- customer sub--------------- */


/** ------------------- Add onclick event----------------------- */
/**---------------Minus----------------------------------- */
const minusBtnList = document.querySelectorAll('.header__search-customer-sub__minus');
for (const minusBtn of minusBtnList) {
    minusBtn.onclick = function minus() {
        if (!minusBtn.classList.contains('header__search-customer-sub__button--disabled')) {
            const customerSubItemCurrent = minusBtn.parentElement.parentElement;
            const customerSubItemNum = customerSubItemCurrent.querySelector('.header__search-customer-sub__number');
            const numCurrent = +customerSubItemNum.innerHTML;
            customerSubItemNum.innerHTML = numCurrent - 1;
            if (customerSubItemNum.innerHTML == 0) {
                disabledBtn(minusBtn);
            }
        }
    }
}

/**-------------------Plus------------------ */

const plusBtnList = document.querySelectorAll('.header__search-customer-sub__plus');
for (const plusBtn of plusBtnList) {
    plusBtn.onclick = function plus() {
        const customerSubItemCurrent = plusBtn.parentElement.parentElement;
        const customerSubItemNum = customerSubItemCurrent.querySelector('.header__search-customer-sub__number');
        const customerSubItemMinus = customerSubItemCurrent.querySelector('.header__search-customer-sub__minus.header__search-customer-sub__button--disabled');
        if (customerSubItemMinus) {
            removeDisabledBtn(customerSubItemMinus);
        }
        const numCurrent = +customerSubItemNum.innerHTML;
        customerSubItemNum.innerHTML = numCurrent + 1;
    }
}

/** --------------Disabled Minus-------------- */
const customerSubItemList = document.querySelectorAll('.header__search-customer-sub__item');
for (const customerSubItem of customerSubItemList) {
    const customerSubItemNum = customerSubItem.querySelector('.header__search-customer-sub__number');
    const customerSubItemMinus = customerSubItem.querySelector('.header__search-customer-sub__minus');
    if (+customerSubItemNum.innerHTML == 0) {
        disabledBtn(customerSubItemMinus);
    } 
}


function disabledBtn(minusBtn) {
    minusBtn.classList.add('header__search-customer-sub__button--disabled');
}

function removeDisabledBtn(minusBtn) {
    minusBtn.classList.remove('header__search-customer-sub__button--disabled');
}


/**-----------------------Header fixed---------------------- */
let headerTop = document.querySelector('.header-top');
let headerMainFixed = document.querySelector('.main-header--fixed');
let headerMiddleFixed = document.querySelector('.header__middle-fixed');
let headerMiddleNormal = document.querySelector('.header__middle-normal');
let overlay = document.querySelector('.overlay');

function hideHeaderFixed() {
    headerMiddleFixed.classList.remove('hide');
    headerMiddleNormal.classList.remove('display');
    header__search.classList.remove('display-flex');
    headerMainFixed.style.paddingBottom = '0px';
    if (!modal.classList.contains('display')) {
        overlay.classList.remove('display');
    }
}



headerMiddleFixed.onclick = function() {
    headerMiddleFixed.classList.add('hide');
    headerMiddleNormal.classList.add('display');
    header__search.classList.add('display-flex');
    headerMainFixed.style.paddingBottom = 'calc(var(--padding-bottom) + 90px)';
    overlay.classList.add('display');
}


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
    /*---------------Clear Header search-------------- ------- */
    if (!header__search.contains(e.target)) {
        const active = document.querySelector('.header__search-item--active');
        if(active != null) {
            active.classList.remove('header__search-item--active');
        }
        const subDisplayed = document.querySelector('.header__search-sub--display');
        if (subDisplayed) {
            subDisplayed.classList.remove('header__search-sub--display');
        }

        if (header__search.classList.contains('header__search--gray')) {
            header__search.classList.remove('header__search--gray');
        }

        if (headerSearchCustomer.classList.contains('flex2')) {
            headerSearchCustomer.classList.remove('flex2')
        }
        
        if (headerSearchBtn.classList.contains('header__search-btn--full')) {
            headerSearchBtn.classList.remove('header__search-btn--full');
        }  
    }

    /**-------------------Header Main Fixed--------------- */
    headerMainFixed = document.querySelector('.main-header--fixed');
    if ((headerTop.classList.contains('main-header--fixed'))&&(!headerMainFixed.contains(e.target))) {
        hideHeaderFixed();
    }

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
    item.onclick = function (e) {
         
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

/**----------------Search-mobile------------------- */
const searchMobile = document.querySelector('.search-mobile');
const headerSearchMobile = document.querySelector('.header-mobile');
const searchCloseMobile = document.querySelector('.search-mobile-head-icon');

headerSearchMobile.onclick = function () {
    searchMobile.classList.add('display');
    document.querySelector('body').classList.add('disabled-scroll'); 
}

searchCloseMobile.onclick = function () {
    searchMobile.classList.remove('display');
    document.querySelector('body').classList.remove('disabled-scroll'); 
}



/**----------------scroll----------------- */

window.onscroll = function () {
    if (window.scrollY > 0) {
        headerTop.classList.add('main-header--fixed');
        headerMainFixed = document.querySelector('.main-header--fixed');
        /**-------------Header Mobile--------------- */
        if (!headerMobile.classList.contains('header-mobile--background')) {
            headerMobile.classList.add('header-mobile--background')
        }
    } else {
        if (headerTop.classList.contains('main-header--fixed')) {
            headerTop.classList.remove('main-header--fixed');
            hideHeaderFixed();
        }
        
        /**-------------Header Mobile--------------- */

        if (headerMobile.classList.contains('header-mobile--background')) {
            headerMobile.classList.remove('header-mobile--background')
        }
    }
}