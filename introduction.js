$(function(){
	var currentIndex=0;
	var $left_menu=$("#left_menu_ul>.left_menu_li");
	var $passage=$("#passage>.x");
	
	$left_menu.click(function(){
		$("#passage0")[0].style.display="none";
		$passage[currentIndex].style.display="none";
		$left_menu.removeClass("focus");
		$(this).addClass("focus");
		var index=$(this).index();
		 $passage[index].style.display="block";
		currentIndex=index;
		
	});
	
	$("#re_log").click(function(){
		window.open("introduction.html?login=null");
	})	
	
	var index=GetQueryString('index');

	if(index>=0&&index<=4){
		// if(index!=1){
			$(".left_menu_li").eq(index).addClass("focus");
			$("#passage0")[0].style.display="none";
			$passage[index].style.display="block";
		// }
	}
	
	var lIndex=0;
	var $slec=$("#passage0>div");
	$slec.click(function(){
		$("#passage0")[0].style.display="none";
		$passage[lIndex].style.display="none";
		$left_menu.removeClass("focus");
		var index=$(this).index();
		$(".left_menu_li").eq(index-1).addClass("focus");
		 $passage[index-1].style.display="block";
		lIndex=index;
	});
	
	//获取主页传递的页面参数
	function GetQueryString(name) {
	      var sValue = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)", "i"));
	                 return sValue ? decodeURIComponent(sValue[1]) : decodeURIComponent(sValue)
	  
	}
	// $(".p4_bg>li").click(function(){
	// 	$("#p4_card_text")[0].style.display="block";
	// })
})