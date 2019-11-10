function ajax(method, url, fn1) {
	var request;
	if (window.XMLHttpRequest) {
		request = new window.XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open(method, url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200) {
				fn1(request.responseText)
			} else {
				console.log("false");
			}
		}
	}
}
