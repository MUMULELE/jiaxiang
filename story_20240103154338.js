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
	
	$("#re_log").click(function(){
		window.open("story.html?login=null");
	})
	var currentImg=0;
	var $hr_li=$("#hr_img>.hr_li");
	var $hr_content=$("#hr_content ul>.hr_text");
	$hr_li.click(function(){
		$hr_content[currentImg].style.display="none";
		var index=$(this).index();
		$hr_content[index].style.display="block";
		currentImg=index;
	});
	
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