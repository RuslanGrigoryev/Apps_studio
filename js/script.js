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

    /*Slide punkts on page how_it_works_2*/

    var $items = $('.punkt-list__item'),
        $links = $items.find('.punkt-list__link'),
        $texts = $items.find('.punkt-list__item--inner');

    $links.on('click', function(e) {
    	e.preventDefault();
        var $this = $(this),
            $text = $this.parent().next(),
            $parent = $this.parent('li');
    	$texts.not($text).slideUp();
    	$text.stop(true, false).slideToggle();
        $items.not($parent).removeClass('punkt-list__item--inner--active');
        $parent.toggleClass('punkt-list__item--inner--active');
    });


    /*Slide item on solutions2.html*/

    var $clientsLink       = $('.clients-link'), 
        $clientsLinkInner  = $('.clients-link--inner'),
        $open              = false;

        $clientsLink.on('click', function (e) {
            e.preventDefault();

            var $self          = $(this),
                $currDataInner = $self.data('inner');


            $('.clients-link--inner').each(function( index ) {
                var $temp = $(this).data('inner');
                if ($temp == $currDataInner) {
                    $clientsLinkInner.not($(this)).hide();
                    $clientsLink.not($self).removeClass('punkt-list__link--active');
                    $(this).slideToggle();
                    $self.toggleClass('punkt-list__link--active');
                }
            });
        });
});

