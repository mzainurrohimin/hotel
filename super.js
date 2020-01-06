function smoot(a) {
    $('.link' + a).click(function () {
        data = $('#nav' + a).offset().top;
        $('html').animate({ scrollTop: data }, 1000);
    })
};
$(document).ready(function () {
    smoot(1); smoot(2); smoot(3); smoot(4);
})

