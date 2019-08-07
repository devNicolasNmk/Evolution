// ----------------------- Debut : ouverture / fermeture du shop ----------------------- //

//Cible le bouton ouvrir le shop
var clickShop = document.getElementById('agrandirShop')

/**
 * 
 * Fonction d'ouverture et de fermeture du shop
 * 
 */
function agrandirShop(){
    var shop = document.getElementById("shop");
    shop.classList.toggle('ouvrirShop'); // applique la class .ouvrirShop => gestion css de la class
    clickShop.innerHTML="Fermer le shop";
    if (!shop.classList.contains('ouvrirShop')){
        clickShop.innerHTML = "Ouvrir le shop";
    }
}

//Lance la fonction agrandirShop au clic sur le bouton
clickShop.onclick = agrandirShop;

// ----------------------- Fin : ouverture / fermeture du shop ----------------------- //