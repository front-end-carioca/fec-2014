/*!
 * jQuery Smooth Scroll Plugin v1.4.5
 *
 * Date: Sun Mar 11 18:17:42 2012 EDT
 * Requires: jQuery v1.3+
 *
 * Copyright 2012, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 *
 *
 *
*/
(function(b){function m(c){return c.replace(/(:|\.)/g,"\\$1")}var n=function(c){var e=[],a=false,d=c.dir&&c.dir=="left"?"scrollLeft":"scrollTop";this.each(function(){if(!(this==document||this==window)){var g=b(this);if(g[d]()>0)e.push(this);else{g[d](1);a=g[d]()>0;g[d](0);a&&e.push(this)}}});if(c.el==="first"&&e.length)e=[e.shift()];return e},o="ontouchend"in document;b.fn.extend({scrollable:function(c){return this.pushStack(n.call(this,{dir:c}))},firstScrollable:function(c){return this.pushStack(n.call(this,
{el:"first",dir:c}))},smoothScroll:function(c){c=c||{};var e=b.extend({},b.fn.smoothScroll.defaults,c),a=b.smoothScroll.filterPath(location.pathname);this.die("click.smoothscroll").live("click.smoothscroll",function(d){var g={},i=b(this),f=location.hostname===this.hostname||!this.hostname,h=e.scrollTarget||(b.smoothScroll.filterPath(this.pathname)||a)===a,k=m(this.hash),j=true;if(!e.scrollTarget&&(!f||!h||!k))j=false;else{f=e.exclude;h=0;for(var l=f.length;j&&h<l;)if(i.is(m(f[h++])))j=false;f=e.excludeWithin;
h=0;for(l=f.length;j&&h<l;)if(i.closest(f[h++]).length)j=false}if(j){d.preventDefault();b.extend(g,e,{scrollTarget:e.scrollTarget||k,link:this});b.smoothScroll(g)}});return this}});b.smoothScroll=function(c,e){var a,d,g,i;i=0;d="offset";var f="scrollTop",h={},k=false;g=[];if(typeof c==="number"){a=b.fn.smoothScroll.defaults;g=c}else{a=b.extend({},b.fn.smoothScroll.defaults,c||{});if(a.scrollElement){d="position";a.scrollElement.css("position")=="static"&&a.scrollElement.css("position","relative")}g=
e||b(a.scrollTarget)[d]()&&b(a.scrollTarget)[d]()[a.direction]||0}a=b.extend({link:null},a);f=a.direction=="left"?"scrollLeft":f;if(a.scrollElement){d=a.scrollElement;i=d[f]()}else{d=b("html, body").firstScrollable();k=o&&"scrollTo"in window}h[f]=g+i+a.offset;a.beforeScroll.call(d,a);if(k){g=a.direction=="left"?[h[f],0]:[0,h[f]];window.scrollTo.apply(window,g);a.afterScroll.call(a.link,a)}else{i=a.speed;if(i==="auto"){i=h[f]||d.scrollTop();i/=a.autoCoefficent}d.animate(h,{duration:i,easing:a.easing,
complete:function(){a.afterScroll.call(a.link,a)}})}};b.smoothScroll.version="1.4.4";b.smoothScroll.filterPath=function(c){return c.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")};b.fn.smoothScroll.defaults={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2}})(jQuery);

//FUNCTION MENU RESPONSIVE
$(document).ready(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}
	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
});
// FUNCTION HIDE/SHOW MENU MOBILE
$(document).ready(function(){
	btnopen = document.getElementById('trigger-overlay');
	btnclose = document.querySelector( '.overlay-close' );
	function closenav(){
		$('.mobile').css('opacity', '0');
	}
	function open(){
		$('.mobile').css('opacity', '1');
	}
	btnopen.addEventListener('click', closenav);
	btnclose.addEventListener('click', open);
});
$('.navegacao2').click(function(){
	$('.overlay-slidedown').removeClass('open');
	$('.mobile').css('opacity', '1');
});
// SCROLL MENU
$(document).ready(function(){
	MagicMenu();
	AnimationNav();
	AnimationNavMob();
});
function MagicMenu(){
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 80) { 
			$('#menufixo').fadeIn(200);
		} else { 
			$('#menufixo').fadeOut(200);
		} 
	});
}
function AnimationNav(){
	$('.navegacao').click(function () {
		if($(this).attr('id')==='001'){
			Scrollhome();
		}else if($(this).attr('id')==='002'){			
			Scrollevento('#historia');
		}else if($(this).attr('id')==='003'){
			Scrollprogramacao('#servicos');
		}else if($(this).attr('id')==='004'){
			Scrollpatrocinio('#alimentareempresa');
		}else if($(this).attr('id')==='005'){
			ScrollLocal('#Contato');
		}else if($(this).attr('id')==='006'){
			ScrollOndeHospedar('#Novidades_videos');
		}	
	});
	function Scrollhome(){
		$('body,html').animate({
		scrollTop: 0
		}, 1000);
		return true;
	}
	function Scrollevento(){
		$('body,html').animate({
		scrollTop: 700
		}, 1000);
		return true;
		$(this).addClass('action');
	}
	function Scrollprogramacao(){
		$('body,html').animate({
		scrollTop: 1290
		}, 1200);
		return true;
	}
	function Scrollpatrocinio(){
		$('body,html').animate({
		scrollTop: 3490
		}, 1400);
		return true;
	}
	function ScrollLocal(){
		$('body,html').animate({
		scrollTop: 5000
		}, 1400);
		return true;	
	}
	function ScrollOndeHospedar(){
		$('body,html').animate({
		scrollTop: 4250
		}, 1400);
		return true;	
	}
	
}
function AnimationNavMob(){
	$('.navegacao2').click(function () {
		if($(this).attr('id')==='001'){
			Scrollhome();
		}else if($(this).attr('id')==='002'){			
			Scrollevento('#historia');
		}else if($(this).attr('id')==='003'){
			Scrollprogramacao('#servicos');
		}else if($(this).attr('id')==='004'){
			Scrollpatrocinio('#alimentareempresa');
		}else if($(this).attr('id')==='005'){
			ScrollLocal('#Contato');
		}else if($(this).attr('id')==='006'){
			ScrollOndeHospedar('#Novidades_videos');
		}	
	});
	function Scrollhome(){
		$('body,html').animate({
		scrollTop: 0
		}, 1000);
		return true;
	}
	function Scrollevento(){
		$('html, body').animate({scrollTop: $('.wrapper-about').offset().top -50}, 'slow');
	}
	function Scrollprogramacao(){
		$('html, body').animate({scrollTop: $('.wrapper-pgm').offset().top -50}, 'slow');
	}
	function Scrollpatrocinio(){
		$('html, body').animate({scrollTop: $('.wrapper-patrocinio').offset().top -50}, 'slow');
	}
	function ScrollLocal(){
		$('html, body').animate({scrollTop: $('.wrapper-hospedar').offset().top }, 'slow');
	}
	function ScrollOndeHospedar(){
		$('html, body').animate({scrollTop: $('.wrapper-local').offset().top -50}, 'slow');
	}
}