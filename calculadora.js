    //Pegando numero da tela
function Converter(){
    var v1 = parseFloat(document.getElementById("n1").value);
    var v2 = parseFloat(document.getElementById("n2").value);
    var v3 = parseFloat(document.getElementById("n3").value);
   
    // Fazendo o calculo 
var total = parseInt((v1 + v2 + v3) / 3);
    
    //Colocando no site
var elementomedia = document.getElementById("total");
    if (total > 5){
        elementomedia.innerHTML = "Passou! Sua nota foi " + total;
    }else{
        elementomedia.innerHTML = "Reprovado! Sua nota foi " + total;
    }
}