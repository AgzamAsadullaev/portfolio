$(document).ready(function () {

    const menuToggle = document.querySelector('.toggle-menu');
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');

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