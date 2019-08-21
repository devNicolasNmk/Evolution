
//Declaration des variables 
    //stat clicks
    var totalClick = document.getElementById('nbTotalClic');
    var scoreClick = 0;
    //stat ressources recoltées
    var ressourcesCumulees = document.getElementById('nbTotalRessources');
    var ressourceUne = 0;
    var ressourceDeux = 0;
    var ressourceTrois = 0;
    var somme = 0;
    //stat outils obtenus
    var nbTotalOutils = document.getElementById('nbTotalOutils');
    //stat batiment obtenus
    var nbTotalBatiment = document.getElementById('nbTotalBatiment');
    var constructions = 0;
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
    var bgEre = document.getElementById("bgEre");
    
    var nbConstruction = 0;
    // incrementation du nombre de batiments construits et catastrophes rencontrées
    // var eventConstruct = false;
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
            somme++;
            nbTotalRessources.innerHTML = somme;
        }
        

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
                constructions++;
                nbTotalBatiment.innerHTML = constructions;
            }
            
        


    // ---- castastrophes comptées ---- //
        function incrCatastrophe(){
        //if(eventCastastrophes == true){
        //    castastrophes++;
        //    eventCastastrophes = false;  
        //}
        }



// ----------------------- Fin : Statistiques - options ----------------------- //




// ----------------------- Debut : gestion webstorage ----------------------- //
    const localisation=[];
    /**
     * 
     * parcourir le tableau de div ou se trouveront les maisons 
     * indique le niveau de maison a l'indice correspondant
     * 
     */
    function localiserMaison(){
        for(let x = 0; x<= bgEre.children.length-1;x++){
            if(bgEre.children[x].classList.contains('maison')){
                localisation[x] = "maison";
            }else if(bgEre.children[x].classList.contains('maison1')){
                localisation[x] = "maison1";
            }else if((bgEre.children[x].classList.contains('maison2'))){
                localisation[x] = "maison2";
            }else{
                localisation[x] = "vide";
            }
        }
        return localisation;
    }
    
    
    /**
     * 
     * fonction de sauvegarde local via le webstorage
     * [https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API]
     * 
     */
    function sauvegardeLocal() {
        //sauvegarde bloc statistiques
        localStorage.setItem('nbTotalClic', totalClick.innerHTML);
        localStorage.setItem('nbTotalRessources', nbTotalRessources.innerHTML);
        localStorage.setItem('nbTotalOutils', nbTotalOutils.innerHTML);
        localStorage.setItem('nbTotalEre', nbTotalEre.innerHTML);
        localStorage.setItem('nbTotalBatiment', nbTotalBatiment.innerHTML);
        localStorage.setItem('prixMaison1', maisonPrix1);
        localStorage.setItem('prixMaison2', maisonPrix2);
        localStorage.setItem('prixMaison3', maisonPrix3);
        localStorage.setItem('bullePrix', prixMaison.innerHTML);
        var getLocalisation =localiserMaison();
        localStorage.setItem('localisation', getLocalisation);
        //sav item1 lvl1
        localStorage.setItem('prix-item1-lvl1-bouton-shop', affichagePrixItem1Lvl1.innerHTML);
        localStorage.setItem('boutonItem1Lvl1.disabled', boutonItem1Lvl1.disabled);
        localStorage.setItem('boutonItem1Lvl1.style.color', boutonItem1Lvl1.style.color);
        localStorage.setItem('boutonItem1Lvl1.style.border', boutonItem1Lvl1.style.border);
        localStorage.setItem('boutonItem1Lvl1.style.backgroundColor', boutonItem1Lvl1.style.backgroundColor);
        //sav item1 lvl2
        localStorage.setItem('prix-item1-lvl2-bouton-shop', affichagePrixItem1Lvl2.innerHTML);
        localStorage.setItem('boutonItem1Lvl2.disabled', boutonItem1Lvl2.disabled);
        localStorage.setItem('boutonItem1Lvl2.style.color', boutonItem1Lvl2.style.color);
        localStorage.setItem('boutonItem1Lvl2.style.border', boutonItem1Lvl2.style.border);
        localStorage.setItem('boutonItem1Lvl2.style.backgroundColor', boutonItem1Lvl2.style.backgroundColor);
        //sav item1 lvl3
        localStorage.setItem('prix-item1-lvl3-bouton-shop', affichagePrixItem1Lvl3.innerHTML);
        localStorage.setItem('boutonItem1Lvl3.disabled', boutonItem1Lvl3.disabled);
        localStorage.setItem('boutonItem1Lvl3.style.color', boutonItem1Lvl3.style.color);
        localStorage.setItem('boutonItem1Lvl3.style.border', boutonItem1Lvl3.style.border);
        localStorage.setItem('boutonItem1Lvl3.style.backgroundColor', boutonItem1Lvl3.style.backgroundColor);
        //sav item2 lvl1
        localStorage.setItem('prix-item2-lvl1-bouton-shop', affichagePrixItem2Lvl1.innerHTML);
        localStorage.setItem('boutonItem2Lvl1.disabled', boutonItem2Lvl1.disabled);
        localStorage.setItem('boutonItem2Lvl1.style.color', boutonItem2Lvl1.style.color);
        localStorage.setItem('boutonItem2Lvl1.style.border', boutonItem2Lvl1.style.border);
        localStorage.setItem('boutonItem2Lvl1.style.backgroundColor', boutonItem2Lvl1.style.backgroundColor);
        //sav item2 lvl2
        localStorage.setItem('prix-item2-lvl2-bouton-shop', affichagePrixItem2Lvl2.innerHTML);
        localStorage.setItem('boutonItem2Lvl2.disabled', boutonItem2Lvl2.disabled);
        localStorage.setItem('boutonItem2Lvl2.style.color', boutonItem2Lvl2.style.color);
        localStorage.setItem('boutonItem2Lvl2.style.border', boutonItem2Lvl2.style.border);
        localStorage.setItem('boutonItem2Lvl2.style.backgroundColor', boutonItem2Lvl2.style.backgroundColor);
        //sav item2 lvl3
        localStorage.setItem('prix-item2-lvl3-bouton-shop', affichagePrixItem2Lvl3.innerHTML);
        localStorage.setItem('boutonItem2Lvl3.disabled', boutonItem2Lvl3.disabled);
        localStorage.setItem('boutonItem2Lvl3.style.color', boutonItem2Lvl3.style.color);
        localStorage.setItem('boutonItem2Lvl3.style.border', boutonItem2Lvl3.style.border);
        localStorage.setItem('boutonItem2Lvl3.style.backgroundColor', boutonItem2Lvl3.style.backgroundColor);
        //sav item3 lvl1
        localStorage.setItem('prix-item3-lvl1-bouton-shop', affichagePrixItem3Lvl1.innerHTML);
        localStorage.setItem('boutonItem3Lvl1.disabled', boutonItem3Lvl1.disabled);
        localStorage.setItem('boutonItem3Lvl1.style.color', boutonItem3Lvl1.style.color);
        localStorage.setItem('boutonItem3Lvl1.style.border', boutonItem3Lvl1.style.border);
        localStorage.setItem('boutonItem3Lvl1.style.backgroundColor', boutonItem3Lvl1.style.backgroundColor);
        //sav item3 lvl2
        localStorage.setItem('prix-item3-lvl2-bouton-shop', affichagePrixItem3Lvl2.innerHTML);
        localStorage.setItem('boutonItem3Lvl2.disabled', boutonItem3Lvl2.disabled);
        localStorage.setItem('boutonItem3Lvl2.style.color', boutonItem3Lvl2.style.color);
        localStorage.setItem('boutonItem3Lvl2.style.border', boutonItem3Lvl2.style.border);
        localStorage.setItem('boutonItem3Lvl2.style.backgroundColor', boutonItem3Lvl2.style.backgroundColor);
        //sav item3 lvl3
        localStorage.setItem('prix-item3-lvl3-bouton-shop', affichagePrixItem3Lvl3.innerHTML);
        localStorage.setItem('boutonItem3Lvl3.disabled', boutonItem3Lvl3.disabled);
        localStorage.setItem('boutonItem3Lvl3.style.color', boutonItem3Lvl3.style.color);
        localStorage.setItem('boutonItem3Lvl3.style.border', boutonItem3Lvl3.style.border);
        localStorage.setItem('boutonItem3Lvl3.style.backgroundColor', boutonItem3Lvl3.style.backgroundColor);
        //sav coefficientx multiplicateur liés aux items
        localStorage.setItem('clickRessource1', clickRessource1);
        localStorage.setItem('clickRessource2', clickRessource2);
        localStorage.setItem('clickRessource3', clickRessource3);

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
        setInterval(sauvegardeLocal, 1000);
        
    }
    sauvegardeAuto();

    // const localiserTest = ['maison','maison1','maison2','vide','vide','vide','vide','vide','vide','vide']
    function restorerMaison(getLocalisation){
        
        for(let z = 0 ; z <=getLocalisation.length-1; z++){
            if(getLocalisation[z] == 'maison'){
                bgEre.children[z].setAttribute('class', getLocalisation[z])
            }else if (getLocalisation[z] == 'maison1'){
                bgEre.children[z].setAttribute('class', getLocalisation[z])
            }else if(getLocalisation[z] == 'maison2'){
                bgEre.children[z].setAttribute('class', getLocalisation[z])
            }else {

            }           
        }   
    }
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
            nbTotalRessources.innerHTML = localStorage.getItem('nbTotalRessources');
            somme = nbTotalRessources.innerHTML
            nbTotalOutils.innerHTML = localStorage.getItem('nbTotalOutils');
            nbTotalEre.innerHTML = localStorage.getItem('nbTotalEre');
            nbTotalBatiment.innerHTML = localStorage.getItem('nbTotalBatiment');
            //gestion de restauration des maisons (emplacement et niveau)
            getLocalisation = localStorage.getItem('localisation')
            // transformer la chaine de caracteres en array
            getArray= getLocalisation.split(',');
            restorerMaison(getArray);
            maisonPrix1 =localStorage.getItem('prixMaison1')
            maisonPrix2 =localStorage.getItem('prixMaison2')
            maisonPrix3 =localStorage.getItem('prixMaison3')
            prixMaison.innerHTML = localStorage.getItem('bullePrix');
            nbTotalCata.innerHTML = localStorage.getItem('nbTotalCata');
            //restauration bloc ressources
            ressource1.innerHTML = localStorage.getItem('ressource1');
            compteurRessourcePlateau1 = parseInt(ressource1.innerHTML);
            ressource2.innerHTML = localStorage.getItem('ressource2');
            compteurRessourcePlateau2 = parseInt(ressource2.innerHTML);
            ressource3.innerHTML = localStorage.getItem('ressource3');
            compteurRessourcePlateau3 = parseInt(ressource3.innerHTML);
            //restauration item1 lvl1
            affichagePrixItem1Lvl1.innerHTML = localStorage.getItem('prix-item1-lvl1-bouton-shop');
            boutonItem1Lvl1.disabled = localStorage.getItem('boutonItem1Lvl1.disabled');
            boutonItem1Lvl1.style.color = localStorage.getItem('boutonItem1Lvl1.style.color');
            boutonItem1Lvl1.style.border = localStorage.getItem('boutonItem1Lvl1.style.border');
            boutonItem1Lvl1.style.backgroundColor = localStorage.getItem('boutonItem1Lvl1.style.backgroundColor');
            //restauration item1 lvl2
            affichagePrixItem1Lvl2.innerHTML = localStorage.getItem('prix-item1-lvl2-bouton-shop');
            boutonItem1Lvl2.disabled = localStorage.getItem('boutonItem1Lvl2.disabled');
            boutonItem1Lvl2.style.color = localStorage.getItem('boutonItem1Lvl2.style.color');
            boutonItem1Lvl2.style.border = localStorage.getItem('boutonItem1Lvl2.style.border');
            boutonItem1Lvl2.style.backgroundColor = localStorage.getItem('boutonItem1Lvl2.style.backgroundColor');
            //restauration item1 lvl3
            affichagePrixItem1Lvl3.innerHTML = localStorage.getItem('prix-item1-lvl3-bouton-shop');
            boutonItem1Lvl3.disabled = localStorage.getItem('boutonItem1Lvl3.disabled');
            boutonItem1Lvl3.style.backgroundColor = localStorage.getItem('boutonItem1Lvl3.style.backgroundColor');
            boutonItem1Lvl3.style.color = localStorage.getItem('boutonItem1Lvl3.style.color');
            boutonItem1Lvl3.style.border = localStorage.getItem('boutonItem1Lvl3.style.border');
            //restauration item2 lvl1
            affichagePrixItem2Lvl1.innerHTML = localStorage.getItem('prix-item2-lvl1-bouton-shop');
            boutonItem2Lvl1.disabled = localStorage.getItem('boutonItem2Lvl1.disabled');
            boutonItem2Lvl1.style.backgroundColor = localStorage.getItem('boutonItem2Lvl1.style.backgroundColor');
            boutonItem2Lvl1.style.color = localStorage.getItem('boutonItem2Lvl1.style.color');
            boutonItem2Lvl1.style.border = localStorage.getItem('boutonItem2Lvl1.style.border');
            //restauration item2 lvl2
            affichagePrixItem2Lvl2.innerHTML = localStorage.getItem('prix-item2-lvl2-bouton-shop');
            boutonItem2Lvl2.disabled = localStorage.getItem('boutonItem2Lvl2.disabled');
            boutonItem2Lvl2.style.backgroundColor = localStorage.getItem('boutonItem2Lvl2.style.backgroundColor');
            boutonItem2Lvl2.style.color = localStorage.getItem('boutonItem2Lvl2.style.color');
            boutonItem2Lvl2.style.border = localStorage.getItem('boutonItem2Lvl2.style.border');
            //restauration item2 lvl3            
            affichagePrixItem2Lvl3.innerHTML = localStorage.getItem('prix-item2-lvl3-bouton-shop');
            boutonItem2Lvl3.disabled = localStorage.getItem('boutonItem2Lvl3.disabled');
            boutonItem2Lvl3.style.backgroundColor = localStorage.getItem('boutonItem2Lvl3.style.backgroundColor');
            boutonItem2Lvl3.style.color = localStorage.getItem('boutonItem2Lvl3.style.color');
            boutonItem2Lvl3.style.border = localStorage.getItem('boutonItem2Lvl3.style.border');
            //restauration item3 lvl1
            affichagePrixItem3Lvl1.innerHTML = localStorage.getItem('prix-item3-lvl1-bouton-shop');
            boutonItem3Lvl1.disabled = localStorage.getItem('boutonItem3Lvl1.disabled');
            boutonItem3Lvl1.style.backgroundColor = localStorage.getItem('boutonItem3Lvl1.style.backgroundColor');
            boutonItem3Lvl1.style.color = localStorage.getItem('boutonItem3Lvl1.style.color');
            boutonItem3Lvl1.style.border = localStorage.getItem('boutonItem3Lvl1.style.border');
            //restauration item3 lvl2
            affichagePrixItem3Lvl2.innerHTML = localStorage.getItem('prix-item3-lvl2-bouton-shop');
            boutonItem3Lvl2.disabled = localStorage.getItem('boutonItem3Lvl2.disabled');
            boutonItem3Lvl2.style.backgroundColor = localStorage.getItem('boutonItem3Lvl2.style.backgroundColor');
            boutonItem3Lvl2.style.color = localStorage.getItem('boutonItem3Lvl2.style.color');
            boutonItem3Lvl2.style.border = localStorage.getItem('boutonItem3Lvl2.style.border');
            //restauration item3 lvl3
            affichagePrixItem3Lvl3.innerHTML = localStorage.getItem('prix-item3-lvl3-bouton-shop');
            boutonItem3Lvl3.disabled = localStorage.getItem('boutonItem3Lvl3.disabled');
            boutonItem3Lvl3.style.backgroundColor = localStorage.getItem('boutonItem3Lvl3.style.backgroundColor');
            boutonItem3Lvl3.style.color = localStorage.getItem('boutonItem3Lvl3.style.color');
            boutonItem3Lvl3.style.border = localStorage.getItem('boutonItem3Lvl3.style.border');
            //restauration
            clickRessource1 = parseInt(localStorage.getItem('clickRessource1'));
            clickRessource2 = parseInt(localStorage.getItem('clickRessource2'));
            clickRessource3 = parseInt(localStorage.getItem('clickRessource3'));
            activationItemsShop();
        }

    }
    window.onload = restauration;

    viderCache.addEventListener('click', recommencer);
    /**
     * 
     * fonction d'effacement du webstorage
     * 
     */
    function recommencer(){
            localStorage.clear();
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
bgEre = document.getElementById("bgEre");

//compteur des ressources
var compteurRessourcePlateau1 = 0;
var compteurRessourcePlateau2 = 0;
var compteurRessourcePlateau3 = 0;

//score de div avant incrémentation dans le compteur des ressources
var i = 0;
var j = 0;
var k = 0;

//Valeur d'un clic
var clickRessource1 = 1;
var clickRessource2 = 1;
var clickRessource3 = 1;

//affichage dans le html
ressource1.innerHTML = compteurRessourcePlateau1;
ressource2.innerHTML = compteurRessourcePlateau2;
ressource3.innerHTML = compteurRessourcePlateau3;

//prix achat maison
var maisonPrix1 = 40;
var maisonPrix2 = 50;
var maisonPrix3 = 30;

//affichage prix maison
var prixMaison = document.getElementById("prixMaison");
prixMaison.innerHTML = "Pour faire évoluer la maison clique dessus si tu as ces ressources ==> <br> " +maisonPrix1+ " : <strong>os</strong> <br>" +maisonPrix2+ " : <strong>bois</strong> <br>" +maisonPrix3+  " : <strong>pierre</strong> <br>" ;

//compteur changement de niveau de la maison
var compteurChangementMaison = 0;

// nombre de maison dernier niveau
var maisonFixe = 0;

//compteur pour déclencher le changement de place des ressource
var declencheurRessource1 = 0;
var declencheurRessource2 = 0;
var declencheurRessource3 = 0;

//décrémenter catastrophe / dommages subi avec la catastrophe
var dommagesRessource1 = 2;
var dommagesRessource2 = 2;
var dommagesRessource3 = 2;

//algo qui permet d'incrémenter 
function clicker(plateau) {
        

        //si tu trouvre une div avec un class qui est os    
        if (plateau.target.getAttribute("class") == "os") {
            if (plateau.target.getAttribute("class", 'os')) {
                //alors tu incrémente le score de la div qui comptien la class os
                i = i + 1;
                //incrementation du total des clics
                incrTotalClick();
                // si la div arrive a un score de 10
                if (i == 10) {
                    //tu remet le score a 0
                    i = 0;
                    // et tu incrémente de x le compteur de ressource
                    compteurRessourcePlateau1 = compteurRessourcePlateau1 + clickRessource1;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheurRessource1++;
                    sommeRessources();

                    //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                    if (declencheurRessource1 == 15) {
                        //tu remets le compteur du déclencheur a 0
                        declencheurRessource1 = 0;
                        //tu appel le changements des places des ressources
                        changeDePlaceRessource1();
                    } 

                }   
            }
        }ressource1.innerHTML = compteurRessourcePlateau1;
        activationItemsShop();

        //si tu trouvre une div avec un class qui est bois
        if (plateau.target.getAttribute("class") == "bois") {
            if (plateau.target.getAttribute("class", 'bois')) {
                //alors tu incrémente le score de la div qui comptien la class bois
                j = j + 1;
                //incrementation du total des clics
                incrTotalClick();
                // si la div arrive a un score de 4
                if (j == 4) {
                    //tu remet le score a 0
                    j = 0;
                    // et tu incrémente de x le compteur de ressource
                    compteurRessourcePlateau2 = compteurRessourcePlateau2 + clickRessource2;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheurRessource2++;
                    sommeRessources();

                    //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                    if (declencheurRessource2 == 10) {
                        //tu remets le compteur du déclencheur a 0
                        declencheurRessource2 = 0;
                        //tu appel le changements des places des ressources
                        changeDePlaceRessource2();
                    } 
                }  
            }
        } ressource2.innerHTML = compteurRessourcePlateau2;
        activationItemsShop();

        //si tu trouvre une div avec un class qui est pierre 
        if (plateau.target.getAttribute("class") == "pierre") {
            if (plateau.target.getAttribute("class", 'pierre')) {
                //alors tu incrémente le score de la div qui comptien la class pierre
                k = k + 1;
                //incrementation du total des clics
                incrTotalClick();
                // si la div arrive a un score de 7
                if (k == 7) {
                    //tu remet le score a 0
                    k = 0;
                    // et tu incrémente de x le compteur de ressource
                    compteurRessourcePlateau3 = compteurRessourcePlateau3 + clickRessource3;
                    //tu incrémente aussi le compteur du déclancheur du changement de place des ressources
                    declencheurRessource3++;
                    sommeRessources();

                    //a chaque fois que le compteur du déclencheur atteindra 20, ça appelera le changement des places des ressources
                    if (declencheurRessource3 == 25) {
                        //tu remets le compteur du déclencheur a 0
                        declencheurRessource3 = 0;
                        //tu appel le changements des places des ressources
                        changeDePlaceRessource3();
                    } 
                }
            }
        } ressource3.innerHTML = compteurRessourcePlateau3;
        activationItemsShop();       
} plateau.onclick = clicker;


//fonction qui permet d'appeler le changement de niveau
function clickerMaison(bgEre) {
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

        activationItemsShop();  
        //console.log(constructions);   
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
                maisonPrix1 = maisonPrix1 + 5;
                maisonPrix2 = maisonPrix2 + 5;
                maisonPrix3 = maisonPrix3 + 5;
                
                item.classList.remove("maison1");
                item.classList.toggle("maison2");

                randTab = parseInt(getRandomArbitrary(0, 10));

                if (bgEre.children[randTab].classList.contains("vide") && maisonFixe < 5) {
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0 ;
                    incrConstruction();

                }

                else if (bgEre.children[randTab] != bgEre.children[randTab].classList.contains("vide")&& maisonFixe < 5){
                    randTab = parseInt(getRandomArbitrary(0, 10));
                    bgEre.children[randTab].classList.remove("vide");
                    bgEre.children[randTab].classList.toggle("maison");
                    compteurChangementMaison = 0 ;
                    incrConstruction();
                    
                }     
            }
        } 
        prixMaison.innerHTML = "Pour faire évoluer la maison clique dessus si tu as ces ressources ==> <br> " +maisonPrix1+ " : <strong>os</strong> <br>" +maisonPrix2+ " : <strong>bois</strong> <br>" +maisonPrix3+  " : <strong>pierre</strong> <br>" ;
    }
    ressource1.innerHTML = compteurRessourcePlateau1;
    ressource2.innerHTML = compteurRessourcePlateau2;
    ressource3.innerHTML = compteurRessourcePlateau3;
    activationItemsShop(); 
}



//algo de changement des places des ressources
function changeDePlaceRessource1() {
    
    //tu parcours le plateau de jeu
    for (item of plateau.children) {

        //si une des div contient la class os
        if (item.classList.contains("os")){
            //alors la class os est supprimer
            item.classList.remove("os");
            //la class vide est ajouter a la place
            item.classList.add("vide");
            //attribution d'un nombre pour choisir une nouvelle div
            randTab = parseInt(getRandomArbitrary(0, 100));

            // si la div du plateau de la nouvelle position contien la class vide 
            if (plateau.children[randTab].classList.contains("vide")){
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class os
                plateau.children[randTab].classList.add("os");
            }
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("bois") || plateau.children[randTab].classList.contains("pierre")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class ow
                plateau.children[randTab].classList.add("os");
            }
        }      
    }
}

function changeDePlaceRessource2() {

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
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("os") || plateau.children[randTab].classList.contains("pierre")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class bois
                plateau.children[randTab].classList.add("bois");
            }
        } 
    }
}

function changeDePlaceRessource3() {

    //tu parcours le plateau de jeu
    for (item of plateau.children) {

        //si une des div contient la class pierre
        if (item.classList.contains("pierre")){
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
            // sinon si la dive du plateau de la nouvelle position contien la class os ou pierre
            else if (plateau.children[randTab].classList.contains("os") || plateau.children[randTab].classList.contains("bois")){
                //alors une nouvelle attribution d'un nombre pour choisir une nouvelle div
                randTab = parseInt(getRandomArbitrary(0, 100));
                //la div du plateau de la nouvelle position supprime la class vide
                plateau.children[randTab].classList.remove("vide");
                //la div du plateau de la nouvelle position ajoute la class pierre
                plateau.children[randTab].classList.add("pierre");
            }
        } 
    }
}
// ----------------------- Fin : ressource et compteur ----------------------- //

// ----------------------- Debut : carte des Connaissances ----------------------- //
/*--système comme le carrousel--*/
var lis = document.getElementsByClassName("1");
var achatCarte = document.getElementById("achatCarte");
var carteConnaissance = document.getElementById("carteConnaissance");

var a = 1;

var cartePosseder = 0;

function achatCarte1 () {
    if (cartePosseder == 0 && compteurRessourcePlateau1 >= 2 && compteurRessourcePlateau2 >= 2 && compteurRessourcePlateau3 >= 2) { 
        
        compteurRessourcePlateau1 = compteurRessourcePlateau1 - 2;
        compteurRessourcePlateau2 = compteurRessourcePlateau2 - 2;
        compteurRessourcePlateau3 = compteurRessourcePlateau3 - 2;

        suivant();

        cartePosseder = 1;

        //ajoute + 20 % à la bar d'évolution
    }

    else  if (cartePosseder == 1 && compteurRessourcePlateau1 >= 5 && compteurRessourcePlateau2 >= 5 && compteurRessourcePlateau3 >= 5) { 
        
        compteurRessourcePlateau1 = compteurRessourcePlateau1 - 5;
        compteurRessourcePlateau2 = compteurRessourcePlateau2 - 5;
        compteurRessourcePlateau3 = compteurRessourcePlateau3 - 5;

        suivant();

        cartePosseder = 2;

        //ajoute + 20 % à la bar d'évolution

    }

    else  if (cartePosseder == 2 && compteurRessourcePlateau1 == 30 && compteurRessourcePlateau2 == 50 && compteurRessourcePlateau3 == 40) { 
        
        compteurRessourcePlateau1 = compteurRessourcePlateau1 - 30;
        compteurRessourcePlateau2 = compteurRessourcePlateau2 - 50;
        compteurRessourcePlateau3 = compteurRessourcePlateau3 - 40;

        suivant();

        //ajoute + 20 % à la bar d'évolution

    }
}achatCarte.onclick = achatCarte1;


for (var i = 0; i < lis.length; i++) {

      lis[i].style.display ="none";
    
  }

function suivant() {
 for (var i = 0; i < lis.length; i++) {
          lis[i].style.display ="none";
      }

      if (a == 2) {
              a=0;
      }

      else{
          a+=1;
      }
      lis[a].style.display ="inline-block";
    
}carteConnaissance.onclick = suivant;

// ----------------------- Fin : ressource et compteur --------------------------- //

//------------------------- catastrophe -------------------------//

var vieCatastrophe = 15 ;
var dino = document.getElementById("catastrophe");

function choas (){
    if ( compteurRessourcePlateau1 == 20) {
         dino.classList.contains("cacher");
         dino.classList.remove("cacher");
         dino.classList.add("attack");
         compteurRessourcePlateau1 = compteurRessourcePlateau1 - dommagesRessource1;
         compteurRessourcePlateau2 = compteurRessourcePlateau2 - dommagesRessource2;
         compteurRessourcePlateau3 = compteurRessourcePlateau3 - dommagesRessource3;
    }
}

//------------------------- fin catastrophe -------------------------//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    