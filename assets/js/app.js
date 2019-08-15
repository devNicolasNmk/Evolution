
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
    var boutonOuvrirShop = document.getElementById('bouton-ouvrir-shop');
    var boutonFermerShop = document.getElementById('bouton-fermer-shop');
    var blocShop = document.getElementById('bloc-shop');
//Initilisation Styles boutons    
    boutonOuvrirShop.style.display = "block";
    boutonFermerShop.style.display = "none";
    /*
     * 
     * Fonction d'ouverture et de fermeture du shop
     * 
     */
    function ouvrirShop() {
        boutonOuvrirShop.style.display = "none";
        boutonFermerShop.style.display = "block";
        blocShop.style.display = "block";
    }
    function fermerShop() {
        boutonOuvrirShop.style.display = "block";
        boutonFermerShop.style.display = "none";
        blocShop.style.display = "none";
    }

//Lance la fonction ouvrir au clic sur le bouton
boutonOuvrirShop.onclick = ouvrirShop;
//Lance la fonction fermer au clic sur le bouton
boutonFermerShop.onclick = fermerShop;

// ----------------------- Fin : ouverture / fermeture du shop ----------------------- //

// ----------------------- Debut : ressource et compteur ----------------------- //

var plateau= document.getElementById("jeu");

//compteur des ressources
var scoreRessourcesMetal = 0;
var scoreRessourcesBois = 0;
var scoreRessourcesPierre = 0;

//score de div avant incrémentation dans le compteur des ressources
var i = 0;
var j = 0;
var k = 0;

//pour les amélioration
var compteurMetal = 1;
var compteurBois = 1;
var compteurPierre = 1;

//affichage dans le html
ressource1.innerHTML = scoreRessourcesMetal;
ressource2.innerHTML = scoreRessourcesBois;
ressource3.innerHTML = scoreRessourcesPierre;

//compteur pour déclencher le changement de place des ressource
var declencheur = 0;


//algo qui permet d'incrémenter 
function clicker(plateau) {
        

        //si tu trouvre une div avec un class qui est metal    
        if (plateau.target.getAttribute("class") == "metal") {
            if (plateau.target.getAttribute("class", 'metal')) {
                //alors tu incrémente le score de la div qui comptien la class metal
                i = i + 1;
                // si la div arrive a un score de 10
                if (i == 10) {
                    //tu remet le score a 0
                    i = 0;
                    // et tu incrémente de x le compteur de ressource
                    scoreRessourcesMetal = scoreRessourcesMetal + compteurMetal;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheur++;
                }   
            }
        }ressource1.innerHTML = scoreRessourcesMetal;

        //si tu trouvre une div avec un class qui est bois
        if (plateau.target.getAttribute("class") == "bois") {
            if (plateau.target.getAttribute("class", 'bois')) {
                //alors tu incrémente le score de la div qui comptien la class bois
                j = j + 1;
                // si la div arrive a un score de 4
                if (j == 3) {
                    //tu remet le score a 0
                    j = 0;
                    // et tu incrémente de x le compteur de ressource
                    scoreRessourcesBois = scoreRessourcesBois + compteurBois;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheur++;
                }  
            }
        } ressource2.innerHTML = scoreRessourcesBois;

        //si tu trouvre une div avec un class qui est pierre 
        if (plateau.target.getAttribute("class") == "pierre") {
            if (plateau.target.getAttribute("class", 'pierre')) {
                //alors tu incrémente le score de la div qui comptien la class pierre
                k = k + 1;
                // si la div arrive a un score de 7
                if (k == 7) {
                    //tu remet le score a 0
                    k = 0;
                    // et tu incrémente de x le compteur de ressource
                    scoreRessourcesPierre = scoreRessourcesPierre + compteurPierre;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheur++;
                }
            }
        } ressource3.innerHTML = scoreRessourcesPierre;
        
        //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
        if (declencheur == 100) {
            //tu remets le compteur du déclencheur a 0
            declencheur = 0;
            //tu appel le changements des places des ressources
            changeDePlace();
        }    
    } plateau.onclick = clicker;


//générateur de nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var randTab = 0;


//algo de changement des places des ressources
function changeDePlace() {
    
    //tu parcours le plateau de jeu
    for (item of plateau.children) {
        
        //si une des div contient la class bois
        if (item.classList.contains("bois")){
            //alors la class bois est supprimer
            item.classList.remove("bois");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")){
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class bois
                plateau.children[randTab].classList.add("bois");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class metal ou pierre
            else if (plateau.children[randTab].classList.contains("metal") || plateau.children[randTab].classList.contains("pierre")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class bois
                plateau.children[randTab].classList.add("bois");
            }
        } 

        //si une des div contient la class pierre
        else if (item.classList.contains("pierre")){
            //alors la class pierre est supprimer
            item.classList.remove("pierre");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")){
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class pierre
                plateau.children[randTab].classList.add("pierre");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class metal ou pierre
            else if (plateau.children[randTab].classList.contains("metal") || plateau.children[randTab].classList.contains("bois")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class pierre
                plateau.children[randTab].classList.add("pierre");
            }
        } 

        //si une des div contient la class metal
        else if (item.classList.contains("metal")){
            //alors la class metal est supprimer
            item.classList.remove("metal");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")){
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class metal
                plateau.children[randTab].classList.add("metal");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class metal ou pierre
            else if (plateau.children[randTab].classList.contains("bois") || plateau.children[randTab].classList.contains("pierre")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class metal
                plateau.children[randTab].classList.add("metal");
            }
        }      
    }
}

// ----------------------- Fin : ressource et compteur ----------------------- //


// ----------------------- Debut : carte des Connaissances ----------------------- //



// ----------------------- Fin : carte des Connaissances --------------------------- //


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