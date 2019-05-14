	$(window).load(function() {	
		'use strict';
		
		$("#pageloader").delay(1200).fadeOut("slow");
		$(".loader-item").delay(700).fadeOut();
		
		//$("#navbar").load("/navbar.html");
		//$("#footer").load("/footer.html");
	});


	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	
	/* ==============================================
	Custom Javascript
	=============================================== */
	$(document).ready(function() {
		'use strict';


		var Date1 = new Date(2014, 2, 1);
		var Date2 = new Date();	   
		var WorkDays = Math.ceil(((Date2.getTime() - Date1.getTime()) / (1000 * 60 * 60 * 24)) * 0.70);	 


		var Startyear = new Date(2014, 1, 1);	  
		var WorkYears = calculateAge(Startyear);

		// days in a year * percentage of work days * avarage cups of coffee
		$("#coffeecounter").html(Math.ceil(WorkDays * 5));

		// todo: tel projecten
		$("#projectcounter").html($("div.cbp-item").length);

		// nr of years experience
		$("#yearscounter").html(WorkYears);

		// calculate work hours
		$("#workhourscounter").html(Math.ceil(WorkDays * 9.5));

		jQuery('.panel-heading a').click(function() {
			$('.panel-heading').removeClass('actives');
			$(this).parents('.panel-heading').addClass('actives');
		});
		
		//Shrink Header
		$(function() {
			var shrinkHeader = 130;
			$(window).scroll(function() {
				var scroll = getCurrentScroll();
				if (scroll >= shrinkHeader) {
					$('header').addClass('colored');
				} else {
					$('header').removeClass('colored');
				}
			});

			function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
			}
		});
		
		$("html").niceScroll({
			cursorwidth:"13px",
			cursorborder:"none",
			cursorborderradius:"0",
			zindex:"100000"
		});
		
		//Mobile Nav
		$('.navbar-nav a').click(function() {
			$('.navbar-collapse').removeClass('in').addClass("collapse");
		});
		
		/* Tooltip */
		$('a.like-icons, a.comments-icon, .social-icons ul li a, .demo-button a').tooltip({
			placement: 'top',
			animation:true,
			delay: { show: 200, hide: 100 }
		});
		
		//Shrink Header
		$(function() {
			var shrinkHeader = 200;
			$(window).scroll(function() {
				var scroll = getCurrentScroll();
				if (scroll >= shrinkHeader) {
					$('.navbar ').addClass('colored');
				} else {
					$('.navbar').removeClass('colored');
				}
			});

			function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
			}
		});

		
		$("#menu-toggle").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});
		
		$('.navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750
		});
		
		// Parallax Background
		$.stellar({
			responsive: true,
			horizontalScrolling: false,
			verticalOffset: 40
		});
		
		$('.skillbar').appear();
			$('.skillbar').on('appear', function () {			
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 3000);			
		});
		
		// Flickr Photostream
		$('#basicuse').jflickrfeed({
			limit: 12,
			qstrings: {
				id: '52617155@N08'
			},
			itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
		});
		
		/* Conter */
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

		// Piecharts
		jQuery('#pie-charts').waypoint(function(direction) {
			jQuery('.chart').easyPieChart({
				barColor: "#59585b",
				onStep: function(from, to, percent) {
					jQuery(this.el).find('.percent').text(Math.round(percent));
				}
			});
		}, {
			offset: function() {
				return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 200;
			}
		});
		
		$('#hobbie-slider').owlCarousel({
			center: false,
			items:2,
			loop:true,
			margin:30,
			nav:true,
			dots:false,
			navText: ['&#xf104;', '&#xf105'],
			responsive:{
				600:{
					items:4,
				},
				1000:{
					items:4,
				},
				1600:{
					items:6,
				}
			}
		});
		$('#recognitions-slider').owlCarousel({
			center: false,
			items:1,
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			navText: ['&#xf104;', '&#xf105']
		});
		$('#testmonial-slider').owlCarousel({
			center: false,
			items:1,
			loop:true,
			autoplay:true,
			autoplayHoverPause:true,
			margin:30,
			nav:true,
			dots:true,
			navText: ['&#xf104;', '&#xf105']
		});
		
		(function($, window, document, undefined) {
		'use strict';
	
			// init cubeportfolio
			$('#grid-container').cubeportfolio({
				filters: '#filters-container',
				loadMore: '#loadMore-container',
				loadMoreAction: 'click',
				layoutMode: 'grid',
				mediaQueries: [{
					width: 1100,
					cols: 3
				}, {
					width: 800,
					cols: 3
				}, {
					width: 500,
					cols: 2
				}, {
					width: 320,
					cols: 1
				}],
				defaultFilter: '*',
				animationType: 'rotateSides',
				gapHorizontal: 0,
				gapVertical: 0,
				gridAdjustment: 'responsive',
				caption: 'minimal',
				displayType: 'sequentially',
				displayTypeSpeed: 100,
		
				// lightbox
				lightboxDelegate: '.cbp-lightbox',
				lightboxGallery: true,
				lightboxTitleSrc: 'data-title',
				lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		
				// singlePageInline
				singlePageInlineDelegate: '.cbp-singlePageInline',
				singlePageInlinePosition: 'below',
				singlePageInlineInFocus: true,
				singlePageInlineCallback: function(url, element) {
					// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
					var t = this;
		
					$.ajax({
							url: url,
							type: 'GET',
							dataType: 'html',
							timeout: 10000
						})
						.done(function(result) {
		
							t.updateSinglePageInline(result);
		
						})
						.fail(function() {
							t.updateSinglePageInline('AJAX Error! Please refresh the page!');
						});
				},
			});
	
		})(jQuery, window, document);

		
		// Contact Form
		jQuery("#contact_form").validate({
			meta: "validate",
			submitHandler: function(form) {

				var s_name = $("#name").val();
				var s_lastname = $("#lastname").val();
				var s_email = $("#email").val();
				var s_phone = $("#phone").val();
				var s_suject = $("#subject").val();
				var s_comment = $("#comment").val();
				$.post("contact.php", {
						name: s_name,
						lastname: s_lastname,
						email: s_email,
						phone: s_phone,
						subject: s_suject,
						comment: s_comment
					},
					function(result) {
						$('#sucessmessage').append(result);
					});
				$('#contact_form').hide();
				return false;
			},
			/* */
			rules: {
				name: "required",

				lastname: "required",
				// simple rule, converted to {required:true}
				email: { // compound rule
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				comment: {
					required: true
				},
				subject: {
					required: true
				}
			},
			messages: {
				name: "Please enter your name.",
				lastname: "Please enter your last name.",
				email: {
					required: "Please enter email.",
					email: "Please enter valid email"
				},
				phone: "Please enter a phone.",
				subject: "Please enter a subject.",
				comment: "Please enter a comment."
			},
		}); /*========================================*/   	 
		
	});