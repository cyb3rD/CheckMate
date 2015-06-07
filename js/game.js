$(document).ready(function() {
    alert($(".boardCell img").length + ' figures!');

    $(".boardCell img").mouseenter(function() {
        $(this).fadeTo('fast', 0);
        //alert($("img").attr("src"));
    });
    
    $(".boardCell img").mouseleave(function() {
        $(this).fadeTo('fast', 1);
        //alert($("img").attr("src"));
    });

});