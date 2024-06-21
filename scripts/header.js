
   export default function scrollHandler() {
    if (window.scrollY > 164) {
        document.getElementById('nav').classList.add('header-on-scroll');
    } 
    else{
        document.getElementById('nav').classList.remove('header-on-scroll');
    }

}

