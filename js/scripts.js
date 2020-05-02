$().button('toggle')
$('.alert').alert()
$(function(){
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        };
    });
});

//this opens and closes the reserve button//
$(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").collapse("show")
    });
    $(".close").click(function(){
        $("#reserveModal").collapse("hide")
    });
});

//this opens and closes the login button//
$(function(){
    $("#loginModal").click(function(){
        $(".modal-body").collapse("show")
    });
    $("#loginButton").click(function(){
        $("#loginModal").collapse("hide")
    });
});
