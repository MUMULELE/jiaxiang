$(function(){
	
	$("#re_log").click(function(){
		window.open("index.html?login=null");
	});
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    loop: true,
	    autoplay: 3000,
	    speed: 1000,
	    prevButton: '.swiper-button-prev',
	    nextButton: '.swiper-button-next',
	    effect: 'coverflow',//  effect: 'flip',effect: '',slide', 'fade',cube
	    grabCursor: true,
	    cube: {
	        shadow: false,
	        slideShadows: false,
	        shadowOffset: 20,
	        shadowScale: 0.94
	    }
	});
	
	$(window).scroll(function(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		// console.log(scrollT);
		var backTop1 = $("#news").offset().top - $(window).height()/1.5;
		// console.log(backTop);
		if(scrollT > backTop1){
			$(".a1").addClass("animated bounceInRight show").removeClass("fade");
			$(".a2").addClass("animated bounceInLeft show").removeClass("fade");
			$(".c1").addClass("animated bounceInUp show").removeClass("fade");
			$(".c2").addClass("animated bounceInDown show").removeClass("fade");
			$("#r_content").addClass("animated rubberBand show").removeClass("fade");
		}
		
		var backTop2 = $("#intr_title").offset().top - $(window).height()/1.5;
		if(scrollT > backTop2){
			$(".a3").addClass("animated bounceInLeft show").removeClass("fade");
			$("#zt_li1").addClass("animated bounceInRight show").removeClass("fade");
			$("#zt_li2").addClass("animated bounceInUp show").removeClass("fade");
			$("#zt_li3").addClass("animated bounceInLeft show").removeClass("fade");
			$("#yj_text").addClass("animated bounceInDown show").removeClass("fade");
		}
			var backTop3 = $("#ft_plan2>h2").offset().top - $(window).height()/1.5;	
			if(scrollT > backTop3){
				
				$("#fzmb_li1").addClass("animated bounceInRight show").removeClass("fade");
				$("#fzmb_li2").addClass("animated bounceInUp show").removeClass("fade");
				$("#fzmb_li3").addClass("animated bounceInLeft show").removeClass("fade");
				
			}
			
	});

})