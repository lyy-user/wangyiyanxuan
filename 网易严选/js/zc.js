// swiper框架
var swiper1 = new Swiper('.swiper1', {
	autoplay: {
		delay: 3000
	},
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});
// json
ajax("GET", "../js/last.json", function (str) {
	var txt = JSON.parse(str)
	console.log(txt)
	var x=txt.Data
		for(var i in txt){
			// console.log(txt)
			var x=txt[i].Data.title
			console.log(x)
			var y=txt[i].Data.content
			console.log(y)
			let list1=` <div class="m-project">
			<div class="m-productWrap">
			<header class="m-title">
			  <div class="u-line">
				<div class="cont">
				  <img src="${x.img1}" alt="" class="icon">
	  <p class="name">${x.p1}</p>
				</div>
			  </div>
			</header>
			<ul class="m-itemList">
			  
			</ul>
			</div>
			</div>
		  `
		 $(".m-projects").append(list1)
		}

		for(var i in y){
			console.log(y[i])
			list2=`<li class="${y[i].class} ">
		 	<div class="m-focusItem">
		 	  <div class="u-pic">
				<img src="${y[i].img1}" alt="">
		 	  </div>
	     	  <div class="m-info">
		 		<p class="u-name">${y[i].name}</p>
		 		<p class="u-desc">${y[i].desc}</p>
		 		<div class="m-progress">
		 		  <div class="m-progressBar m-progressBarSmall">
		 			<div class="u-bar">
		 			  <div class="progress" style="width:${y[i].width}"></div>
		 			  <span class="u-percent">
		 			  ${y[i].percent}
		 			  </span>
		 			  </div>
		 		  </div>
				  
		 		  <ul class="m-detail-small">
		 			<li>
		 			  <p class="text">
		 				<span>${y[i].price1}</span>
		 			  </p>
		 			  <p class="desc">${y[i].price2}</p>
		 			</li>
		 			<li>
		 			  <p class="text">
		 				<span>${y[i].num1}</span>
		 			  </p>
		 			  <p class="desc">${y[i].num2}</p>
		 			</li>
		 			<li>
		 			  <p class="text">
		 				<span>${y[i].time1}</span>
		 			  </p>
				  <p class="desc">${y[i].time2}</p>
		 			</li>
		 		  </ul>
		 		</div>
		 	  </div>
		 	</div>
		   </li>`
		   $(".m-itemList").append(list2)
		}


		// for(var i in y){
		// 	list2=`<li class="${y[i].class} ">
		// 	<div class="m-focusItem">
		// 	  <div class="u-pic">
		// 		<img src="${y[i].img1}" alt="">
		// 	  </div>
		// 	  <div class="m-info">
		// 		<p class="u-name">${y[i].name}</p>
		// 		<p class="u-desc">${y[i].desc}</p>
		// 		<div class="m-progress">
		// 		  <div class="m-progressBar m-progressBarSmall">
		// 			<div class="u-bar">
		// 			  <div class="progress" style="width:${y[i].width}"></div>
		// 			  <span class="u-percent">
		// 			  ${y[i].percent}
		// 			  </span>
		// 			  </div>
		// 		  </div>
				  
		// 		  <ul class="m-detail-small">
		// 			<li>
		// 			  <p class="text">
		// 				<span>${y[i].price1}</span>
		// 			  </p>
		// 			  <p class="desc">${y[i].price2}</p>
		// 			</li>
		// 			<li>
		// 			  <p class="text">
		// 				<span>${y[i].num1}</span>
		// 			  </p>
		// 			  <p class="desc">${y[i].num2}</p>
		// 			</li>
		// 			<li>
		// 			  <p class="text">
		// 				<span>${y[i].time1}</span>
		// 			  </p>
		// 			  <p class="desc">${y[i].time2}</p>
		// 			</li>
		// 		  </ul>
		// 		</div>
		// 	  </div>
		// 	</div>
		//   </li>`
		//   $(".m-itemList").append(list2)
		// }
		


})
