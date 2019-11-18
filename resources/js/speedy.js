
function hideNavigation(){
    //console.log("hello");
    let nav = document.getElementById("main-menu");
    if (nav.className === "main-nav"){
        nav.className += " responsive-menu";
    }
    else{
        nav.className = "main-nav";
    }
}