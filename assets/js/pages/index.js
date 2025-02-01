$(document).ready(function() {

	$('.zoom-gallery').magnificPopup({
		delegate: 'a.gallery-item',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

    $("#testimonial").owlCarousel({
	    navigation : false,
	    slideSpeed : 700,
	    paginationSpeed : 700,
	    autoPlay: 10000,
	    singleItem:true
    });

    $("#brands").owlCarousel({
	    navigation : false,
	    slideSpeed : 700,
	    paginationSpeed : 700,
	    autoPlay: 10000,
	    items:6,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,4]
    });
	// $(".read-more").on("click", function () {
    //     var target = $(this).data("target");
    //     var content = $("#" + target);

    //     content.toggleClass("expanded");

    //     $(".content").each(function () {
    //         if ($(this).attr("id") !== target) {
    //             $(this).removeClass("expanded");
    //         }
    //     });
	// 	$(".read-more").each(function(){
	// 		var btnTarget = $(this).data("target");
	// 		if(btnTarget === target && content.hasClass("expanded")){
	// 			$(this).text("See Les");
	// 		}else{
	// 			$(this).text("Read More")
	// 		}
	// 	});
    // });

});