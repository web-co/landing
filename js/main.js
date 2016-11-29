$(document).ready(function(){
/* 	$(".tcon-menu--xcross").on('click', function(){
		var window_width = $(window).width();
		if ( window_width <= 640 ){
			$("ul.menu").slideToggle(300);
		};
	});
	$(document).on('click', function(event) {
		if ($(event.target).closest(".menu_w").length) return;
		$("ul.menu").slideUp("300");
		$(".tcon-menu--xcross").removeClass("tcon-transform");
    event.stopPropagation();
  }); */
  
		
		 function fullPage() {
			var wHeight = $(window).height();
			var hHeight = $(".header").height();
			var headerTopH = $('.header_top_w').height();
			var blockHeight = $(".header").outerHeight(true) - $('.header_top_w').height();
			$(".header").css({'min-height': wHeight});
			$('.content_slider_w').css({'height' : wHeight - headerTopH});
		 };
		 fullPage();
		 $(window).resize(function () {
			fullPage();
		}); 
		///////////
		$(".content_slider_w p").fitText(1.2);
		//
		$(".content_block p, .logo>a").lettering();
		///////////////////////////////////////////////
		

    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
           $('.number1').animateNumber({
				number: 6
			}, 5000);
			$('.number2').animateNumber({
				number: 743
			}, 5000);
			$('.number3').animateNumber({
				number: 435
			}, 5000);
			$('.number4').animateNumber({
				number: 225
			}, 5000);
 
            show = false;
        }
    });
	/////////////////////////////////
	
	 $("#text_slide").owlCarousel({
		lazyContent:true,
		lazyLoad: true,
		dots: true,
		nav: false,
		items: 1,
		center: true,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		animateIn:'zoomInRight', 
		animateOut:'zoomOutLeft'
	  });
	  
	  var owl_big = $("#big_slide");
	  owl_big.owlCarousel({
		lazyContent:true,
		lazyLoad: true,
		dots: false,
		nav: true,
		navText:[""],
		navClass:["prev_owl fa fa-chevron-left","nex_owl fa fa-chevron-right"],
		items: 1,
		center: true,
		autoplay: false,
		autoplayHoverPause: true,
		loop: true,
		animateIn:'zoomIn', 
		animateOut:'zoomOut'
	  });
	  
	  $("#clients_slider").owlCarousel({
		lazyContent:true,
		lazyLoad: true,
		dots: false,
		nav: false,
		items: 4,
		center: false,
		autoplay: true,
		autoplayHoverPause: true,
		loop: true,
		margin: 10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
    }
	  });
  


// Highlight the top nav as scrolling occurs
// $('body').scrollspy({
    // target: '.header_top'
// })

});

