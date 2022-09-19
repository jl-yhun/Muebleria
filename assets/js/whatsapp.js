$(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
        $('#float').removeClass('float');
        $('#float').addClass('float-over');

    } else {
        $('#float').removeClass('float-over');
        $('#float').addClass('float');
    }
});