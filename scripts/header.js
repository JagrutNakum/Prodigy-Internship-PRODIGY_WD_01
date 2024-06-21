
   export default function scrollHandler() {
    if (window.scrollY > 164) {
        console.log('function executed!')
        document.getElementById('header').classList.add('header-on-scroll');
    } 
    else{
        document.getElementById('header').classList.remove('header-on-scroll');
    }

}

