const menuButton = document.querySelector('.header__menu-open');
const ulMenu = document.querySelector('.header__menu-ul');
const menuClose = document.querySelector('.header__menu-close');


const handleMenu = () => {
    if(ulMenu.classList.contains('header__menu-ul--active')) {
        ulMenu.classList.remove('header__menu-ul--active');
        menuClose.classList.remove('header__menu-close--active');
        return
    }
    ulMenu.classList.add('header__menu-ul--active');
    menuClose.classList.add('header__menu-close--active');
}

menuButton.addEventListener('click', handleMenu);
menuClose.addEventListener('click', handleMenu);


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

horizontalScroll()