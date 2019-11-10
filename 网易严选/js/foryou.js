$(function(){
	$("#header").load("../html/header.html")
	$("#footer").load("../html/footer.html")
	//严选空间
	$(".tabItem").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		$(this).parent().siblings().eq($(this).index()).addClass("show").siblings().removeClass("show")
	})
	//看看
	var open = true;
	$(".sideBar").click(function(i){
		if (open) {
			$(this).parent().addClass("active")
			
			$(".sideBarInner")[0].innerHTML = "收起>"
			open= false;
		} else{
			$(this).parent().removeClass("active")
			$(".sideBarInner")[0].innerHTML = "看看严选H<br>O<br>M<br>E<br>@<br>酒店其他内容&lt;"
			open = true;
		}
		
	})
	
})