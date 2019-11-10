window.onload = function() {
	$("#header").load("../html/header.html")
	$("#footer").load("../html/footer.html")
	//$(".tuijian").click(function() {
	//	$(this).addClass("active").siblings().removeClass("active")
	//	$(this).parent().parent().siblings().eq($(this).index()).addClass("active").siblings().removeClass("active")
	////  $(".showContainer").addClass("active").siblings().removeClass("active")
	//})
	//选项卡
	var tuijian = document.getElementsByClassName("tuijian");
	var show = document.getElementsByClassName("showContainer");
	for(let x = 0; x < tuijian.length; x++) {
		tuijian[x].onclick = function() {
			for(let y = 0; y < tuijian.length; y++) {
				show[y].classList.remove("active")
				tuijian[y].classList.remove("active")
			}
			show[x].classList.add("active")
			tuijian[x].classList.add("active")
		}
	}
	
}