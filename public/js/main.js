let fab = document.getElementById("fab");


window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0){
        fab.style.opacity="1";
    } else{
        fab.style.opacity="0";
    }
});