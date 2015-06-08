$(document).ready(function() {
    alert($(".boardCell img").length + ' figures!');

    // скрывание фигуры при наведении мыши
    $(".boardCell img").mouseenter(function() {
        $(this).fadeTo('fast', 0);
        //alert($("img").attr("src"));
    });

    // удаление фигуры по клику
    $(".boardCell img").mousedown(function() {
    	var figure = $(this);
    	$(this).remove();
    });

    //$(".boardCell").mousedown(function() {
    //	var figure = $(this);
    //	$(this).remove();
    //});
    
    $(".boardCell img").mouseleave(function() {
        $(this).fadeTo('fast', 1);
        //alert($("img").attr("src"));
    });

});