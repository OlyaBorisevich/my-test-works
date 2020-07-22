$(function () {

    let menu = $("#menu"),
        menuLinks = menu.find("a");
    
    menuLinks.on("click", function(e) {
        e.preventDefault();
        
        menuLinks.removeClass("active");
        
        $(this).toggleClass("active");
    });  
});
