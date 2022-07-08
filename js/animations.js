let animate = document.querySelectorAll(".animado");

function Scroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animate.length; i++ ){
        let upScroll = animate[i].offsetTop;
        if(upScroll - 500 < scrollTop){
            animate[i].style.opacity = 1;
            animate[i].classList.add("loook");
        }
    }
}

window.addEventListener('scroll', Scroll);