// 1 карусель
$(document).ready(function(){
  $(".carousel").owlCarousel({
  	items: 4,
  	loop: true,
  	rewind: false,
  	margin: 30,
  	autoWidth: true,
  	nav: true,
  	autoplay: true,
  	autoplayTimeout: 3500,
  	autoplayHoverPause: true
  });
});
// квадратики карусели при наведении
$(document).ready(function(){
	$(".coat").mouseover(function(){
    	$(this).css("transition","1s");
    	$(this).css("border","10px solid rgba(187, 78, 79, 0.7)");
    	$(this).css("background","none");
    	$(this).css("color","rgba(0, 0, 0, 0)");
    });
    $(".coat").mouseout(function(){
    	$(this).css("transition","1s");
    	$(this).css("border","10px solid rgba(187, 78, 79, 0)");
    	$(this).css("background","rgba(187, 78, 79, 0.7)");
    	$(this).css("color","#fff");
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

// календарик
$.datepicker.setDefaults( $.datepicker.regional[ "ru" ]);

$("#datepicker").datepicker({
    numberOfMonths:1,
    altFormat: "dd/mm/yy",
    dateFormat: "dd/mm/yy",
    dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    firstDay: 1
    });

// всплывающее окно
$(document).ready(function() { 
	$('a#start').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(300, 
		 	function(){
				$('#popUp')				   
					.css('display', 'block') 
					.animate({opacity: 1, top: '15%'}, 490);
				$('#body') 
					.css('overflow', 'hidden');
		});
	});
//по нажатию на крестик закрываю окно
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



//плавный переход по якорным ссылкам
$(document).ready(function(){
    $("#menu_lower").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#menu_top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $("#title_btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//кнопка наверх
$(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        if ($('#up_btn').is(':hidden')) {
            $('#up_btn').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#up_btn').stop(true, false).fadeOut('fast'); }
});
$('#up_btn').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 1500);
});
$(document).ready(function(){
	$(".up_btn").mouseover(function(){
    	$(this).css("color","#afaaa5");
    	$(this).css("transition","0.5s");
    });
    $(".up_btn").mouseout(function(){
    	$(this).css("color","#d4cec8");
    	$(this).css("transition","1s");
    });
});

// кнопка оставить заявку
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        if ($('#appointment').is(':hidden')) {
            $('#appointment').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#appointment').stop(true, false).fadeOut('fast'); }
});
$(document).ready(function(){
    $("#appointment").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
	$(".appointment_btn").mouseover(function(){
    	$(this).css("width","64");
    	$(this).css("height","64");
    	$(this).css("transition","1s");
    	$(this).css("color","#bb4e4f");
    	$(this).css("fontSize","12px");
    });
    $(".appointment_btn").mouseout(function(){
    	$(this).css("width","50");
    	$(this).css("height","50");
    	$(this).css("transition","1s");
    	$(this).css("color","rgba(0,0,0,0)");
    	$(this).css("fontSize","5px");
    });
});


// движение картинки
$(document).ready(function(){
	$(".online_appointment-formblock").mouseover(function(){
    	$("#studio-img").css("marginLeft","30%");
    	$("#studio-img").css("transition","7s");
    });
    $(".online_appointment-formblock").mouseout(function(){
    	$("#studio-img").css("marginLeft","0");
    	$("#studio-img").css("transition","7s");
    });
});

// кнопка с ценами при наведении
$(document).ready(function(){
	$(".price-start").mouseover(function(){
    	$(this).css("color","#807b78");
    	$(this).css("border","1px solid #958f8c");
    	$(this).css("transition","1s");
    });
    $(".price-start").mouseout(function(){
    	$(this).css("color","#958f8c");
    	$(this).css("border","1px solid #d4cec8");
    	$(this).css("transition","1s");
    	$(this).css("background","#fff");
    });
});