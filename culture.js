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
		window.open("culture.html?login=null");
	})	
	
	cardToggle($("#card1"),$("#card_content1"));
	cardToggle($("#card2"),$("#card_content2"));
	cardToggle($("#card3"),$("#card_content3"));
	cardToggle($("#card4"),$("#card_content4"));
	
	
	function cardToggle(parent,childer){
		parent.mouseenter(function(){
			childer.slideDown(100);
			}).mouseleave(function(){
			childer.slideUp(50);
		})
	}
	
	var index=GetQueryString('index');
	
	if(index>=0&&index<=5){
		// if(index!=1){
			$(".left_menu_li").eq(index).addClass("focus");
			$("#passage0")[0].style.display="none";
			$passage[index].style.display="block";
		// }
	}
	
	// 邕剧视频打开
	$("#yg").click(function(){
		$("#yg_video")[0].style.display="block";
		if($("#yg_videol")[0].paused)
			$("#yg_videol")[0].play();
	});
	
	// 邕剧视频关闭
	$("#yg_close").click(function(){
		$("#yg_video")[0].style.display="none";
		if($("#yg_videol")[0].paused==false)
			$("#yg_videol")[0].pause();
	})
	
	// 丝弦戏打开
	$("#sx").click(function(){
		$("#sx_video")[0].style.display="block";
		if($("#sx_videol")[0].paused)
			$("#sx_videol")[0].play();
	});
	
	// 丝弦戏关闭
	$("#sx_close").click(function(){
		$("#sx_video")[0].style.display="none";
		if($("#sx_videol")[0].paused==false)
			$("#sx_videol")[0].pause();
	})
	//获取主页传递的页面参数
	function GetQueryString(name) {
	      var sValue = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)", "i"));
	                 return sValue ? decodeURIComponent(sValue[1]) : decodeURIComponent(sValue)
	  
	}
});