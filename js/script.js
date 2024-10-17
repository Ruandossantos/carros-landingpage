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