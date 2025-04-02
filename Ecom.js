
var sidebar = document.querySelector(".side-bar")
var toggle = document.querySelector(".navbar-menu-toggle")
var closes = document.querySelector(".x-bar")


toggle.addEventListener("click", function () {
    sidebar.style.left = "0px"
})

closes.addEventListener("click", function () {
    sidebar.style.left = "-250px"
})




var entertext = ""
var collects = document.querySelector(".collect")
var searched = document.getElementById("search")
var imagelist = collects.querySelectorAll("div")

searched.addEventListener("keyup",function(){
    
    var entertext = event.target.value.toUpperCase()

    for(i=0;i<imagelist.length;i=i+1){

        var collects = imagelist[i].querySelector("p").textContent

        if(collects.toUpperCase().indexOf(entertext)<0){

            imagelist[i].style.display = "none"
        }
        else{

            imagelist[i].style.display = "block"
        }
    }
})
