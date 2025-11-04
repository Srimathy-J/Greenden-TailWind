var menu=document.getElementById("menu")

var sidenav=document.getElementById("sidenav")

var closenav=document.getElementById("close")


menu.addEventListener("click",function(){
    sidenav.style.right="0"
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
} )