// ---------------------- VARIABLES -----------------------
// ----- GENERAL -----
// Noms Ressources Shop
var ressource1Shop = "Os";
var ressource2Shop = "Pierre";
var ressource3Shop = "Métal";
// Noms Items Shop
var item1Shop = "Hâche";
var item2Shop = "Pioche";
var item3Shop = "Lance";

// ----- SHOP ------  *

// BOUTON ITEMS LVL
// Bouton Item1
var affichageNomBoutonItem1Lvl1 = document.getElementById("nom-item1-lvl1-bouton-shop");
var affichageNomBoutonItem1Lvl2 = document.getElementById("nom-item1-lvl2-bouton-shop");
var affichageNomBoutonItem1Lvl3 = document.getElementById("nom-item1-lvl3-bouton-shop");
// Bouton Item2
var affichageNomBoutonItem2Lvl1 = document.getElementById("nom-item2-lvl1-bouton-shop");
var affichageNomBoutonItem2Lvl2 = document.getElementById("nom-item2-lvl2-bouton-shop");
var affichageNomBoutonItem2Lvl3 = document.getElementById("nom-item2-lvl3-bouton-shop");
// Bouton Item3
var affichageNomBoutonItem3Lvl1 = document.getElementById("nom-item3-lvl1-bouton-shop");
var affichageNomBoutonItem3Lvl2 = document.getElementById("nom-item3-lvl2-bouton-shop");
var affichageNomBoutonItem3Lvl3 = document.getElementById("nom-item3-lvl3-bouton-shop");

// AFFICHAGE ITEMS LVLS
// Affichage Noms Items
var affichageNomItem1Shop = document.getElementById("nom-item1-shop");
var affichageNomItem2Shop = document.getElementById("nom-item2-shop");
var affichageNomItem3Shop = document.getElementById("nom-item3-shop");
// Affichage Prix Item1
var affichagePrixItem1Lvl1 = document.getElementById("prix-item1-lvl1-bouton-shop");
var affichagePrixItem1Lvl2 = document.getElementById("prix-item1-lvl2-bouton-shop");
var affichagePrixItem1Lvl3 = document.getElementById("prix-item1-lvl3-bouton-shop");
// Affichage Prix Item2
var affichagePrixItem2Lvl1 = document.getElementById("prix-item2-lvl1-bouton-shop");
var affichagePrixItem2Lvl2 = document.getElementById("prix-item2-lvl2-bouton-shop");
var affichagePrixItem2Lvl3 = document.getElementById("prix-item2-lvl3-bouton-shop");
// Affichage Prix Item3
var affichagePrixItem3Lvl1 = document.getElementById("prix-item3-lvl1-bouton-shop");
var affichagePrixItem3Lvl2 = document.getElementById("prix-item3-lvl2-bouton-shop");
var affichagePrixItem3Lvl3 = document.getElementById("prix-item3-lvl3-bouton-shop");

// PRIX ITEMS LVLS 
// Prix Item1 
// Prix Item1 Lvl1
var prixItem1Lvl1 = 200;
// Prix Item1 Lvl2
var prix1Item1Lvl2 = 400;
var prix2Item1Lvl2 = 200;
// Prix Item1 Lvl3
var prix1Item1Lvl3 = 600;
var prix2Item1Lvl3 = 400;

// Prix Item2
// Prix Item2 Lvl1
var prixItem2Lvl1 = 200;
// Prix Item2 Lvl2
var prix1Item2Lvl2 = 400;
var prix2Item2Lvl2 = 200;
// Prix Item2 Lvl3
var prix1Item2Lvl3 = 600;
var prix2Item2Lvl3 = 400;

// Prix Item3
// Prix Item3 Lvl1
var prixItem3Lvl1 = 200;
// Prix Item3 Lvl2
var prix1Item3Lvl2 = 400;
var prix2Item3Lvl2 = 200;
// Prix Item3 Lvl3
var prix1Item3Lvl3 = 600;
var prix2Item3Lvl3 = 400;

// MULTIPLICATEURS RESSOURCES
// Multiplicateur Item1
var multiplicateur0Shop = 1;
var multiplicateurItem1Lvl1 = 2;
var multiplicateurItem1Lvl2 = 4;
var multiplicateurItem1Lvl3 = 8;
// Multiplicateur Item2
var multiplicateurItem2Lvl1 = 2;
var multiplicateurItem2Lvl2 = 4;
var multiplicateurItem2Lvl3 = 8;
// Multiplicateur Item3
var multiplicateurItem3Lvl1 = 2;
var multiplicateurItem3Lvl2 = 4;
var multiplicateurItem3Lvl3 = 8;

// AFFICHAGE INNER.HTML

// AFFICHAGE SHOP
// Affichage Nom Items
affichageNomItem1Shop.innerHTML = item1Shop;
affichageNomItem2Shop.innerHTML = item2Shop;
affichageNomItem3Shop.innerHTML = item3Shop;

// Affichage Bouton Item 1
// Affichage Bouton Noms Items Lvls
affichageNomBoutonItem1Lvl1.innerHTML = item1Shop + " en " + ressource1Shop;
affichageNomBoutonItem1Lvl2.innerHTML = item1Shop + " en " + ressource2Shop;
affichageNomBoutonItem1Lvl3.innerHTML = item1Shop + " en " + ressource3Shop;
// Affichage  Bouton Prix Item 1
affichagePrixItem1Lvl1.innerHTML = "<p>" + prixItem1Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem1Lvl2.innerHTML = "<p>" + prix1Item1Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item1Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem1Lvl3.innerHTML = "<p>" + prix1Item1Lvl3 + " " + ressource1Shop + "</p><p>" + prix2Item1Lvl3 + " " + ressource2Shop + "</p>";

// Affichage Bouton Item 2
// Affichage Bouton Noms Items Lvls
affichageNomBoutonItem2Lvl1.innerHTML = item2Shop + " en " + ressource1Shop;
affichageNomBoutonItem2Lvl2.innerHTML = item2Shop + " en " + ressource2Shop;
affichageNomBoutonItem2Lvl3.innerHTML = item2Shop + " en " + ressource3Shop;
// Affichage  Bouton Prix Item 1
affichagePrixItem2Lvl1.innerHTML = "<p>" + prixItem2Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem2Lvl2.innerHTML = "<p>" + prix1Item2Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item2Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem2Lvl3.innerHTML = "<p>" + prix1Item2Lvl3 + " " + ressource2Shop + "</p><p>" + prix2Item2Lvl3 + " " + ressource3Shop + "</p>";

// Affichage Bouton Item 3
// Affichage Bouton Noms Items Lvls
affichageNomBoutonItem3Lvl1.innerHTML = item3Shop + " en " + ressource1Shop;
affichageNomBoutonItem3Lvl2.innerHTML = item3Shop + " en " + ressource2Shop;
affichageNomBoutonItem3Lvl3.innerHTML = item3Shop + " en " + ressource3Shop;
// Affichage  Bouton Prix Items Lvls
affichagePrixItem3Lvl1.innerHTML = "<p>" + prixItem3Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem3Lvl2.innerHTML = "<p>" + prix1Item3Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item3Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem3Lvl3.innerHTML = "<p>" + prix1Item3Lvl3 + " " + ressource2Shop + "</p><p>" + prix2Item3Lvl3 + " " + ressource3Shop + "</p>";

// BOUTONS
// Boutons Item1
var boutonItem1Lvl1 = document.getElementById("bouton-item1-lvl1-shop");
var boutonItem1Lvl2 = document.getElementById("bouton-item1-lvl2-shop");
var boutonItem1Lvl3 = document.getElementById("bouton-item1-lvl3-shop");
// Boutons Item2
var boutonItem2Lvl1 = document.getElementById("bouton-item2-lvl1-shop");
var boutonItem2Lvl2 = document.getElementById("bouton-item2-lvl2-shop");
var boutonItem2Lvl3 = document.getElementById("bouton-item2-lvl3-shop");
// Boutons Item3
var boutonItem3Lvl1 = document.getElementById("bouton-item3-lvl1-shop");
var boutonItem3Lvl2 = document.getElementById("bouton-item3-lvl2-shop");
var boutonItem3Lvl3 = document.getElementById("bouton-item3-lvl3-shop");

// ---------------------- FONCTIONS -----------------------

// CLICKERS
// Fonction qui incremante les ressources obtenues
function clickerRessource1Incrementation() {
    compteurRessource1 = compteurRessource1 + 1 * multiplicateur0Shop;
    affichageCompteurRessource1.innerHTML = "<p>" + ressource1Shop + " obtenues : " + compteurRessource1 + "</p>";
    activationItemsShop();
    //if (affichagePrixItem1Lvl1.innerHTML !== "OBTENU") 
}

function clickerRessource2Incrementation() {
    compteurRessource2 = compteurRessource2 + 1 * multiplicateur0Shop;
    affichageCompteurRessource2.innerHTML = "<p>" + ressource2Shop + " obtenues : " + compteurRessource2 + "</p>";
    activationItemsShop();
}

function clickerRessource3Incrementation() {
    compteurRessource3 = compteurRessource3 + 1 * multiplicateur0Shop;
    affichageCompteurRessource3.innerHTML = "<p>" + ressource3Shop + " obtenues : " + compteurRessource3 + "</p>";
    activationItemsShop();
}

// BOUTON ITEMS
// Fonctions qui active/desactive bouton achat objet si assez de ressource / Item1 Lvls
function activationItemsShop() {
    // Item 1
    // Lvl1
    if (affichagePrixItem1Lvl1.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prixItem1Lvl1) {
            boutonItem1Lvl1.disabled = true;
            boutonItem1Lvl1.style.backgroundColor = "red";
        } else {
            boutonItem1Lvl1.disabled = false;
            boutonItem1Lvl1.style.color = "aliceblue";
            boutonItem1Lvl1.style.backgroundColor = "green";
        }
    } else {
        boutonItem1Lvl1.disabled = true;
        boutonItem1Lvl1.style.color = "blue";
        boutonItem1Lvl1.style.backgroundColor = "yellow";
    }
    // Lvl2
    if (affichagePrixItem1Lvl2.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prix1Item1Lvl2 & compteurRessource2 < prix2Item1Lvl2) {
            boutonItem1Lvl2.disabled = true;
            boutonItem1Lvl2.style.backgroundColor = "red";
        } else {
            boutonItem1Lvl2.disabled = false;
            boutonItem1Lvl2.style.color = "aliceblue";
            boutonItem1Lvl2.style.backgroundColor = "green";
        }
    } else {
        boutonItem1Lvl2.disabled = true;
        boutonItem1Lvl2.style.color = "blue";
        boutonItem1Lvl2.style.backgroundColor = "yellow";
    }
    // Lvl3
    if (affichagePrixItem1Lvl3.innerHTML !== "OBTENU") {
        if (compteurRessource2 < prix1Item1Lvl3 & compteurRessource3 < prix2Item1Lvl3) {
            boutonItem1Lvl3.disabled = true;
            boutonItem1Lvl3.style.backgroundColor = "red";
        } else {
            boutonItem1Lvl3.disabled = false;
            boutonItem1Lvl3.style.color = "aliceblue";
            boutonItem1Lvl3.style.backgroundColor = "green";
        }
    } else {
        boutonItem1Lvl3.disabled = true;
        boutonItem1Lvl3.style.color = "blue";
        boutonItem1Lvl3.style.backgroundColor = "yellow";
    }
    // Item 2
    // Lvl1
    if (affichagePrixItem2Lvl1.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prixItem2Lvl1) {
            boutonItem2Lvl1.disabled = true;
            boutonItem2Lvl1.style.backgroundColor = "red";
        } else {
            boutonItem2Lvl1.disabled = false;
            boutonItem2Lvl1.style.color = "aliceblue";
            boutonItem2Lvl1.style.backgroundColor = "green";
        }
    } else {
        boutonItem2Lvl1.disabled = true;
        boutonItem2Lvl1.style.color = "blue";
        boutonItem2Lvl1.style.backgroundColor = "yellow";
    }
    // Lvl2
    if (affichagePrixItem2Lvl2.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prix1Item2Lvl2 & compteurRessource2 < prix2Item2Lvl2) {
            boutonItem2Lvl2.disabled = true;
            boutonItem2Lvl2.style.backgroundColor = "red";
        } else {
            boutonItem2Lvl2.disabled = false;
            boutonItem2Lvl2.style.color = "aliceblue";
            boutonItem2Lvl2.style.backgroundColor = "green";
        }
    } else {
        boutonItem2Lvl2.disabled = true;
        boutonItem2Lvl2.style.color = "blue";
        boutonItem2Lvl2.style.backgroundColor = "yellow";
    }
    // Lvl3
    if (affichagePrixItem2Lvl3.innerHTML !== "OBTENU") {
        if (compteurRessource2 < prix1Item2Lvl3 & compteurRessource3 < prix2Item2Lvl3) {
            boutonItem2Lvl3.disabled = true;
            boutonItem2Lvl3.style.backgroundColor = "red";
        } else {
            boutonItem2Lvl3.disabled = false;
            boutonItem2Lvl3.style.color = "aliceblue";
            boutonItem2Lvl3.style.backgroundColor = "green";
        }
    } else {
        boutonItem2Lvl3.disabled = true;
        boutonItem2Lvl3.style.color = "blue";
        boutonItem2Lvl3.style.backgroundColor = "yellow";
    }
    // Item 3
    // Lvl1
    if (affichagePrixItem3Lvl1.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prixItem3Lvl1) {
            boutonItem3Lvl1.disabled = true;
            boutonItem3Lvl1.style.backgroundColor = "red";
        } else {
            boutonItem3Lvl1.disabled = false;
            boutonItem3Lvl1.style.color = "aliceblue";
            boutonItem3Lvl1.style.backgroundColor = "green";
        }
    } else {
        boutonItem3Lvl1.disabled = true;
        boutonItem3Lvl1.style.color = "blue";
        boutonItem3Lvl1.style.backgroundColor = "yellow";
    }
    // Lvl2
    if (affichagePrixItem3Lvl2.innerHTML !== "OBTENU") {
        if (compteurRessource1 < prix1Item3Lvl2 & compteurRessource2 < prix2Item3Lvl2) {
            boutonItem3Lvl2.disabled = true;
            boutonItem3Lvl2.style.backgroundColor = "red";
        } else {
            boutonItem3Lvl2.disabled = false;
            boutonItem3Lvl2.style.color = "aliceblue";
            boutonItem3Lvl2.style.backgroundColor = "green";
        }
    } else {
        boutonItem3Lvl2.disabled = true;
        boutonItem3Lvl2.style.color = "blue";
        boutonItem3Lvl2.style.backgroundColor = "yellow";
    }
    // Lvl3
    if (affichagePrixItem3Lvl3.innerHTML !== "OBTENU") {
        if (compteurRessource2 < prix1Item3Lvl3 & compteurRessource3 < prix2Item1Lvl3) {
            boutonItem3Lvl3.disabled = true;
            boutonItem3Lvl3.style.backgroundColor = "red";
        } else {
            boutonItem3Lvl3.disabled = false;
            boutonItem3Lvl3.style.color = "aliceblue";
            boutonItem3Lvl3.style.backgroundColor = "green";
        }
    } else {
        boutonItem3Lvl3.disabled = true;
        boutonItem3Lvl3.style.color = "blue";
        boutonItem3Lvl3.style.backgroundColor = "yellow";
    }
}


    // Fonction achat outil
    function boutonItem1Lvl1Achat() {
        compteurRessource1 = compteurRessource1 - prixItem1Lvl1;
        affichageCompteurRessource1.innerHTML = "<p> Os ramassés : " + compteurRessource1 + "</p>";
        affichagePrixItem1Lvl1.innerHTML = "OBTENU";
        boutonItem1Lvl1.disabled = true;
        boutonItem1Lvl1.style.color = "orange";
        boutonItem1Lvl1.style.border = "inherit";
        activationItemsShop();
    }
    
    // Appel FUNCTION 

    // Sans activation / désactivation bouton items
    activationItemsShop();
    // Fonctions Boutons Clickers
    clickerRessource1.onclick = clickerRessource1Incrementation;
    clickerRessource2.onclick = clickerRessource2Incrementation;
    clickerRessource3.onclick = clickerRessource3Incrementation;
    // Fonctions Boutons Achat
    boutonItem1Lvl1.onclick = boutonItem1Lvl1Achat;