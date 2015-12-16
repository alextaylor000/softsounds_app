(function($){

	"use strict";

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('.loader').fadeOut();
		$('.page-loader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Initialization general scripts for all pages
		/* ---------------------------------------------- */

		var moduleHero      = $('#hero'),
			overlayMenu     = $('#overlay-menu'),
			slider          = $('#slides'),
			navbar          = $('.navbar-custom'),
			filters         = $('#filters'),
			worksgrid       = $('#works-grid'),
			modules         = $('.module-hero, .module, .module-small'),
			windowWidth     = Math.max($(window).width(), window.innerWidth),
			navbatTrans,
			mobileTest;

		navbarCheck(navbar);

		$(window).resize(function() {
			buildModuleHero();
		});

		$(window).scroll(function() {
			navbarAnimation(navbar, moduleHero);
		}).scroll();

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Intro slider setup
		/* ---------------------------------------------- */

		$('#slides').superslides({
			play: 10000,
			animation: 'fade',
			animation_speed: 800,
			pagination: true,
		});

		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		// modules.each(function() {
		// 	if ($(this).attr('data-background')) {
		// 		$(this).css('background', 'url(' + $(this).attr('data-background') + ')');
		// 	}
		// });

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			$('.module-parallax').css({'background-attachment': 'scroll'});
		} else {
			$('#hero.module-parallax').parallax('50%', 0.2);
		}

		/* ---------------------------------------------- /*
		 * Full height module
		/* ---------------------------------------------- */

		function buildModuleHero() {
			if (moduleHero.length > 0) {
				if (moduleHero.hasClass('module-full-height')) {
					moduleHero.height($(window).height());
				} else {
					moduleHero.height($(window).height() * 0.85);
				}
			}
		}


		/* ---------------------------------------------- /*
		 * Transparent navbar animation
		/* ---------------------------------------------- */

		function navbarCheck() {
			if (navbar.length > 0 && navbar.hasClass('navbar-transparent')) {
				navbatTrans = true;
			} else {
				navbatTrans = false;
			}
		}

		function navbarAnimation(navbar, moduleHero) {
			var topScroll = $(window).scrollTop();
			if (navbar.length > 0 && navbatTrans !== false) {
				if (topScroll >= 5) {
					navbar.removeClass('navbar-transparent');
				} else {
					navbar.addClass('navbar-transparent');
				}
			}
		}

		/* ---------------------------------------------- /*
		 * Show/Hide overlay menu
		/* ---------------------------------------------- */

		$('#toggle-menu').on('click', function() {
			showMenu();
			$('.page').css("opacity", "0");
			$('.footer').css("opacity", "0");
			$('body').addClass('aux-navigation-active');
			return false;
		});

		$('#overlay-menu-hide').on('click', function() {
			hideMenu();
			$('.page').css("opacity", "1");
			$('.footer').css("opacity", "1");
			$('body').removeClass('aux-navigation-active');
			return false;
		});

		$('#channel-page').on('click', function() {
		  hideMenu();
			$('.page').fadeOut(100).hide().css("opacity", "0");
			$("#select-channel").css('display', "block").fadeTo(100, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#button-channel').on('click', function() {
			$('.page').fadeOut(100).hide().css("opacity", "0");
			$("#select-channel").css('display', "block").fadeTo(100, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#select-stream-1').on('click', function() {
			$('.page').hide().css("opacity", "0");
			$("#particles-js").fadeOut(1500);
			$('.module-hero').css("background", "url(softsounds.jpg) no-repeat center center fixed").css("background-size", "cover");
			$("#stream-data-1").css('display', "block").fadeTo(200, "1");
			$("#track-info-1").css('display', "block").fadeTo(200, "1");
			$(".footer").fadeTo(1500, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#select-stream-2').on('click', function() {
			$('.page').hide().css("opacity", "0");
			$('.module-hero').css("background", "url(softsounds_night.jpg) no-repeat center center fixed").css("background-size", "cover");
			$("#particles-js").fadeOut(1500);
			$("#stream-data-2").css('display', "block").fadeTo(200, "1");
			$("#track-info-2").css('display', "block").fadeTo(200, "1");
			$(".footer").fadeTo(1500, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#favorite-page').on('click', function() {
		  hideMenu();
			$('.page').fadeOut(200).hide().css("opacity", "0");;
			$("#favorites").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#faq-page').on('click', function() {
		  hideMenu();
			$('.page').fadeOut(200).hide().css("opacity", "0");;
			$("#faq").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#contact-page').on('click', function() {
		  hideMenu();
			$('.page').fadeOut(200).hide();
			$("#contact").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#log-in-page').on('click', function() {
			$('.page').fadeOut(200).hide();
			$("#log-in").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#button-login').on('click', function() {
			$("#particles-js").fadeOut(1000);
			$('.page').fadeOut(200).hide();
			$("#log-in").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$('#sign-up-page').on('click', function() {
			$('.page').fadeOut(200).hide();
			$("#particles-js").fadeOut(2000);
			$("#sign-up").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		  return false;
		});

		$("#select-stream-1").click(function() {
			$("#jplayer").jPlayer("setMedia", {
				mp3: "http://rosetta.shoutca.st:9368/stream"
			});
  		$("#jplayer").jPlayer("play").jPlayerFade().in(6000);
		});

		$("#select-stream-2").click(function() {
			$("#jplayer").jPlayer("setMedia", {
				mp3: "http://rosetta.shoutca.st:9233/stream"
			});
  		$("#jplayer").jPlayer("play").jPlayerFade().in(6000);
		});

		$("#stream-2").on("mouseenter", function() {
			$(this).css("opacity", "1");
			$("#stream-1").css("opacity", ".3");
		})

		$("#stream-1").on("mouseenter", function() {
			$(this).css("opacity", "1");
			$("#stream-2").css("opacity", ".3");
		})

		$(".navbar-brand").on("click", function() {
			hideMenu();
			$("#particles-js").fadeIn(1500);
			$('.page').fadeOut(200).hide();
			$("#select-channel").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		})

		$("#favorites-list-box").on("click", ".page-close", function() {
			$('.page').fadeOut(200).hide();
			$("#stream-data-1").css('display', "block").fadeTo(200, "1");
			$("#track-info-1").css('display', "block").fadeTo(200, "1");
			$(".footer").fadeTo(1500, "1");
		  $('body').removeClass('aux-navigation-active');
		})

		$(".container").on("click", ".fav-menu", function() {
			$('.page').fadeOut(200).hide();
			$("#favorites").css('display', "block").fadeTo(200, "1");
		  $('body').removeClass('aux-navigation-active');
		})

		$("#speaker").on("mouseenter", function () {
			$(".volume-box").css("opacity", "1");
		})

		$(".volume-box").on("mouseleave", function () {
			$(this).css("opacity", "0");
		})

		$("#share").on("mouseenter", function () {
			$(".share-box").css("opacity", "1");
		})

		$(".share-box").on("mouseleave", function () {
			$(this).css("opacity", "0");
		})

		$(window).keydown(function(e) {
			if (overlayMenu.hasClass('active')) {
				if (e.which === 27) {
					hideMenu();
				}
			}
		});

		function showMenu() {
			navbar.animate({'opacity': 0}, {
				duration: 150,
				easing: 'easeInOutQuart'
			});

			overlayMenu.addClass('active');
		}

		function hideMenu() {
			navbar.animate({'opacity': 1, 'top': 0}, {
				duration: 150,
				easing: 'easeInOutQuart'
			});

			overlayMenu.removeClass('active');
		}

		/* ---------------------------------------------- /*
		 * Overlay dropdown menu
		/* ---------------------------------------------- */

		$('#nav > li.slidedown > a').on('click', function() {
			if ($(this).attr('class') != 'active') {
				$('#nav li ul').slideUp({duration: 300, easing: 'easeInOutQuart'});
				$('#nav li a').removeClass('active');
				$(this).next().slideToggle({duration: 300, easing: 'easeInOutQuart'}).addClass('open');
				$(this).addClass('active');
			} else {
				$('#nav li ul').slideUp({duration: 300, easing: 'easeInOutQuart'}).removeClass('open');
				$(this).removeClass('active');
			}
			return false;
		});

		/* ---------------------------------------------- /*
		 * Portfolio
		/* ---------------------------------------------- */

		$('a', filters).on('click', function() {
			var selector = $(this).attr('data-filter');

			$('.current', filters).removeClass('current');
			$(this).addClass('current');

			worksgrid.isotope({
				filter: selector
			});

			return false;
		});

		$(window).on('resize', function() {

			var windowWidth    = Math.max($(window).width(), window.innerWidth),
				itemWidht      = $('.grid-sizer').width(),
				itemHeight     = Math.floor(itemWidht * 0.95),
				itemTallHeight = itemHeight * 2;

			if (windowWidth > 500) {
				$('.work-item', worksgrid).each(function() {
					if ($(this).hasClass('tall')) {
						$(this).css({
							height : itemTallHeight
						});
					} else if ($(this).hasClass('wide')) {
						$(this).css({
							height : itemHeight
						});
					} else if ($(this).hasClass('wide-tall')) {
						$(this).css({
							height : itemTallHeight
						});
					} else {
						$(this).css({
							height : itemHeight
						});
					}
				});
			} else {
				$('.work-item', worksgrid).each(function() {
					if ($(this).hasClass('tall')) {
						$(this).css({
							height : itemTallHeight
						});
					} else if ($(this).hasClass('wide')) {
						$(this).css({
							height : itemHeight / 2
						});
					} else if ($(this).hasClass('wide-tall')) {
						$(this).css({
							height : itemHeight
						});
					} else {
						$(this).css({
							height : itemHeight
						});
					}
				});
			}

			// worksgrid.imagesLoaded(function() {
			// 	worksgrid.isotope({
			// 		layoutMode: 'packery',
			// 		itemSelector: '.work-item',
			// 		transitionDuration: '0.3s',
			// 		packery: {
			// 			columnWidth: '.grid-sizer',
			// 		},
			// 	});
			// });

		}).resize();


		/* ---------------------------------------------- /*
		 * Ajax options
		/* ---------------------------------------------- */

		var pageNumber = 0,
			workNumberToload = 5;

		var doneText  = 'Done',
			loadText    = 'More works',
			loadingText = 'Loading...',
			errorText   = 'Error! Check the console for more information.';

		/* ---------------------------------------------- /*
		 * Ajax portfolio
		/* ---------------------------------------------- */

		$('#show-more').on('click', function() {
			$(this).text(loadingText);

			setTimeout(function() {
				ajaxLoad(workNumberToload, pageNumber);
			}, 300);

			pageNumber++;

			return false;
		});

		function ajaxLoad(workNumberToload, pageNumber) {
			var $loadButton = $('#show-more');
			var dataString = 'numPosts=' + workNumberToload + '&pageNumber=' + pageNumber;

			$.ajax({
				type: 'GET',
				data: dataString,
				dataType: 'html',
				url: 'assets/php/ajax-load-more/ajax-load-more.php',
				success: function(data) {
					var $data = $(data);
					var start_index = (pageNumber - 1) * workNumberToload;
					var end_index = + start_index + workNumberToload;

					if ($data.find('.work-item').slice(start_index).length) {
						var work = $data.find('.work-item').slice(start_index, end_index);

						worksgrid.append(work).isotope('appended', work).resize();

						setTimeout(function() {
							$loadButton.text(loadText);
						}, 300);
					} else {
						setTimeout(function() {
							$loadButton.text(doneText);
						}, 300);

						setTimeout(function () {
							$('#show-more').animate({
								opacity: 0,
							}).css('display', 'none');
						}, 1500);
					}
				},

				error: function (jqXHR, textStatus, errorThrown) {
					console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);

					setTimeout(function() {
						$loadButton.removeClass('ss-loading');
						$loadButton.text(errorText);
					}, 300);

				}
			});
		}


		// /* ---------------------------------------------- /*
		//  * Owl sliders
		// /* ---------------------------------------------- */
		//
		// $('.slider-testimonials').owlCarousel({
		// 	stopOnHover:     !0,
		// 	singleItem:      !0,
		// 	autoHeight:      !0,
		// 	slideSpeed:      400,
		// 	paginationSpeed: 1000,
		// 	goToFirstSpeed:  2000,
		// 	autoPlay:        3000,
		// 	navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		// });
		//
		// $('.slider-images').owlCarousel({
		// 	stopOnHover:     !0,
		// 	singleItem:      !0,
		// 	autoHeight:      !0,
		// 	navigation:      !0,
		// 	slideSpeed:      400,
		// 	paginationSpeed: 1000,
		// 	goToFirstSpeed:  2000,
		// 	autoPlay:        3000,
		// 	transitionStyle : "fade",
		// 	navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		// });


		/* ---------------------------------------------- /*
		 * Progress bars, counters animations
		/* ---------------------------------------------- */

		$('.progress-bar').each(function(i) {
			$(this).appear(function() {
				var percent = $(this).attr('aria-valuenow');
				$(this).animate({'width' : percent + '%'});
				$(this).find('span').animate({'opacity' : 1}, 900);
				$(this).find('span').countTo({from: 0, to: percent, speed: 900, refreshInterval: 30});
			});
		});

		$('.counter-item').each(function(i) {
			$(this).appear(function() {
				var number = $(this).find('.counter-number').data('number');
				$(this).find('.counter-number span').countTo({from: 0, to: number, speed: 1200, refreshInterval: 30});
			});
		});



		/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.section-scroll').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);

			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Scroll top
		/* ---------------------------------------------- */

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$('a[href="#totop"]').click(function() {
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			return false;
		});

	});

})(jQuery);
