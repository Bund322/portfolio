$(function() {
    $('.toggles button').click(function() {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    $('#show-all').click(function(){
        $('.post').show(500);
    });
});

let contactLogo = document.querySelector('.contact__right_fill');

let logoImg = document.querySelector('.logo__img');

console.log(contactLogo); 
$('.change-theme').click(() => {
    const theme = document.documentElement;
    if(theme.classList.contains('light')) {
        theme.classList.remove('dark', 'light');
        theme.classList.add('dark');
        contactLogo.setAttribute("src","./img/contact/contact-logo-dark.png");
        logoImg.setAttribute("src","./img/header/logo-dark.svg");
    }
    else {
        theme.classList.remove('dark', 'light');
        theme.classList.add('light');
        contactLogo.setAttribute("src","./img/contact/contact-logo.png");
        logoImg.setAttribute("src","./img/header/logo.svg");
    }
    
});