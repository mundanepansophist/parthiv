$(document).ready(function(){

   $( window ).resize(function() {
    if(window.innerWidth <= 1355/2){
        $(".profile").css("flex-direction","column");
    }
});

});