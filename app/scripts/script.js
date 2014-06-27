$(document).ready(function(){
	MagicMenu();
	AnimationNav();
	MediaQueryJS();

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
		scrollTop: 600
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

function MediaQueryJS(){
	var myWidth = window.innerWidth;

	if (myWidth <= 1056 && myWidth >= 993){
		alert('responsive 1');
	}else if(myWidth <= 991 && myWidth >= 774){
		alert('responsive 2');
	}else if(myWidth <= 772 && myWidth >= 650){
		alert('responsive 3');
	}else if(myWidth <= 648 && myWidth >= 398){
		alert('responsive 4');
	}

	alert(myWidth);
}










































