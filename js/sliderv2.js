$('.tile-slider').each(function () {              // For every slider
    var $this = $(this);                    // Current slider
    var $group = $this.find('.horizontal-scroll-window-wrapper'); // Get the slide-group (container)
    var $slides = $this.find('.project-tile');       // Create jQuery object to hold all slides
    var $scollWindow = $this.find('.horizontal-scroll-window');       // Create jQuery object to hold all slides
    var buttonArray = [];                    // Create array to hold navigation buttons
    var currentIndex = 0;                     // Hold index number of the current slide
    var timeout;                          // Sets gap between auto-sliding

    $group.scrollLeft = 0;
    $.each($slides, function (index) {
        // Create a button element for the button
        var $button = $('<div class="slide-btn"></div>');
        $.each(buttonArray, function (i) {
            if (i === currentIndex) {
                buttonArray[i].addClass('active');
            }
        });

        $button.on('click', function () { // Create event handler for the button
            // move(index); 
            // $slides.eq(index)[0].scrollIntoView({ behavior: "smooth" , block: "center", inline: "center"});
            // $slides.eq(index)[0].focus();
            // $slides.eq(index)[0].scroll({
            //     top: 0,
            //     left: 0,
            //     behavior: 'smooth'
            // });
            // window.scroll()
            // $button.addClass('active');
            // $.each(buttonArray, function (j) {
            //     if (j !== index) {
            //         buttonArray[j].removeClass('active');
            //     }
            // });
        }).appendTo('.tile-buttons');   // Add to the buttons holder
        buttonArray.push($button);       // Add it to the button array
    });
    let width = $group.width();
    // console.log(width);

    // advance();                          // Script is set up, advance() to move it
    $scollWindow.on("scroll", function (event) { 
        let tmp = currentIndex;
        // currentIndex = 2;
        // console.log($slides.length);
        console.log($scollWindow.scrollLeft());
        let tileWidth = Math.round(width / $slides.length);
        console.log(tileWidth);
        for (let i = 0; i < ($slides.length); i++) {
            if ($scollWindow.scrollLeft() < (tileWidth + (tileWidth * i))) {
                currentIndex = i;
                break;
            }
        }
        // window width / length of array
        // if scrollX is <<<<< etc.
        //      set the scoll to the respective element. 
        // update current index
        buttonArray[tmp].removeClass('active');
        buttonArray[currentIndex].addClass('active');
    });

});