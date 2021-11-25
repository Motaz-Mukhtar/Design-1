document.forms[1].onsubmit = (e) => {
    e.preventDefault();
};


let scroll = document.querySelector(".scroll");

console.log(scroll);



scroll.onclick = function () {
    window.scrollTo(0, 0)
}

if (window.pageYOffset === 0) {
    scroll.style.cssText = "display: none; cursor: auto;"
}

window.onscroll = function () {
    if (window.pageYOffset <= 500) {
        scroll.style.cssText = "opacity: 0; cursor: auto;";
    }
    else {
        scroll.style.cssText = "opacity: 1; background-color: #0ac6fc;";
    }
}



