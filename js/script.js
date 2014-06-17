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
            $parent = $this.closest('li');
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

        /*SLIDESHOW PORTFOLIO_ WORKS*/
        if ($('.slideshow-works').length) {
            $('.slideshow-works').slick({
              centerMode: true,
                centerPadding: '220px',
                slidesToShow: 5
            });

        }

            /*SLIDESHOW RELATED WORKS*/
        if ($('.slideshow-works__related').length) {

            $('.slideshow-works__related').slick({
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay : true,
              autoplaySpeed: 3000,
              arrows   : false,
              dots     : false
            });

        }

        $('.slideshow__slick').slick({
          autoplay: true
        });
});

