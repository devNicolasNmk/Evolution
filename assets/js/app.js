
//Declaration des variables 
    //stat clicks
    var totalClick = document.getElementById('nbTotalClic');
    var getClick = document.getElementById('x1y1'); // temporaire pour mes tests
    var scoreClick = 0;
    //stat ressources recoltées
    var ressourcesCumulees = document.getElementById('nbTotalRessources');
    var ressourceUne = 0;
    var ressourceDeux = 0;
    var ressourceTrois = 0;
    var somme = 0;
    //stat outils obtenus
    var nbTotalOutils = document.getElementById('nbTotalOutils');
    //Tableau des outils des 5 eres => 3 par eres(en attente du nom des outils pour modification)
    var tabOutils = {
        "out1": 0,
        "out2": 0,
        "out3": 0,
        "out4": 0,
        "out5": 0,
        "out6": 0,
        "out7": 0,
        "out8": 0,
        "out9": 0,
        "out10": 0,
        "out11": 0,
        "out12": 0,
        "out13": 0,
        "out14": 0,
        "out15": 0
    };
    var nbOutils = 0;
    //tableau des eres terminées : 0=> non achevée 1=> achevée
    var tabEre = {
        "ere1": 0,
        "ere2": 0,
        "ere3": 0,
        "ere4": 0,
        "ere5": 0
    };
    var nbEres = 0; 
    var nbConstruction = 0;
    // incrementation du nombre de batiments construits et catastrophes rencontrées
    var eventConstruct = false;
    var eventCastastrophes = false;
    
    var viderCache = document.getElementById('viderCache');


// ----------------------- Debut : Statistiques - options ----------------------- //

    //---- Stat total click ----//
        /**
         * 
         * Fonction incremenation de total des clicks + maj de l'affichage
         * 
         */
        function incrTotalClick() {
            scoreClick++;
            totalClick.innerHTML = scoreClick;
        }
        getClick.onclick = incrTotalClick;


        //---- Stat Total ressources recoltées ----//
        /**
         * 
         * Fonction d'addition des ressources cumulées
         * 
         */
        function sommeRessources() {
            somme = ressourceUne + ressourceDeux + ressourceTrois;
            return somme;
        }
        ressourcesCumulees.innerHTML = sommeRessources();


    // ---- Outils obtenus ---- //
        /*boucle sur le tableau pour check le nombre de fois que 1 est présent 
        *le for in me permet de boucler sur le tableau associatif
        */
        for (outil in tabOutils) {
            if (tabOutils[outil] === 1) {
                nbOutils++
            }
        }
        nbTotalOutils.innerHTML = nbOutils;


    // ---- eres terminées ---- //
        /*boucle sur le tableau pour check le nombre de fois que 1 est présent 
        *le for in me permet de boucler sur le tableau associatif
        */
        for (ere in tabEre) {
            if (tabEre[ere] === 1) {
                nbEres++;
            }
        }
        nbTotalEre.innerHTML = nbEres;


    // ---- batiments construits ---- //

        function incrConstruction(){
            //if(eventConstruct == true){
            //    constructions++;
            //    eventConstruct = false;
            //}
        }


    // ---- castastrophes comptées ---- //
        function incrCatastrophe(){
        //if(eventCastastrophes == true){
        //    castastrophes++;
        //    eventCastastrophes = false;  
        //}
        }



// ----------------------- Fin : Statistiques - options ----------------------- //




// ----------------------- Debut : gestion des cookies || webstorage ----------------------- //

    /**
     * 
     * fonction de sauvegarde local via le webstorage
     * [https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API]
     * 
     */
    function sauvegardeLocal() {
        //sauvegarde bloc statistiques
        localStorage.setItem('nbTotalClic', totalClick.innerHTML);
        localStorage.setItem('nbTotalRessources', ressourcesCumulees.innerHTML);
        localStorage.setItem('nbTotalOutils', nbTotalOutils.innerHTML);
        localStorage.setItem('nbTotalEre', nbTotalEre.innerHTML);
        localStorage.setItem('nbTotalBatiment', nbTotalBatiment.innerHTML);
        localStorage.setItem('nbTotalCata', nbTotalCata.innerHTML);
        //sauvegarde bloc ressources
        localStorage.setItem('ressource1', ressource1.innerHTML);
        localStorage.setItem('ressource2', ressource2.innerHTML);
        localStorage.setItem('ressource3', ressource3.innerHTML);
    }

    /**
     * 
     * fonction de sauvegarde auto
     * 
     */
    function sauvegardeAuto(){
        setInterval(sauvegardeLocal, 5000);
    }
    sauvegardeAuto()

    /**
     * 
     * fonction restauration des variables aux rechargements de pages
     * 
     */
    function restauration() {

        if (localStorage.getItem('nbTotalClic') != null) {
            //restauration bloc stats
            totalClick.innerHTML = localStorage.getItem('nbTotalClic');
            //ne pas repartir avec un scoreClick a zero
            scoreClick = totalClick.innerHTML;
            ressourcesCumulees.innerHTML = localStorage.getItem('nbTotalRessources');
            nbTotalOutils.innerHTML = localStorage.getItem('nbTotalOutils');
            nbTotalEre.innerHTML = localStorage.getItem('nbTotalEre');
            nbTotalBatiment.innerHTML = localStorage.getItem('nbTotalBatiment');
            nbTotalCata.innerHTML = localStorage.getItem('nbTotalCata');
            //restauration bloc ressources
            ressource1.innerHTML = localStorage.getItem('ressource1');
            ressource2.innerHTML = localStorage.getItem('ressource2');
            ressource3.innerHTML = localStorage.getItem('ressource3');
        }

    }
    window.onload = restauration;

    /**
     * 
     * fonction d'effacement du webstorage
     * 
     */
    viderCache.addEventListener('click', recommencer);
        function recommencer(){
                // localStorage.removeItem('nbTotalClic');
                localStorage.clear();
                // scoreClick = 0;
                // totalClick.innerHTML = scoreClick;
                location.reload();
        }

// ----------------------- fin : gestion des cookies || webstorage ----------------------- //




// ----------------------- Debut : ouverture / fermeture du shop ----------------------- //

//Cible le bouton ouvrir le shop
    var clickShop = document.getElementById('agrandirShop');

    /**
     * 
     * Fonction d'ouverture et de fermeture du shop
     * 
     */
    function agrandirShop() {
        var shop = document.getElementById("shop");
        shop.classList.toggle('ouvrirShop'); // applique la class .ouvrirShop => gestion css de la class
        clickShop.innerHTML = "Fermer le shop";
        if (!shop.classList.contains('ouvrirShop')) {
            clickShop.innerHTML = "Ouvrir le shop";
        }
    }

//Lance la fonction agrandirShop au clic sur le bouton
    clickShop.onclick = agrandirShop;


// ----------------------- Fin : ouverture / fermeture du shop ----------------------- //

// ----------------------- Debut : ressource et compteur ----------------------- //

var plateau= document.getElementById("jeu");

var scoreRessourcesMetal = 0;
var scoreRessourcesBois = 0;
var scoreRessourcesPierre = 0;


ressource1.innerHTML = scoreRessourcesMetal;
ressource2.innerHTML = scoreRessourcesBois;
ressource3.innerHTML = scoreRessourcesPierre;

function selectionne(plateau) {
    
    if (plateau.target.getAttribute("class") == "metal") {
        if (plateau.target.getAttribute("class", 'metal')) {
            scoreRessourcesMetal = scoreRessourcesMetal + 1 ;
            
        }
    }
        ressource1.innerHTML = scoreRessourcesMetal;

    if (plateau.target.getAttribute("class") == "bois") {
            if (plateau.target.getAttribute("class", 'bois')) {
            scoreRessourcesBois = scoreRessourcesBois + 1 ;
            
        }
    }
        ressource2.innerHTML = scoreRessourcesBois;

    if (plateau.target.getAttribute("class") == "pierre") {
        if (plateau.target.getAttribute("class", 'pierre')) {
            scoreRessourcesPierre = scoreRessourcesPierre + 1 ;
            
        }
    }
        ressource3.innerHTML = scoreRessourcesPierre;
}
plateau.onclick = selectionne;

// ----------------------- Fin : ressource et compteur ----------------------- //

//------------------------- catastrophe -------------------------//
/*
*var dino = document.getElementById("catastrophe");
*
*function choas (){
*   if ($element.classList.contains("none")) {
*        element.classList.toggle("visible")
*        scoreRessourcesMetal = scoreRessourcesMetal - 1;
*        scoreRessourcesBois = scoreRessourcesBois - 1;
*        scoreRessourcesPierre = scoreRessourcesPierre - 1;
*    }
*}
*/
//------------------------- fin catastrophe -------------------------//