$(function(){
		var login=GetQueryString('login');
		
		if(login=="true"){
				$(".pre_dl")[0].style.display="none";
				$("#de_dl")[0].style.display="block";
		}
		$("#re_log").click(function(){
			window.open("share.html?login=null");
		})
		
		$('#i_li').hover(function(){
			$('#li_m').show();
		},function(){
			$('#li_m').hide();
		})
		// 关注按钮
		gz($("#gz1"));
		gz($("#gz2"));
		gz($("#gz3"));
		gz($("#gz4"));
		// 评论按钮
		iptBtn($("#comment_ipt1"),$("#com_btn"));
		iptBtn($("#comment_ipt2"),$("#com_btn2"));
		iptBtn($("#comment_ipt3"),$("#com_btn3"));
		iptBtn($("#comment_ipt4"),$("#com_btn4"));
		// 评论添加
		commentF($("#com_btn"),"#comment_ul1",$("#comment_ipt1"));
		$("#comment_ul1").delegate("a","click",clickDelete);
		commentF($("#com_btn2"),"#comment_ul2",$("#comment_ipt2"));
		$("#comment_ul2").delegate("a","click",clickDelete);
		commentF($("#com_btn3"),"#comment_ul3",$("#comment_ipt3"));
		$("#comment_ul3").delegate("a","click",clickDelete);
		commentF($("#com_btn4"),"#comment_ul4",$("#comment_ipt4"));
		$("#comment_ul4").delegate("a","click",clickDelete);
		
		// 功能区
		commentClick($("#share_icon1>li"),$("#comment1"));
		commentClick($("#share_icon2>li"),$("#comment2"));
		commentClick($("#share_icon3>li"),$("#comment3"));
		commentClick($("#share_icon4>li"),$("#comment4"));
		
		// 登录按钮 
		$("#dl").click(function(){
			window.location.href="./login.html?";
		})
		// 关注按钮
		function gz(obj){
			var j=0;
			obj.click(function(){
				var index=$(this).index();
				if(login=="null"){
					alert("请登录！！！");
					j=0;
					return false;
				}else{
					if(j==0){
						obj.css({"border":"1px solid #9D9D9D","color":"#9D9D9D"});
						j=1;
					}else if(j==1){
						obj.css({"border":"1px solid #710000","color":"#710000"});
						j=0;
					}
				}
			});
		}
		
		// 按钮和输入框
		function iptBtn(obj1,obj2){
				obj1.focus(function(){
				  // var index=$(this).index();
				  $(this).css({ 'border': '2px solid #710000', 'background': '#fff' });
			}).blur(function(){
				$(this).css({ 'border': '2px solid #fff', 'background': '#F0F1F4' });
				var value=$(this).val();
				if(value==""){
					obj2[0].style.background="rgba(126,0,0,0.6)";
				}else{
					obj2[0].style.backgroundColor="rgba(126,0,0,1)";
				}
			});
		}
		
		// 评论功能
		// obj1点击的按钮，obj2添加评论的ul,ipt读取的评论内容
		function commentF(obj1,obj2,ipt){
			obj1.click(function(){
				obj1[0].style.background="rgba(126,0,0,0.6)";
				var comment=ipt.val();
				if(comment==""){
					return;
				}else{
					var day=new Date();
					var month=day.getMonth()+1;
					var date=day.getDate();
					var $div=$('<div class="comment_text"></div>').append('<span class="comment_name">哗哗</span>').append('<span class="comment_time">'+month+"-"+date+'</span>');
					
					var $p=$('<p class="comment_content"></p>').html(comment);
					var $li=$('<li class="comment_li"></li>').append('<i class="head" id="myhead"></i>').append($div).append($p).append('<a class="remove" id="remove1">删除</a>').prependTo(obj2);
					// $li.append($div).preppendTo("#comment_ul1");
					ipt.val("");
				}
			});
		}
		//功能栏点击
		function commentClick(obj1,obj2){
			var x1=0,x2=0,x3=0;
			obj1.click(function(){
				let index= $(this).index();
				obj1[index].style.color="#9D9D9D";
				if(login=="null"){
					alert("请登录！！！");
					x1=0;
					x2=0;
					x3=0;
					return false;
				}else{
						if(index==0){
							if(x1==0){
								var i=parseInt($(this).find("span").html())+1;
								obj1[index].style.color="#710000";
								x1=1;
							}else if(x1==1){
								var i=parseInt($(this).find("span").html())-1;
								obj1[index].style.color="#9D9D9D";
								x1=0;
							}
							$(this).find("span").html(i);
						}
						if(index==1){
							if(x2==0){
								obj2[0].style.display="block";
								obj1[index].style.color="#710000";
								x2=1;
							}else if(x2==1){
							    obj2[0].style.display="none";
								obj1[index].style.color="#9D9D9D";
								x2=0;
							}
						}
						if(index==2){
							if(x3==0){
								var i=parseInt($(this).find("span").html())+1;
								obj1[index].style.color="#710000";
								x3=1;
							}else if(x3==1){
							    var i=parseInt($(this).find("span").html())-1;
								obj1[index].style.color="#9D9D9D";
								x3=0;
							}
							$(this).find("span").html(i);
						}
					}
			})
		}
		
		//获取主页传递的页面参数
		function GetQueryString(name) {
			  var sValue = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)", "i"));
						 return sValue ? decodeURIComponent(sValue[1]) : decodeURIComponent(sValue)
		  
		}
		// 删除评论
		function clickDelete(){
			var $li=$(this).parent();
			
			if(confirm("确定删除这条评论吗？")){
				$li.remove();
				// var comment_h=obj1.height();
				// var share_li_h=obj2.height();
				// var h=comment_h-200;
				// obj1[0].style.height=h+"px";
			}
			
			return false;
		}
	
})