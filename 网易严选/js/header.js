var a = -1
var bdlist = document.getElementsByClassName("uul")[0]
ajax("../js/头部分类.json", function (str) {
    var arr = JSON.parse(str)
    for (let i = 0; i < arr.length; i++) {
        var oLi = document.createElement("li")
        oLi.className = "lli"
        if (i == 0) {
            oLi.innerHTML = `<a id="aa">${arr[i].title}</a>`
            bdlist.appendChild(oLi)
        } else {
            oLi.innerHTML = `<a href="${arr[i].href}" class="a">${arr[i].title}</a>`
            bdlist.appendChild(oLi)
        }
        if (i > 0 && i < 9) {
            var oDiv1 = document.createElement("div")
            oDiv1.className = "menu_xl"
            oLi.appendChild(oDiv1)
            for (let j = 0; j < arr[i].fenlei.length; j++) {
                var oDiv2 = document.createElement("div")
                oDiv2.className = "menu_xl_li"
                oDiv2.innerHTML = `
                <p> ${arr[i].fenlei[j].fenlei1}</p>
                `
                oDiv1.appendChild(oDiv2)
                a++
                for (let c = 0; c < arr[i].fenlei[j].image.length; c++) {
                    var ool = document.createElement("ol")
                    ool.className = "olem"
                    ool.innerHTML = `<em>
                <img src="${arr[i].fenlei[j].image[c]}">${arr[i].fenlei[j].fenlei2[c]}
                </em>
                `
                oDiv2.appendChild(ool)
                }
            }
        }
    }
})