import scrollHandler from "./scripts/header.js";

window.addEventListener("scroll", scrollHandler);
// window.addEventListener("resize", handerResize);

// function handerResize(){

//     if (window.innerWidth < 1047) {
//         docu
//     }
// }


document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('three-bars');
    element.onclick = function() {
        myFunction(this);
    };
});

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("verticle-menu").classList.toggle("hide");
  }
