const menuButton = document.querySelector('.header__menu-open');
const ulMenu = document.querySelector('.header__menu-ul');
const menuClose = document.querySelector('.header__menu-close');
const dropbtn = document.querySelector('.dropbtn');
const optionsDropDownMenuLanguage = document.querySelectorAll('.dropdown__options');
const searchButton = document.querySelector('.header__search-icon');
const boxSearch = document.querySelector('.header__box-search');
const body = document.querySelector('body');

const handleMenu = () => {
    if(ulMenu.classList.contains('header__menu-ul--active')) {
        ulMenu.classList.remove('header__menu-ul--active');
        menuClose.classList.remove('header__menu-close--active');
        body.classList.remove('body__fixed');
        return
    }
    ulMenu.classList.add('header__menu-ul--active');
    menuClose.classList.add('header__menu-close--active');
    body.classList.add('body__fixed');
}

const horizontalScroll = () => {
    const wrapper = document.querySelector('.cases__slider-wrapper');
    const controls = document.querySelectorAll('.cases__icon');
    const sliderBoxWidth = document.querySelector('.cases__slider-box').offsetWidth;
    controls.forEach(control => {
        control.addEventListener('click', () => {
            const direction = control.classList.contains('cases__icon--left') ? -1 : 1;
            wrapper.scrollLeft += (direction * sliderBoxWidth);
        })
    })
}

const dropDownMenuLanguage = () => {
    document.getElementById("dropDownLanguage").classList.toggle("show");
}

const handleDropDown = (event) => {
    if (event.target.matches('.dropbtn')) return
    const dropdowns = document.querySelectorAll(".dropdown-content");
    console.log(dropdowns)
    dropdowns.forEach(dropdown => {
        console.log(dropdown)
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    })
}

optionsDropDownMenuLanguage.forEach(option => {
    option.addEventListener('click', (event) => {
        dropbtn.innerHTML = event.target.innerHTML;
        handleDropDown(event);
    });
})

handleSearch = () => {
    const handleClass = 'header__box-search--active'
    if(boxSearch.classList.contains(handleClass)) {
        boxSearch.classList.remove(handleClass);
        return
    }
    boxSearch.classList.add(handleClass);
}

menuButton.addEventListener('click', handleMenu);
menuClose.addEventListener('click', handleMenu);
horizontalScroll()
dropbtn.addEventListener('click', handleDropDown);
searchButton.addEventListener('click', handleSearch);