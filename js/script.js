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











var prev_btn_destaque = document.getElementById("bar-left");
var netx_btn_destaque = document.getElementById("bar-right");
var slider_destaque = document.querySelectorAll(".carrosdestaque img");


var valordestaque  = 0

function removercldestaqueoff(){
    slider_destaque.forEach(item=> item.classList.remove("destaqueon"))
}

function addcldestaqueon(){
    slider_destaque[valordestaque].classList.add("destaqueon");
}

function prev_sliderdestaqueon(){
    removercldestaqueoff()
    if (valordestaque === 0){
        valordestaque = slider_destaque.length -1
    }else{
        valordestaque --;
    }
    addcldestaqueon()
}


function netx_sliderdestaqueon(){
    removercldestaqueoff()
    if(valordestaque === 0){
        valordestaque = slider_destaque.length -1
    }else{
        valordestaque --;
    }
    addcldestaqueon()
}

prev_btn_destaque.addEventListener("click", prev_sliderdestaqueon)
netx_btn_destaque.addEventListener("click", netx_sliderdestaqueon)