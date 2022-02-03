//Mettre le code JavaScript lié à la page photographer.html
import { photographers } from "../constructor/constructor_photographers.js";
import { profilFactory } from "../factories/photographerPage.js";


const linkData = "data/photographers.json";
const urlParams = new URLSearchParams(window.location.search);

let currentPhotographer;

//Récupération des données

window.addEventListener("load", () => {
    fetch(linkData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log ("error, type : ${response.status}");
            }
        })
        .then((data) => createData(data))
        .then(displayPage);
});

//Création du contenu a afficher sur la page 

function createData(data) {
    data.photographers.forEach((photographer) => {
        if (photographer.id === Number(urlParams.get("id"))){
            currentPhotographer = new photographers(
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

//Fonction pour afficher la page

function displayPage() {
    document.title = "-" + currentPhotographer.name;

    profilFactory(currentPhotographer);
}