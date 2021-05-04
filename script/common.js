$(document).ready(function(){
   
    //menu
    $('.nav > ul > li').mouseover(function() {
        $(this).find('.subMenu').stop().slideDown(200);
    });
    $('.nav > ul > li').mouseout(function() {
        $(this).find('.subMenu').stop().slideUp(200);
    });
    
    //img hover
    let current = 0;
    $('.memberList .memberImg').mouseover(function(){
        $(this).find('.memberImg').fadeOut(0);
        $(this).find('.hoverImg').fadeIn(0);
    });
    $('.memberList .memberImg').mouseout(function(){
        $(this).find('.hoverImg').fadeOut(0);
        $(this).find('.memberImg').fadeIn(0);
    });
    
    //play hover
    $('.albuminfo .play, .play_h').mouseover(function(){
         $('.play_h').stop().show(0);
    });
    $('.albuminfo .play, .play_h').mouseout(function(){
        $('.play_h').stop().hide(0);
    });
    
});

