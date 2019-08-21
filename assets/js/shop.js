// ----------------------------------------------------------- SHOP ------  *
// ---------------------- Variables ----------------------

// Noms Ressources Shop (pour futur affichage)
var ressource1Shop = "Os";
var ressource2Shop = "Bois";
var ressource3Shop = "Pierre";
// Noms Items Shop (pour futur affichage)
var item1Shop = "Lance";
var item2Shop = "Hâche";
var item3Shop = "Pioche";

// PRIX Item
//item1 lvl 1
var prixItem1Lvl1 = 2;  // ex : La Hâche en os coûte : 4 os
//item1 lvl 2
var prix1Item1Lvl2 = 2; // ex : La Hâche en pierre coûte : 2 os et 4 pierre 
var prix2Item1Lvl2 = 4; 
//item1 lvl 3
var prix1Item1Lvl3 = 2; 
var prix2Item1Lvl3 = 4; 
//item2 lvl 1
var prixItem2Lvl1 =  2;
//item2 lvl 2
var prix1Item2Lvl2 = 2;
var prix2Item2Lvl2 = 4;
//item2 lvl 3
var prix1Item2Lvl3 = 2;
var prix2Item2Lvl3 = 4;
//item3 lvl1
var prixItem3Lvl1 = 2;
//item3 lvl 2
var prix1Item3Lvl2 = 2;
var prix2Item3Lvl2 = 4;
//item3 lvl 3
var prix1Item3Lvl3 = 2;
var prix2Item3Lvl3 = 4;

// Affichage Noms Items (dans le shop directement) ex: Hache
var affichageNomItem1Shop = document.getElementById("nom-item1-shop");
var affichageNomItem2Shop = document.getElementById("nom-item2-shop");
var affichageNomItem3Shop = document.getElementById("nom-item3-shop");

// BOUTONS (Les boutons représentant les items : il déclenche les achats dans le shop)
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

// Affichage Nom bouton ex:"Hache en Os"
// affichage Nom Item sur bouton Item1
var affichageNomBoutonItem1Lvl1 = document.getElementById("nom-item1-lvl1-bouton-shop");
var affichageNomBoutonItem1Lvl2 = document.getElementById("nom-item1-lvl2-bouton-shop");
var affichageNomBoutonItem1Lvl3 = document.getElementById("nom-item1-lvl3-bouton-shop");
// affichage Nom Item sur bouton Item2
var affichageNomBoutonItem2Lvl1 = document.getElementById("nom-item2-lvl1-bouton-shop");
var affichageNomBoutonItem2Lvl2 = document.getElementById("nom-item2-lvl2-bouton-shop");
var affichageNomBoutonItem2Lvl3 = document.getElementById("nom-item2-lvl3-bouton-shop");
// affichage Nom Item sur bouton Item3
var affichageNomBoutonItem3Lvl1 = document.getElementById("nom-item3-lvl1-bouton-shop");
var affichageNomBoutonItem3Lvl2 = document.getElementById("nom-item3-lvl2-bouton-shop");
var affichageNomBoutonItem3Lvl3 = document.getElementById("nom-item3-lvl3-bouton-shop");

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

//-------------- Affichage INNER.HTML --------------
// Affichage Nom Items
affichageNomItem1Shop.innerHTML = item1Shop;
affichageNomItem2Shop.innerHTML = item2Shop;
affichageNomItem3Shop.innerHTML = item3Shop;

// Affichage sur Bouton

// Affichage Nom sur Bouton
// affichage Nom sur Bouton Item1
affichageNomBoutonItem1Lvl1.innerHTML = item1Shop + " en " + ressource1Shop;
affichageNomBoutonItem1Lvl2.innerHTML = item1Shop + " en " + ressource2Shop;
affichageNomBoutonItem1Lvl3.innerHTML = item1Shop + " en " + ressource3Shop;
// affichage Nom sur Bouton Item2
affichageNomBoutonItem2Lvl1.innerHTML = item2Shop + " en " + ressource1Shop;
affichageNomBoutonItem2Lvl2.innerHTML = item2Shop + " en " + ressource2Shop;
affichageNomBoutonItem2Lvl3.innerHTML = item2Shop + " en " + ressource3Shop;
// affichage Nom sur Bouton Item3
affichageNomBoutonItem3Lvl1.innerHTML = item3Shop + " en " + ressource1Shop;
affichageNomBoutonItem3Lvl2.innerHTML = item3Shop + " en " + ressource2Shop;
affichageNomBoutonItem3Lvl3.innerHTML = item3Shop + " en " + ressource3Shop;

// Affichage Prix sur Bouton  
// affichage Prix sur Bouton Prix Item 1
affichagePrixItem1Lvl1.innerHTML = "<p>" + prixItem1Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem1Lvl2.innerHTML = "<p>" + prix1Item1Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item1Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem1Lvl3.innerHTML = "<p>" + prix1Item1Lvl3 + " " + ressource2Shop + "</p><p>" + prix2Item1Lvl3 + " " + ressource3Shop + "</p>";
// affichage Prix sur Bouton Prix Item 2
affichagePrixItem2Lvl1.innerHTML = "<p>" + prixItem2Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem2Lvl2.innerHTML = "<p>" + prix1Item2Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item2Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem2Lvl3.innerHTML = "<p>" + prix1Item2Lvl3 + " " + ressource2Shop + "</p><p>" + prix2Item2Lvl3 + " " + ressource3Shop + "</p>";
// affichage Prix sur Bouton Prix Item 3
affichagePrixItem3Lvl1.innerHTML = "<p>" + prixItem3Lvl1 + " " + ressource1Shop + "</p>";
affichagePrixItem3Lvl2.innerHTML = "<p>" + prix1Item3Lvl2 + " " + ressource1Shop + "</p><p>" + prix2Item3Lvl2 + " " + ressource2Shop + "</p>";
affichagePrixItem3Lvl3.innerHTML = "<p>" + prix1Item3Lvl3 + " " + ressource2Shop + "</p><p>" + prix2Item3Lvl3 + " " + ressource3Shop + "</p>";

// ---------------------- Fonctions -----------------------

// Fonction qui vérouille ou devérouille l'Item (pour futur achat)

function activationItemsShop() {
    
    // Item1-----------------------------------------------------------------------------------------------
    
    // Item1 Lvl1
    // Si déja OBTENU OU PAS assez de ressources
    if (affichagePrixItem1Lvl1.innerHTML == "OBTENU" || ressource1.innerHTML < prixItem1Lvl1) { 
        boutonItem1Lvl1.disabled = true; // Désactivé
    }
    // Si PAS déja obtenu et assez de ressources
    if (affichagePrixItem1Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML >= prixItem1Lvl1) { 
        boutonItem1Lvl1.disabled = false; // Activé
        boutonItem1Lvl1.style.color = "aliceblue"; 
        boutonItem1Lvl1.style.backgroundColor = "green"; // vert
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem1Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML < prixItem1Lvl1) { 
        boutonItem1Lvl1.disabled = true; // Désactivé
        boutonItem1Lvl1.style.color = "aliceblue"; 
        boutonItem1Lvl1.style.backgroundColor = "red"; // rouge
    }
    
    // Item1 Lvl2
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem1Lvl1.innerHTML !== "OBTENU" || affichagePrixItem1Lvl2.innerHTML !== "OBTENU") {  
        boutonItem1Lvl2.disabled = true; // Désactivé
        boutonItem1Lvl2.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem1Lvl1.innerHTML == "OBTENU" && (ressource1.innerHTML >= prix1Item1Lvl2 && ressource2.innerHTML >= prix2Item1Lvl2)) { 
    boutonItem1Lvl2.disabled = false;
    boutonItem1Lvl2.style.color = "aliceblue";
    boutonItem1Lvl2.style.backgroundColor = "green";
    } 
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem1Lvl2.innerHTML !== "OBTENU" && (ressource1.innerHTML < prix1Item1Lvl2 && ressource2.innerHTML < prix2Item1Lvl2)) { 
        boutonItem1Lvl2.disabled = true; // Désactivé
        boutonItem1Lvl2.style.color = "aliceblue"; 
        boutonItem1Lvl2.style.backgroundColor = "red"; // rouge
    }
    
    // Item1 Lvl3
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem1Lvl2.innerHTML !== "OBTENU" || affichagePrixItem1Lvl3.innerHTML !== "OBTENU") {  
        boutonItem1Lvl3.disabled = true; // Désactivé
        boutonItem1Lvl3.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem1Lvl2.innerHTML == "OBTENU" && ressource2.innerHTML >= prix1Item1Lvl3 && ressource3.innerHTML >= prix2Item1Lvl3) { 
        boutonItem1Lvl3.disabled = false;
        boutonItem1Lvl3.style.color = "aliceblue";
        boutonItem1Lvl3.style.backgroundColor = "green";
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem1Lvl3.innerHTML !== "OBTENU" && ressource2.innerHTML < prix1Item1Lvl3 && ressource3.innerHTML < prix2Item1Lvl3) { 
        boutonItem1Lvl3.disabled = true; // Désactivé
        boutonItem1Lvl3.style.color = "aliceblue"; 
        boutonItem1Lvl3.style.backgroundColor = "red"; // rouge
    }
    
    // Item2-----------------------------------------------------------------------------------------------
    
    // Item2 Lvl1
    // Si déja OBTENU OU PAS assez de ressources
    if (affichagePrixItem2Lvl1.innerHTML == "OBTENU" || ressource1.innerHTML < prixItem2Lvl1) { 
        boutonItem2Lvl1.disabled = true; // Désactivé
    }
    // Si PAS déja obtenu et assez de ressources
    if (affichagePrixItem2Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML >= prixItem2Lvl1) { 
        boutonItem2Lvl1.disabled = false; // Activé
        boutonItem2Lvl1.style.color = "aliceblue"; 
        boutonItem2Lvl1.style.backgroundColor = "green"; // vert
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem2Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML < prixItem2Lvl1) { 
        boutonItem2Lvl1.disabled = true; // Désactivé
        boutonItem2Lvl1.style.color = "aliceblue"; 
        boutonItem2Lvl1.style.backgroundColor = "red"; // rouge
    } 
    
    // Item2 Lvl2
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem2Lvl1.innerHTML !== "OBTENU" || affichagePrixItem2Lvl2.innerHTML !== "OBTENU") {  
        boutonItem2Lvl2.disabled = true; // Désactivé
        boutonItem2Lvl2.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem2Lvl1.innerHTML == "OBTENU" && ressource1.innerHTML >= prix1Item2Lvl2 && ressource2.innerHTML >= prix2Item2Lvl2) { 
        boutonItem2Lvl2.disabled = false;
        boutonItem2Lvl2.style.color = "aliceblue";
        boutonItem2Lvl2.style.backgroundColor = "green";
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem2Lvl2.innerHTML !== "OBTENU" && ressource1.innerHTML < prix1Item2Lvl2 && ressource2.innerHTML < prix2Item2Lvl2) { 
        boutonItem2Lvl2.disabled = true; // Désactivé
        boutonItem2Lvl2.style.color = "aliceblue"; 
        boutonItem2Lvl2.style.backgroundColor = "red"; // rouge
    }
    
    // Item2 Lvl3
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem2Lvl2.innerHTML !== "OBTENU" || affichagePrixItem2Lvl3.innerHTML !== "OBTENU") {  
        boutonItem2Lvl3.disabled = true; // Désactivé
        boutonItem2Lvl3.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem2Lvl2.innerHTML == "OBTENU" && ressource2.innerHTML >= prix1Item2Lvl3 && ressource3.innerHTML >= prix2Item2Lvl3) { 
        boutonItem2Lvl3.disabled = false;
        boutonItem2Lvl3.style.color = "aliceblue";
        boutonItem2Lvl3.style.backgroundColor = "green";
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem2Lvl3.innerHTML !== "OBTENU" && ressource2.innerHTML < prix1Item2Lvl3 && ressource3.innerHTML < prix2Item2Lvl3) { 
        boutonItem2Lvl3.disabled = true; // Désactivé
        boutonItem2Lvl3.style.color = "aliceblue"; 
        boutonItem2Lvl3.style.backgroundColor = "red"; // rouge
    }

    // Item3-----------------------------------------------------------------------------------------------
    
    // Item3 Lvl1
    // Si déja OBTENU OU PAS assez de ressources
    if (affichagePrixItem3Lvl1.innerHTML == "OBTENU" || ressource1.innerHTML < prixItem3Lvl1) { 
        boutonItem3Lvl1.disabled = true; // Désactivé
    }
    // Si PAS déja obtenu et assez de ressources
    if (affichagePrixItem3Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML >= prixItem3Lvl1) { 
        boutonItem3Lvl1.disabled = false; // Activé
        boutonItem3Lvl1.style.color = "aliceblue"; 
        boutonItem3Lvl1.style.backgroundColor = "green"; // vert
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem3Lvl1.innerHTML !== "OBTENU" && ressource1.innerHTML < prixItem3Lvl1) { 
        boutonItem3Lvl1.disabled = true; // Désactivé
        boutonItem3Lvl1.style.color = "aliceblue"; 
        boutonItem3Lvl1.style.backgroundColor = "red"; // rouge
    } 
    
    // Item3 Lvl2
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem3Lvl1.innerHTML !== "OBTENU" || affichagePrixItem3Lvl2.innerHTML !== "OBTENU") {  
        boutonItem3Lvl2.disabled = true; // Désactivé
        boutonItem3Lvl2.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem3Lvl1.innerHTML == "OBTENU" && ressource1.innerHTML >= prix1Item3Lvl2 && ressource2.innerHTML >= prix2Item3Lvl2) { 
        boutonItem3Lvl2.disabled = false;
        boutonItem3Lvl2.style.color = "aliceblue";
        boutonItem3Lvl2.style.backgroundColor = "green";
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem3Lvl2.innerHTML !== "OBTENU" && ressource1.innerHTML < prix1Item3Lvl2 && ressource2.innerHTML < prix2Item3Lvl2) { 
        boutonItem3Lvl2.disabled = true; // Désactivé
        boutonItem3Lvl2.style.color = "aliceblue"; 
        boutonItem3Lvl2.style.backgroundColor = "red"; // rouge
    }
    
    // Item3 Lvl3
    // Si item précédent PAS OBTENU (obligatoire) et Si item PAS déja OBTENU
    if (affichagePrixItem3Lvl2.innerHTML !== "OBTENU" || affichagePrixItem3Lvl3.innerHTML !== "OBTENU") {  
        boutonItem3Lvl3.disabled = true; // Désactivé
        boutonItem3Lvl3.style.backgroundColor = "red"; // rouge
    }
    // Si j'ai OBTENU la précédente ET Si le compteur a les ressources necessaires
    if (affichagePrixItem3Lvl2.innerHTML == "OBTENU" && ressource2.innerHTML >= prix1Item3Lvl3 && ressource3.innerHTML >= prix2Item3Lvl3) { 
        boutonItem3Lvl3.disabled = false;
        boutonItem3Lvl3.style.color = "aliceblue";
        boutonItem3Lvl3.style.backgroundColor = "green";
    }
    // Si PAS déja obtenu et PAS assez de ressources
    if (affichagePrixItem3Lvl3.innerHTML !== "OBTENU" && ressource2.innerHTML < prix1Item3Lvl3 && ressource3.innerHTML < prix2Item3Lvl3) { 
        boutonItem3Lvl3.disabled = true; // Désactivé
        boutonItem3Lvl3.style.color = "aliceblue"; 
        boutonItem3Lvl3.style.backgroundColor = "red"; // rouge
    }
}

// Fonction achat item (qui permet de déclanché le multiplicateur de l'item , de désactivé le bouton afficher "Obtenu à la place du prix")

// fonction achat Item 1
// achat Item 1 Lvl1
    function achatItem1Lvl1() {
        affichagePrixItem1Lvl1.innerHTML = "OBTENU";
        boutonItem1Lvl1.disabled = true;
        boutonItem1Lvl1.style.border = "inherit";
        clickRessource1 = 2;
        ressource1.innerHTML = ressource1.innerHTML - prixItem1Lvl1;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML);
    }
// achat Item 1 Lvl2
    function achatItem1Lvl2() {
        affichagePrixItem1Lvl2.innerHTML = "OBTENU";
        boutonItem1Lvl2.disabled = true;
        boutonItem1Lvl2.style.border = "inherit";
        clickRessource1 = 4;
        ressource1.innerHTML = ressource1.innerHTML - prix1Item1Lvl2;
        ressource2.innerHTML = ressource2.innerHTML - prix2Item1Lvl2;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML)
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
    }
// achat Item 1 Lvl3
    function achatItem1Lvl3() {
        affichagePrixItem1Lvl3.innerHTML = "OBTENU";
        boutonItem1Lvl3.disabled = true;
        boutonItem1Lvl3.style.border = "inherit";
        clickRessource1 = 6;
        ressource2.innerHTML = ressource2.innerHTML - prix1Item1Lvl3;
        ressource3.innerHTML = ressource3.innerHTML - prix2Item1Lvl3;
        activationItemsShop();
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
        compteurRessourcePlateau3 = parseInt(ressource3.innerHTML)
    }
// fonction achat Item 2
// achat Item 2 Lvl1
    function achatItem2Lvl1() {
        affichagePrixItem2Lvl1.innerHTML = "OBTENU";
        boutonItem2Lvl1.disabled = true;
        boutonItem2Lvl1.style.border = "inherit";
        clickRessource2 = 2;
        ressource1.innerHTML = ressource1.innerHTML - prixItem2Lvl1;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML)
    }
// achat Item 2 Lvl2
    function achatItem2Lvl2() {
        affichagePrixItem2Lvl2.innerHTML = "OBTENU";
        boutonItem2Lvl2.disabled = true;
        boutonItem2Lvl2.style.border = "inherit";
        clickRessource2 = 4;
        ressource1.innerHTML = ressource1.innerHTML - prix1Item2Lvl2;
        ressource2.innerHTML = ressource2.innerHTML - prix2Item2Lvl2;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML)
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
    }
// achat Item 2 Lvl3
    function achatItem2Lvl3() {
        affichagePrixItem2Lvl3.innerHTML = "OBTENU";
        boutonItem2Lvl3.disabled = true;
        boutonItem2Lvl3.style.border = "inherit";
        clickRessource2 = 6;
        ressource2.innerHTML = ressource2.innerHTML - prix1Item2Lvl3;
        ressource3.innerHTML = ressource3.innerHTML - prix2Item2Lvl3;
        activationItemsShop();
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
        compteurRessourcePlateau3 = parseInt(ressource3.innerHTML)
    }
// fonction achat Item 3
// achat Item 3 Lvl1
    function achatItem3Lvl1() {
        affichagePrixItem3Lvl1.innerHTML = "OBTENU";
        boutonItem3Lvl1.disabled = true;
        boutonItem3Lvl1.style.border = "inherit";
        clickRessource3 = 2;
        ressource1.innerHTML = ressource1.innerHTML - prixItem3Lvl1;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML);
    }
// achat Item 3 Lvl2
    function achatItem3Lvl2() {
        affichagePrixItem3Lvl2.innerHTML = "OBTENU";
        boutonItem3Lvl2.disabled = true;
        boutonItem3Lvl2.style.border = "inherit";
        clickRessource3 = 4;
        ressource1.innerHTML = ressource1.innerHTML - prix1Item3Lvl2;
        ressource2.innerHTML = ressource2.innerHTML - prix2Item3Lvl2;
        activationItemsShop();
        compteurRessourcePlateau1 = parseInt(ressource1.innerHTML)
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
    }
// achat Item 3 Lvl3
    function achatItem3Lvl3() {
        affichagePrixItem3Lvl3.innerHTML = "OBTENU";
        boutonItem3Lvl3.disabled = true;
        boutonItem3Lvl3.style.border = "inherit";
        clickRessource3 = 6;
        ressource2.innerHTML = ressource2.innerHTML - prix1Item3Lvl3;
        ressource3.innerHTML = ressource3.innerHTML - prix2Item3Lvl3;
        activationItemsShop();
        compteurRessourcePlateau2 = parseInt(ressource2.innerHTML)
        compteurRessourcePlateau3 = parseInt(ressource3.innerHTML)
    }


    //------Appel FONCTION----------
    // Sans activation
    activationItemsShop();
    // Avec activation

    // Fonctions Boutons Achat
    //item1
    boutonItem1Lvl1.onclick = achatItem1Lvl1;
    boutonItem1Lvl2.onclick = achatItem1Lvl2;
    boutonItem1Lvl3.onclick = achatItem1Lvl3;
    //item2
    boutonItem2Lvl1.onclick = achatItem2Lvl1;
    boutonItem2Lvl2.onclick = achatItem2Lvl2;
    boutonItem2Lvl3.onclick = achatItem2Lvl3;
    //item3
    boutonItem3Lvl1.onclick = achatItem3Lvl1;
    boutonItem3Lvl2.onclick = achatItem3Lvl2;
    boutonItem3Lvl3.onclick = achatItem3Lvl3;


    //teste achat maison

    //fonction qui permet d'appeler le changement de niveau
function clickerMaison(bgEre) {
    console.log(maisonPrix1);
        //si tu trouvre une div avec un class qui est maison    
        if (bgEre.target.getAttribute("class") == "maison") {
            
            if (bgEre.target.getAttribute("class", 'maison') && compteurRessourcePlateau1 >= maisonPrix1 && compteurRessourcePlateau2 >= maisonPrix2 && compteurRessourcePlateau3 >= maisonPrix3 && compteurChangementMaison <= 3 ) {
                    compteurChangementMaison = compteurChangementMaison + 1;
                    changeNiveauMaison ();
            }
        }

        else if (bgEre.target.getAttribute("class") == "maison1") {
            
            if (bgEre.target.getAttribute("class", 'maison1') && compteurRessourcePlateau1 >= maisonPrix1 && compteurRessourcePlateau2 >= maisonPrix2 && compteurRessourcePlateau3 >= maisonPrix3 && compteurChangementMaison <= 3 ) {
                    compteurChangementMaison = compteurChangementMaison + 1;
                    changeNiveauMaison ();
            }
        }
        eventConstruct = true;
        incrConstruction();
        console.log(constructions);   
} bgEre.onclick = clickerMaison;

//générateur de nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var randTab = 0;

//fonction de changement de niveau des habitation
function changeNiveauMaison () {
    for (item of bgEre.children ) {
        if (item.classList.contains("maison") || item.classList.contains("maison1")) {
            if (item.classList.contains("maison") && compteurChangementMaison == 1) {
                
                item.classList.remove("maison");
                item.classList.toggle("maison1");

                compteurRessourcePlateau1 = compteurRessourcePlateau1 - maisonPrix1;
                compteurRessourcePlateau2 = compteurRessourcePlateau2 - maisonPrix2;
                compteurRessourcePlateau3 = compteurRessourcePlateau3 - maisonPrix3;
                maisonPrix1 = maisonPrix1 * 2;
                maisonPrix2 = maisonPrix2 * 2;
                maisonPrix3 = maisonPrix3 * 2;

                maisonFixe = maisonFixe + 1 ; 
            }
            else if (item.classList.contains("maison1") && compteurChangementMaison == 2) {
                
                compteurRessourcePlateau1 = compteurRessourcePlateau1 - maisonPrix1;
                compteurRessourcePlateau2 = compteurRessourcePlateau2 - maisonPrix2;
                compteurRessourcePlateau3 = compteurRessourcePlateau3 - maisonPrix3;
                maisonPrix1 = maisonPrix1 * 2;
                maisonPrix2 = maisonPrix2 * 2;
                maisonPrix3 = maisonPrix3 * 2;
                
                item.classList.remove("maison1");
                item.classList.toggle("maison2");

                randTab = parseInt(getRandomArbitrary(0, 10));

                if (bgEre.children[randTab].classList.contains("vide") && maisonFixe < 5) {
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0 ;

                }

                else if (bgEre.children[randTab] != bgEre.children[randTab].classList.contains("vide")&& maisonFixe < 5){
                    randTab = parseInt(getRandomArbitrary(0, 10));
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0 ;
                }     
            }
        } 
        prixMaison.innerHTML = maisonPrix1+ " : <strong>os</strong> <br>" +maisonPrix2+ " : <strong>bois</strong> <br>" +maisonPrix3+  " : <strong>pierre</strong> <br>" ;                
    }
    ressource1.innerHTML = compteurRessourcePlateau1;
    ressource2.innerHTML = compteurRessourcePlateau2;
    ressource3.innerHTML = compteurRessourcePlateau3;
}