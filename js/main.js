// 1 карусель
$(document).ready(function(){
  $(".carousel").owlCarousel({
  	items: 4,
  	loop: true,
  	rewind: false,
  	margin: 30,
  	autoWidth: true,
  	nav: true
  });
});

// всплывающее окно
$(document).ready(function() { 
	$('a#start').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(300, 
		 	function(){
				$('#popUp')
				    .css('overflow', 'auto') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '15%'}, 490);
				$('#body') 
					.css('overflow', 'hidden');
		});
	});
/*по нажатию на крестик закрываю окно*/
	$('#close, #overlay').click( function(){ 
		$('#popUp')
			.animate({opacity: 0, top: '5%'}, 490, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(220);
					$('#body') 
					.css('overflow', 'auto'); 
				}
			);
	});
});


// 2 слайдер
$(document).ready(function(){
  $(".home_care-slider").owlCarousel({
  	items: 1,
  	loop: true,
  	rewind: true,
  	dots: true,
  	autoplay: true
  });
});