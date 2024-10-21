var prev_creta = document.getElementById("btn_prev_creta");
var next_creta = document.getElementById("btn_next_creta");
var slider_creta = document.querySelectorAll(".img-carro img")

var i = 0

function removerDivCreta() {
    slider_creta.forEach(item => item.classList.remove("on"));
}


function aparecerDivCreta() {
    slider_creta[i].classList.add("on");

}

function next_btn_creta() {
    removerDivCreta()
    if (i + 5 === slider_creta.length - 1) {
        i = 0;
    } else {
        i++;
    }
    aparecerDivCreta()
}

function prev_btn_creta(){
    removerDivCreta()
    if (i === 0) {
        i = slider_creta.length -6;
    } else {
        i--;
    }
    aparecerDivCreta()
}



prev_creta.addEventListener("click", prev_btn_creta);
next_creta.addEventListener("click", next_btn_creta);
