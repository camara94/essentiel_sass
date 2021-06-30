$(document).ready(function(){
    $('#hamburger').click(function(){
        $('#mainNav ul').stop(true, true).slideToggle(300);
        $('#mainNav #hamburger i').toggleClass('fa-bars fa-times');
    });
});