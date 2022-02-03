//Mettre le code JavaScript lié à la page photographer.html
import { photographers } from "../constructor/constructor_photographers.js";
import { profilFactory } from "../factories/photographerPage.js";


//Création du contenu a afficher sur la page 

function createData(data) {
    data.photographers.forEach((photographers) => {
        if (photographers.id === Number(urlParams.get("id"))){
            currentPhotographers = new Photographers(
                photographer.name,
                photographer.id,
                photographer.city,
                photographer.country,
                photographer.tagline,
                photographer.price,
                photographer.portrait
            );
        }
    });
}

