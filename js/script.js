function destaqueLeft(){
    var corola = document.getElementById("corolla");
    var jeep = document.getElementById("jeep");

   var estadocorola = corola.style.display = "none" 
   var estadadojeep =jeep.style.display = "block"

    
   if (estadocorola === "none"){
        jeep.style.display = "block"
   }else{
        corola.style.display = "block" 
        jeep.style.display = "none"
   }

}


function destaqueright (){
    var corola = document.getElementById("corolla");
    var jeep = document.getElementById("jeep");

    
   var estadocorola = corola.style.display = "none" 
   var estadadojeep =jeep.style.display = "block"

     
   if (estadadojeep === "none"){
    jeep.style.display = "block"
}else{
    corola.style.display = "block" 
    jeep.style.display = "none"
}
}

destaqueright();








function creta(){

    var creta_frente = document.getElementById("creta-frente");
    var creta_fundo =  document.getElementById("creta-fundo");
    var creta_interna = document.getElementById("creta-interna");
    var creta_lado = document.getElementById("creta-lado");

    var creta = creta_frente.style.display = "block";
    var creta_f = creta_fundo.style.display = "none";
    var creta_i = creta_interna.style.display = "none";
    var creta_l = creta_lado.style.display = "none";
    

    if (creta === "block"){
        creta_frente.style.display = "none";
        creta_fundo.style.display = "block";
    }else{
        creta_frente.style.display = "none";
        creta_fundo.style.display = "none";
        creta_i = creta_interna.style.display = "none";
    }
}


