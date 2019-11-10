$(function() {
	$("#header").load("../html/header.html")
	$("#footer").load("../html/footer.html")

//	$.ajax({
//		type: "get",
//		url: "../js/life.json",
//		//请求时间
//		//timeout:3000
//		async: true,
//		dataType: "json",
//		success: function(data) {
//			//			
//			$.each(data, function(i) {
//				$.each(data[i], function(j) {
////					console.log(data[i][j].imgs.length)
//					$(`
//					
//					`).eq(i).appendTo(".itemList")
//				})
//			});
//		},
//		error: function(err) {
//			console.log(err)
//		}
//	});


    $.get("../js/cloth.json",function(data){
    	console.log(data)
    	for(var i=0; i<data.length; i++){
    		var html = ""
    		for(var j=0; j<data[i].length; j++){
    			html +=`
    			   <div class="item">
						<div class="m-product showScene">
							<div class="hd">
								<img class="img img-lazyload img-lazyloaded" src="${data[i][j].imgs}" />
								<img class="imgScene img-lazyload img-lazyloaded" src="${data[i][j].imgh}" />
								<img class="promoLogo" src="../img/sh.png" />
								<div class="promBanner">
									<div class="promTitle">
										<div class="title">
											<span>好货内部价</span>
										</div>
										<div class="subTitle">
											<span>￥399</span>
									</div>					
								</div>
								<div class="promContent">仅剩3天</div>
								</div>

								</div>
								<div class="hd">
								<div class="prdtTags">
									<span class="m-itemTag">${data[i][j].tag}</span>
								</div>
								<h4 class="name">
									<span>${data[i][j].name}</span>
								</h4>
								<p class="price">
									<span>${data[i][j].price}</span>
									<span class="counterPrice">${data[i][j].count}</span>
								</p>
								<div>
									<hr>
									<p class="desc">${data[i][j].react}</p>
								</div>
							</div>
						</div>
					</div>	

    			`
    		}
    		$(".itemList").eq(i).html(html);
    	}
    	
    })
    

})
