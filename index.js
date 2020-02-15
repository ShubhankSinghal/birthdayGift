var t=null;
var displayImgCount = 0;


window.onload = function(){
    cycleImage();
}

function cycleImage(){
    if (displayImgCount !== 0) {
        document.getElementById(displayImgCount).style.display = "none";
    }
    displayImgCount = displayImgCount === 2 ? 1 : displayImgCount + 1;
    document.getElementById(displayImgCount).style.display = "block";
    if(t){
        clearTimeout(t);
        t = null;
    }
    t=setTimeout(cycleImage, 1000);
}




if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage('resize', "*");
}

window.open = function() {};
window.print = function() {};
// Support hover state for mobile.
if (false) {
    window.ontouchstart = function() {};
}