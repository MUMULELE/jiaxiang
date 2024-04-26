$(function(){
	var $f1=$("#f1");
	var $s1=$("#s1");
	var $f2=$("#f2");
	var $s2=$("#s2");
	var $f3=$("#f3");
	var $s3=$("#s3");
	var $f4=$("#f4");
	var $s4=$("#s4");
	modelToggle($f1,$s1);
	modelToggle($f2,$s2);
	modelToggle($f3,$s3);
	modelToggle($f4,$s4);
	var x;

	// 导航栏下拉菜单
	function modelToggle(parent,childer){
		parent.mouseenter(function(){
			childer.slideDown(100);
		}).mouseleave(function(){
			childer.slideUp(1);
		})
	}
	// 回到顶部
	$("#hddb").click(function(){
		var $body=$(document.body);
		var $html=$(document.documentElement);
		
		var offset =$body.scrollTop()+$html.scrollTop();
		if(offset==0)
			return;
		var totaltime=300;
		var intervalTime=30;
		var itemOffset=offset/(totaltime/intervalTime);
		var timer= setInterval(function(){
			offset-=itemOffset;
			if(offset<0){
				offset=0;
				clearInterval(timer);
			}
			$('html,body').scrollTop(offset);	
			
		},intervalTime)
		 // document.documentElement.scrollTop=0;
	});
	
	
	// 获取登录返回值
	var login=GetQueryString('login');
	
	
	// console.log(login);
	if(login=="true"){
		$("#pre_navbar")[0].style.display="none";
		$("#de_navbar")[0].style.display="block";
		
		var $li=$('<li class="lbar_li" id="re_log"></li>').append('<i class="fas fa-undo"></i>').append('<p>退出登入</p>').prependTo("#lbar_ul");
		
		$("#f0>a").attr("href","index.html?login=true");
		$("#f1>a").attr("href","introduction.html?login=true");
		$("#f2>a").attr("href","culture.html?login=true");
		$("#f3>a").attr("href","travel.html?login=true");
		$("#f4>a").attr("href","story.html?login=true");
		$("#f5>a").attr("href","share.html?login=true");
		$(".card_p>a").attr("href","travel.html?login=ture&index=1");
}else if(login=="null"){
	$("#pre_navbar")[0].style.display="flex";
	$("#de_navbar")[0].style.display="none";
	
	$("#re_log").remove();
	
	$("#f0>a").attr("href","index.html?login=null");
	$("#f1>a").attr("href","introduction.html?login=null");
	$("#f2>a").attr("href","culture.html?login=null");
	$("#f3>a").attr("href","travel.html?login=null");
	$("#f4>a").attr("href","story.html?login=null");
	$("#f5>a").attr("href","share.html?login=null");
	$(".card_p>a").attr("href","travel.html?login=null&index=1");
	
}

	$("#re_log").click(function(){
		login="null";
		$("#pre_navbar")[0].style.display="block";
		$("#de_navbar")[0].style.display="none";
		$("#re_log").remove();
		return login;
	})
	
	// // 跳转到绿城简介
	// getTorque($("#s1>.second_li"),url);
	$("#s1>.second_li").click(function(){
	   var index=$(this).index();
	   var url="./introduction.html?index="+index+"&login="+login;
	   window.location.href=url;
	});
	// 跳转到绿城文化
	$("#s2>.second_li").click(function(){
	   var index=$(this).index();
	   var url="./culture.html?index="+index+"&login="+login;
	   window.location.href=url;
	});
	// 跳转到畅游绿城
	$("#s3>.second_li").click(function(){
	   var index=$(this).index();
	   var url="./travel.html?index="+index+"&login="+login;
	   window.location.href=url;
	});
	// 跳转到绿城故事
	$("#s4>.second_li").click(function(){
	   var index=$(this).index();
	   var url="./story.html?index="+index+"&login="+login;
	   window.location.href=url;
	});
	
	// 获取登录页面传过来的值
	function GetQueryString(name) {
	       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	       var r = window.location.search.substr(1).match(reg);
	       if (r!=null)
	            return (r[2]);
	            return null;
	}
	
	
})