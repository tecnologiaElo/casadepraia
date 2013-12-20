function addMp3Source(sourceUrl) {
	var audio = $('#main-player audio');
    audio.empty();
    var newSrc = $("<source>").attr("src", sourceUrl).appendTo(audio);
    audio[0].pause();
    audio[0].load();
    audio[0].play();
}

$(document).ready(function(){
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top+10
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$('#biografia .content .bxslider').bxSlider({
		pager: true,
		controls: false,
		infiniteLoop: false,
		slideWidth: 624
	});

	$('#musicas .content .bxslider').bxSlider({
		pager: false,
		controls: true,
		infiniteLoop: true,
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 225,
		slideMargin: 20
	});

	$('#discos .content .bxslider').bxSlider({
		pager: true,
		controls: false,
		infiniteLoop: false,
		slideWidth: 624
	});

	$('#fotografias .content .bxslider').bxSlider({
		pager: true,
		controls: false,
		infiniteLoop: true,
		slideWidth: 624
	});

	$('.player').each(function(index){
		$(this).css('background-image', 'url(discos/'+$(this).attr('data-path')+'/capa.jpg)');
		$(this).html("<div class=\"overlay\">\
							<div>Disco:\
							<b>"+$(this).attr('data-disco')+"</b>\
							</div><div>Música:\
							<b>"+$(this).attr('data-titulo')+"</b>\
							<div class=\"pbtn play\"></div>\
					</div></div>");
	});

	$('.player .overlay .pbtn').click(function(e){
		e.preventDefault();

		var audio = $('#main-player audio');
		var thes = $(this).parent().parent().parent();

		//alert(thes.html());
		if(thes.hasClass('playing')){
			thes.parent().parent().find('.player').removeClass('playing');

		    audio[0].pause();
		} else {
			var mus = thes.attr('data-musica');
			var aud = audio.find('source').attr('src');
			au = (aud)?aud:'';

			if(au.indexOf(mus)!=-1){
				audio[0].play();
			} else {
				addMp3Source('discos/'+thes.attr('data-path')+'/'+thes.attr('data-musica')+'.mp3');
			}

			thes.parent().parent().find('.player').removeClass('playing');
			thes.addClass('playing');
		}
	});

	$(".fancybox").fancybox();

	var options = {
	    panelSelector: 'section',
	    namespace: '.page-snap',
	    slideSpeed: 500
	    };

  	$('body').panelSnap(options);
});