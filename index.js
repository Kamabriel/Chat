let qte=1;
function plus(){
    qte++;
    document.getElementById("qte").innerText=qte;
}
function moins(){
    if(qte>1){
        qte--;
        document.getElementById("qte").innerText=qte;
    }
}
function acheter(){
    alert("Merci pour votre achat de " + qte + " article(s)");
    // document.getElementById("message").innerText = "Merci pour votre achat de " + qte + " article(s)";   
}