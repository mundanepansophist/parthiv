$(document).ready(function () {
    $(window).resize(function () {
        if (window.innerWidth <= 1355 / 2) {
            $(".profile").css("flex-direction", "column");
        }
    });
    $('#profile').click(function () {
        $(this).addClass('prof-a-sel');
        $("#prof-a").css({
            'color': '#1abc9c'
        });
        $('#cv').removeClass('prof-a-sel');
        $("#cv-a").css({
            'color': 'black'
        });
    });
    $('#cv').click(function () {
        $(this).addClass('prof-a-sel');
        $('#cv-a').css({
            'color': '#1abc9c'
        });
        $('#profile').removeClass('prof-a-sel');
        $("#prof-a").css({
            'color': 'black'
        });
    });
});