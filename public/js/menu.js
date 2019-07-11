let menuElement = document.getElementById("menu");
let accessElement = document.getElementById("access");

menuElement.onclick = function () {
    window.scroll(0, 900);
}

accessElement.onclick = function(){
    window.scrollTo(0, document.body.scrollHeight);
}
