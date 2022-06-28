//左侧菜单
$(function(){
	
	//鼠标点击当前背景显示
	$(".menu li a").click(function(){
		$(this).addClass("cur");
		$(this).parent().siblings().children("a").removeClass("cur");
			
		//屏幕滚动速度，与顶端距离
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
			}, 1000);
		return false;
	});
	
	

});