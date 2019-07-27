let fab = document.getElementById("fab");

const fabClick = () => {
    console.log("fab");
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 0){
        fab.style.opacity="1";
    } else{
        fab.style.opacity="0";
    }
});