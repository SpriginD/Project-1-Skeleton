var x = window.matchMedia("(min-width: 550px)")
var header = document.getElementsByClassName("header")[0]
var content = document.getElementsByClassName("content")[0]

if (x.matches) {
    window.onscroll = function() {scrollFunction()};
} else {
    header.style.height = "100px";
    content.style.marginTop = "0px";
}

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.style.height = "10%";
    } else {
    header.style.height = "20%";
    }

    content.style.marginTop = header.clientHeight+"px";
}