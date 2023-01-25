// var currentIndex = 0;  

$('.tile-slider').each(function () {              // For every slider
    var $this = $(this);                    // Current slider
    var $group = $this.find('.horizontal-scroll-window-wrapper'); // Get the slide-group (container)
    var $slides = $this.find('.project-tile');       // Create jQuery object to hold all slides
    var $scollWindow = $this.find('.horizontal-scroll-window');       // Create jQuery object to hold all slides
    var $slideNumber = $this.find('.slide-number-text');       // Create jQuery object to hold all slides
    var $buttonArray = [];                    // Create array to hold navigation buttons
    var currentIndex = 0;                     // Hold index number of the current slide
    var timeout;                          // Sets gap between auto-sliding
    window.addEventListener("load", function () {
        $scollWindow.scrollLeft(0);
        $slideNumber.text(1 + "/" + $slides.length);
    });
    
    $.each($slides, function (index) {
        // Create a button element for the button
        var $button = $('<div class="slide-btn"></div>');
        $.each($buttonArray, function (i) {
            if (i === currentIndex) {
                $buttonArray[i].addClass('active');
            }
        });

        $button.appendTo($this.find('.tile-buttons'));   // Add to the buttons holder
        $buttonArray.push($button);       // Add it to the button array
    });
    let width = $group.width();
    // console.log(width);

    // advance();                          // Script is set up, advance() to move it
    $scollWindow.on("scroll", function (event) { 
        let tmp = currentIndex;
        let tileWidth = Math.round(width / $slides.length);
        for (let i = 0; i < ($slides.length); i++) {
            if ($scollWindow.scrollLeft() < (Math.round(tileWidth / 2) + (tileWidth * i))) {
                currentIndex = i;
                $slideNumber.text((i+1) + "/" + $slides.length);
                break;
            }
        }
        $buttonArray[tmp].removeClass('active');
        $buttonArray[currentIndex].addClass('active');

    });
    
});