// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

function verifier(nombre)
{
    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire)
    {
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est plus";
        //Ajout des classes CSS instruction et plus
        instruction.className = "instruction plus"
    }
    else if(nombre > nombreAleatoire)
    {
        instruction.textContent = "#" + coups + "(" + nombre + ") C'est moins";
        //Ajout des classes CSS instruction et plus
        instruction.className = "instruction moins"
    }
    else {
        instruction.textContent = "#" + coups + "(" + nombre + ") Gagné !";
        //Ajout des classes CSS instruction et plus
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    //Ajout des éléments devant les autres
    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    //Si la valeur n'est pas un integer
    if(isNaN(input.value))
    {
        error.style.display = "inline";
    }
    else {
        error.style.display = "none";
    }

});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    //Annuler l'évènement par défaut des navigateurs
    e.preventDefault();

    if(isNaN(input.value) || input.value == "")
    {
        //Modification de la bordure du champ
        input.style.borderColor = "red";
    }

    else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
    
});
