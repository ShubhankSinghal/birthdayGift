var t=null;
var displayImgCount = 0;

var i = 0;
var txt = 'HAPPY BIRTHDAY';
var txt1= "PAKHHHHHHH"
var speed = 200;

window.onload = function(){
    cycleImage();
    typeWriter();
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



function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


