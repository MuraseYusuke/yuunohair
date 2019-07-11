let menuElement = document.getElementById("menu");
let accessElement = document.getElementById("access");

menuElement.onclick = function () {
    let menu = document.getElementById("contentMenu");
    menu.scrollIntoView(true);
}

accessElement.onclick = function(){
    let access = document.getElementById("contentAccess");
    access.scrollIntoView(true);
}
