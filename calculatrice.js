let ecran = document.getElementById("ecran");

console.log(ecran);
console.log("js fonctionne !");

function ajouter(valeur){
   let dernier = ecran.value.slice(-1);
   if(["+", "-", "*", "/", "%"].includes(dernier) && ["+", "-", "*", "/", "%"].includes(valeur)){
    return;
   }
   ecran.value +=valeur;
}

function calculer(){
    try{
        let resultat = Function(" return " + ecran.value)();
        ecran.value = resultat;
    } catch (e) {
        ecran.value = "Erreur";
    }
}

function effacer(){
    ecran.value = "";
}

function supprimer(){
    ecran.value = ecran.value.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    let touche = event.key;
    if(!isNaN(touche)||["+", "-", "*", "/", "%"].includes(touche)){
        ajouter(touche);
    } else if (touche=== "Enter"){
        calculatrice();
    } else if(touche==="Backspace"){
        supprimer();
    }
})