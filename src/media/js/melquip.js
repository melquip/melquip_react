(function($) {
	'use strict';
	
	var $win = $(window),
		$body,
		$hireme,
		$logo,
		$hamburguer,
		$landing,
		$nav,
		$home,
		$about,
		$services,
		$contacts;
	
	
	var lt = 0;
	var st = $win.scrollTop();
	var scrolledUp = false;
	var sections = ['landing', 'home', 'about', 'services', 'contacts'];
	var current_section = 0;
	var min_section = 1;
	var max_section = 4;
	var canScroll = true;
	
	$(document).ready(function() {
		$body = $('body');
		$hireme = $('.btn-hireme');
		$logo = $('.logo');
		$hamburguer = $('.hamburguer');
		$home = $('#home');
		$about = $('#about');
		$services = $('#services');
		$contacts = $('#contacts');
		
		
		$('a[href*="#"]:not([href="#"])').on('click', function() {
			if (canScroll && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				//detectUpdateSection(this.hash);
				//canScroll = false;
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length && st !== target.offset().top ) {
					$('html, body').stop().animate({
						scrollTop: target.offset().top
					}, 1000);
					setTimeout(function() {
						canScroll = true;
					}, 1100);
					return false;
				} else {
					$('html, body').stop();
					canScroll = true;
				}
			}
			return false;
		});
		/*$body.liveParallax([
			{
				element:".logo", posStart:0, posFinish:(($win.height()/2+100)*100/$(document).height()), property:"top",
				vStart:"return (50-((50*100)/$(window).height()));",
				vFinish: 0, unit:"%", callback: function(e, f) {
					if(parseFloat($logo.css('top').replace('px', '')) != f) {
						$logo.css('top', f+'%');
						$hamburguer.toggleClass('visible', f === 0);
						if($body.hasClass('menu-open')) {
							$body.removeClass('menu-open');
						}
					}
				}
			}, {
				element:".btn-hireme", posStart:0, posFinish:(($win.height()/3+100)*100/$(document).height()), property:"opacity",
				vStart: 1, vFinish: 0, unit:"", callback: function(e, f) {
					if($hireme.css('opacity') != f) {
						$hireme.css('opacity', f);
						if(f === 0) {
							$hireme.hide();
						} else {
							$hireme.show();
						}
					}
				}
			}, {
				element:".btn-hireme", posStart:0, posFinish: (($win.height()+100)*100/$(document).height()), property:"top",
				vStart:"return (66.5-((50*100)/$(window).height()));",
				vFinish: 10, unit:"%"
			}
			
		]);*/
		
		/*{
						element:"nav img", posStart: 12.5, posFinish: 14, property:"display", vStart:'none', vFinish: 'block', unit:""
					},
					{
						element:".logo", posStart:0, posFinish: 14, property:"display", vStart:'block', vFinish: 'none', unit:""
					}
					
					/*{   element:".img1", posStart:35, posFinish:80, change:'translate3d', cssBefore:"", property:"y", vStart:0,
						vFinish: "return -(parseInt(value.obj.height())-parseInt(value.obj.parent().height()))", unit:"px"
					},*/
		
		/*$about.liveParallax([
		{
			element:"h1", posStart:0, posFinish: (50/(($about.height())/$win.height())), property:"top", vStart:-94, vFinish: 106, unit:"px"
		}
		]);
		$services.liveParallax([
		{
			element:"h1", posStart:0, posFinish: (50/(($services.height())/$win.height())), property:"top", vStart:-94, vFinish: 106, unit:"px"
		}
		]);
		$contacts.liveParallax([
		{
			element:"h1", posStart:0, posFinish: (50/(($contacts.height())/$win.height())), property:"top", vStart:-94, vFinish: 106, unit:"px"
		}
		]);*/
		
		$hamburguer.on('click', function() {
			console.log('HAMBURGUER');
			$body.toggleClass('menu-open');
		});
		
		$landing = $('.landing');
		$nav = $('nav');

		$('li a', $nav).on('click', function() {
			$body.removeClass('menu-open');
		});
		
		$win.on('scroll',function(e) {
			st = $win.scrollTop();
			scrolledUp = lt > st;
			if(canScroll) {
				//handleLandingPage()
			}
			//var changed = changeSection(scrolledUp);
			
			/*if(!$nav.hasClass('sticky-top')) {
				$nav.toggleClass('sticky-top', (st >= $landing.height()))
			}*/
			
			lt = st;
			//if(!changed) {
			
			//}
		});
		
		var $formFields = $('.fieldHelper input, .fieldHelper textarea');
		$formFields.on('focusout', function() {
			$(this).parent('.fieldHelper').toggleClass('notempty', ($(this).val() != ''));
			$(this).parent('.fieldHelper').removeClass('focused');
		}).on('focusin', function() {
			$(this).parent('.fieldHelper').addClass('focused');
		});
		
		$('#work .asFlick').flickity({
			cellSelector: '.slider',
			setGallerySize: false,
			wrapAround: true,
			autoPlay: 10000,
			pauseAutoPlayOnHover: false,
			prevNextButtons: false,
		});

		$('.siteImg').tilt({
			scale: 1.15,
			maxTilt: 10,
			speed: 500,
			perspective:1000,
		});
		
	});
	function handleLandingPage() {
		if(st < $win.height() && !scrolledUp) {
			canScroll = false;
			$('html, body').stop().animate({
				scrollTop: $home.offset().top
			}, 1000);
			setTimeout(function() {
				canScroll = true;
			}, 1100);
		} else if(st < $win.height() && scrolledUp) {
			canScroll = false;
			$('html, body').stop().animate({
				scrollTop: 0
			}, 1000);
			setTimeout(function() {
				canScroll = true;
			}, 1100);
		}
	}
	/*function changeSection(scrolledUp) {
		if(canScroll) {
			console.log("CANNOT SCROLL\nchangeSection("+scrolledUp+")");
			canScroll = false;
			var last_section = current_section;
			var section = $('#'+sections[current_section]);
			section = section.length ? section : $('.'+sections[current_section]);
			if(scrolledUp) {
				console.log('oopsz');
				if(section.offset().top >= st) {
					console.log('oops');
					if(current_section === min_section) {
						console.log('ooppzz');
						$win.scrollTop(section.offset().top);
						canScroll = true;
					} else {
						current_section -= 1;
						current_section = current_section < min_section ? min_section : current_section;
					}
				} else {
					canScroll = true;
				}
			} else {
				if(section.offset().top+section.height() < st+$win.height() ) {
					current_section += 1;
					current_section = current_section > max_section ? max_section : current_section;
				} else {
					canScroll = true;
				}
			}
			console.log('last', last_section, 'current', current_section);
			console.log('offsetTop', section.offset().top, 'height', section.height(), 'scrollTop', st, 'winHeight', $win.height());
		
			if(!canScroll) {
				if(current_section !== last_section) {
					section = $('#'+sections[current_section]);
					section = section.length ? section : $('.'+sections[current_section]);
					if (section.length) {
						var sh = section.height(),
							wh = $win.height();
						$('html, body').stop().animate({
							scrollTop: scrolledUp?(section.offset().top+sh-(sh>=wh?wh:sh)):section.offset().top
						}, 1000);
						setTimeout(function() {
							canScroll = true;
						}, 1100);
						
						return true;
					}
				}
			}
		}
		return false;
	}*/
	/*function detectUpdateSection(hash) {
		if(canScroll) {
			canScroll = false;
			var likely = hash.replace('#', '').replace('.', '');
			var likelyIndex = sections.indexOf(likely);
			console.log(hash, likely, likelyIndex);
			if (likelyIndex > -1) {
				current_section = likelyIndex;
			}
		}
	}*/
	
})(jQuery);