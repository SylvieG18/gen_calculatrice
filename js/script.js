// declarations des variables
var formCalcul = document.getElementById("calculatrice");   // formulaire
var nbre1 = document.getElementById("nbre1");
var nbre2 = formCalcul.nbre2;
// var operateur = document.getElementById("operation").value;
var resultat = document.getElementById("result");


// cadre rouge si valeur non numérique
function verifNbre1() {
    if (isNaN(nbre1.value) == true){
        nbre1.value = "";
        nbre1.style.border ="2px red solid";
    }else{
        nbre1.style.border ="1px black solid";
    };
}
function verifNbre2() {
    if (isNaN(nbre2.value) == true){
        nbre2.value = "";
        nbre2.style.border ="2px red solid";
    }else{
        nbre2.style.border ="1px black solid";
    };
}



// recuperation du choix d'operation et operation
function choixOp(){
    var numero = operation.selectedIndex;            // n° de l'option sélectionnée
    var op = operation.options[numero].value;         // valeur de l'option
    // ou 
    // var valeur = liste.options[liste.selectedIndex].value;
    console.log(op);
    var calcul;
    var a = parseFloat(nbre1.value);
    var b = parseFloat(nbre2.value);
    if (op == "addition"){
        calcul = a + b;
    } else if (op == "soustraction"){
        calcul = a - b;
    } else if (op == "multiplication"){
        calcul = a * b;
    } else if (op == "division"){
        calcul =  a / b;         
    } else {
        calcul = a % b;
    }
    console.log(calcul);
    resultat.innerHTML = calcul;
}

// action au clic
function calc() {
    console.log(nbre1.value);
    console.log(nbre2.value);
    choixOp();
}

//changement en fonction taille ecran
function redim(){
    var textBouton = document.getElementById("bouton");
    if ("matchMedia" in window) {   // détection
// if (window.innerWidth>=900) {
        if(window.matchMedia("(min-width:900px)").matches){
            textBouton.innerHTML = " = ";   
        } else {
            textBouton.innerHTML = "calculer";
        }
    }
}
//  + lie evenement resize à la fonction
window.addEventListener('resize', redim, false);









