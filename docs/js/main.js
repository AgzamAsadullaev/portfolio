$(document).ready(function () {

    const menuToggle = document.querySelector('.toggle-menu');
    const navMenu = document.querySelector('.navigation-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('.body');
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('active');
    });


    const navLink = $('.navigation-menu .nav-menu__link');
    navLink.click(function () {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('active');
    });


    //From placeholder

    const formInputs = document.querySelectorAll('.form-field');
    for (let item of formInputs) {
        const thisPlaceholder = item.nextElementSibling;

        item.addEventListener('focus', function () {
            thisPlaceholder.classList.add('active');
        });

        item.addEventListener('blur', function () {
            if (item.value == '') {
                thisPlaceholder.classList.remove('active');
            }

        });
    }

    // Подключение точек пагинации справа page-nav


    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });









})