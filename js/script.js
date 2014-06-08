$(function() {
	/*Main slider*/
    $(".slideshow").find(".item:gt(0)").hide();

    setInterval(function() { 
      $('.slideshow').find(".item:first")
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('.slideshow');
    },  6000);

});