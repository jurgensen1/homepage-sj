var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery("#navbar").outerHeight();

jQuery(window).on("scroll", function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var currentScroll = jQuery(this).scrollTop();
    var menuShow = (jQuery("#column-nav").css("top") != "-1000px");
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - currentScroll) <= delta)
        return; 
    // If they scrolled down and are past the navbar, add class .nav-up.
    if (lastScrollTop < currentScroll){
        // Scroll Down
        if (!menuShow){
            jQuery("#header").addClass("hide-nav");
            jQuery("#header").removeClass("view-nav");
        }
    } else {
        // Scroll Up
        if((lastScrollTop > currentScroll)) {
            jQuery("#header").removeClass("hide-nav");
            jQuery("#header").addClass("view-nav");
        }
    }
    lastScrollTop = currentScroll;
}
jQuery(".button").addClass("button-styles");