/* Template: Sync - Mobile App Landing Page Template
   Author: Inovatik
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    // hover in desktop mode
    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    /* Details Lightbox - Magnific Popup */
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });


    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});


	$(".owl-carousel").owlCarousel({
		loop: false,
		dots: false,
		margin: 10,
		nav: true,
		responsive: {
			100: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	var oilCanvas = document.getElementById("oilChart");

	//Chart.defaults.global.defaultFontFamily = "Lato";
	//Chart.defaults.global.defaultFontSize = 18;

	var oilData = {
		labels: [
			"Burned", //20
			"Public Pre-sale", //20
			"Liquidity (auto-locked)", //
			"Protocol Rewards (NFT/Game Rewards)",
		],
		datasets: [
			{
				data: [50, 30, 15, 5],
				backgroundColor: [
					"#10b6fc",
					"#029fe0",
					"#0283b9",
					"#016691",
					"#014a69",
					"#002e42",
				]
			}]
	};

	var pieChart = new Chart(oilCanvas, {
		type: 'doughnut',
		data: oilData,
		options: {
			//responsive: true,
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: false,
				}
			}
		},
	});


	function makeTimer() {

		//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
			var endTime = new Date("19 June 2021 14:00:00 GMT+03:00");			
				endTime = (Date.parse(endTime) / 1000);
	
				var now = new Date();
				now = (Date.parse(now) / 1000);
	
				var timeLeft = endTime - now;
	
				var days = Math.floor(timeLeft / 86400); 
				var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
				var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
				var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		
				if (hours < "10") { hours = "0" + hours; }
				if (minutes < "10") { minutes = "0" + minutes; }
				if (seconds < "10") { seconds = "0" + seconds; }
	
				$("#timer #days").html(days + "<span>Days</span>");
				$("#timer #hours").html(hours + "<span>Hours</span>");
				$("#timer #minutes").html(minutes + "<span>Minutes</span>");
				$("#timer #seconds").html(seconds + "<span>Seconds</span>");		
	
		}
	
		//setInterval(function() { makeTimer(); }, 1000);
})(jQuery);
