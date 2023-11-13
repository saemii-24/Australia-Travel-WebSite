const header = document.querySelector('header');
$(function () {
    $('.menu-trigger').click(function (event) {
        $(this).toggleClass('active');
        $('#menu_wrap').slideToggle();
        if(header.style.position === 'fixed'){
            header.style.position = 'absolute';
            event.preventDefault();
        }else{
            header.style.position = 'fixed';
        }
    });

    $(".menu_main>ul>li>a").hover(function () {
        if ($(this).hasClass("fixed") === false) {
            $(this).addClass("animate").siblings().removeClass("animate")
        }
    }, function () {
        $(".menu_main>ul>li>a").removeClass("animate")
    })
});
