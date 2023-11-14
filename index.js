$(document).ready(function() {
   
    $('.navbar-toggler').click(function() {
       
        $('.navbar-collapse').toggleClass('show');
    });

    $('.navbar-nav a').click(function() {
        $('.navbar-collapse').removeClass('show');
    });
});