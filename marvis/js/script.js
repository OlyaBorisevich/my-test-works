$(function () {

    let btn = $(".btn");
    
    btn.on("click", function(e) {
        e.preventDefault();
        
        btn.removeClass("active");
        
        $(this).toggleClass("active");
    });  
});