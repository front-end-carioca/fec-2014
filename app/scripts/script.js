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









































