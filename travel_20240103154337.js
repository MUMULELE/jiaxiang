$(function(){
	var currentIndex=0;
	var $header_menu=$("#header_menu_ul>.header_menu_li");
	var $passage=$("#passage>div");
	
	$header_menu.eq(0).addClass("f");
	$header_menu.click(function(){
		$passage[currentIndex].style.display="none";
		$header_menu.removeClass("f");
		$(this).addClass("f");
		var index=$(this).index();
		 $passage[index].style.display="block";
		currentIndex=index;
	});
	$("#msj_li4")[0].style.width="830px";
		
	$("#re_log").click(function(){
		window.open("travel.html?login=null");
		$(".card_p>a").attr("href","travel.html?login=null&index=1");
		
	})	
	$("#msj4")[0].style.opacity="1";
	
	// $("#msj4")[0].style.display="block";
	$(".msj_li").not($("#msj_li4")).mouseenter(function(){
		$("#msj_li4")[0].style.width="88px";
		// $("#msj4")[0].style.display="none";	
		$("#msj4")[0].style.opacity="0";
		var index=$(this).index();
		$(".msj_li")[index].style.width="800px";
	
		$(".msj_li>.msj_content")[index].style.opacity="1";
	}).mouseleave(function(){
		var index=$(this).index();
		$("#msj_li4")[0].style.width="800px";
			
		$("#msj4")[0].style.opacity="1";
		// $("#msj4")[0].style.display="block";
		$(".msj_li")[index].style.width="88px";
		$(".msj_li>.msj_content")[index].style.opacity="0";
	})
	
	var index=GetQueryString('index');
	
	if(index>=0&&index<=3){
			$header_menu.removeClass("f");
			$(".header_menu_li").eq(index).addClass("f");
			$passage[currentIndex].style.display="none";
			$passage[index].style.display="block";
	}
	//获取主页传递的页面参数
	function GetQueryString(name) {
	      var sValue = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)", "i"));
	                 return sValue ? decodeURIComponent(sValue[1]) : decodeURIComponent(sValue)
	  
	}
})