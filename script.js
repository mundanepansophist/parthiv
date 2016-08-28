//$(document).ready(function () {
//    $(window).resize(function () {
//        if (window.innerWidth <= 1355 / 2) {
//            $(".profile").css("flex-direction", "column");
//        }
//    });
//});

function imgControl() {}
$(document).ready(function () {
    $(window).resize(function () {
        var width = $(window).width();
        if (width >= 519 && width <= 677.5) {
            //$(".profile").css("min-height","750px");
            $(".profile").css("flex-direction", "column");
            //$("#dp").css("height","70px");
            //$("#dp").css("margin-top","90px");  
            $("#profile_pic").css("height", "200px");
            $("#profile_pic").css("width", "100%");
            $("#basic_info").css("width", "100%");
            $("#extras").css("width", "100%");
            $("#basic_info").css("height", "300px");
            $("#extras").css("height", "250px");
            $("#profile_pic").css("border-bottom", "1px solid #1abc9c");
            $("#profile_pic").css("border-right", "0px");
            $("#basic_info").css("border-bottom", "1px solid #1abc9c");
            $("#basic_info").css("border-right", "0px");
            $("#howit").css("font-size", "12px");
        }
        else if (width > 677.5) { //$("#dp").css("height","120px");
            //$("#dp").css("margin-top","65px"); 
            //$(".profile").css("min-height","250px");
            $(".profile").css("flex-direction", "row");
            $("#profile_pic").css("height", "250px");
            $("#profile_pic").css("width", "25%");
            $("#basic_info").css("width", "35%");
            $("#extras").css("width", "40%");
            $("#basic_info").css("height", "250px");
            $("#extras").css("height", "250px");
            $("#profile_pic").css("border-bottom", "0px");
            $("#profile_pic").css("border-right", "1px solid #1abc9c");
            $("#basic_info").css("border-bottom", "0px ");
            $("#basic_info").css("border-right", "1px solid #1abc9c");
            $("#howit").css("font-size", "inherit");
        }
        else if (width < 519) {
            $("#howit").css("font-size", "12px");
            //$(".profile").css("min-height","750px");
            $(".profile").css("flex-direction", "column");
            //$("#dp").css("height","70px");
            //$("#dp").css("margin-top","90px");   
            $("#profile_pic").css("height", "200px");
            $("#profile_pic").css("width", "100%");
            $("#basic_info").css("width", "100%");
            $("#extras").css("width", "100%");
            $("#basic_info").css("height", "300px");
            $("#extras").css("height", "250px");
            $("#profile_pic").css("border-bottom", "1px solid #1abc9c");
            $("#profile_pic").css("border-right", "0px");
            $("#basic_info").css("border-bottom", "1px solid #1abc9c");
            $("#basic_info").css("border-right", "0px");
        }
    });
    $('#profile').click(function () {
        $(this).addClass('prof-a-sel');
        $("#prof-a").css({
            'color': '#1abc9c'
        });
        $('#cv').removeClass('prof-a-sel');
        $('#cv-a').css({
            'color': 'rgba(33,33,33,0.8)'
        });
    });
    $('#cv').click(function () {
        $(this).addClass('prof-a-sel');
        $('#cv-a').css({
            'color': '#1abc9c'
        });
        $('#profile').removeClass('prof-a-sel');
        $('#prof-a').css({
            'color': 'rgba(33,33,33,0.8)'
        });
    });
});