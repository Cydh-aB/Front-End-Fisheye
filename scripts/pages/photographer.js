//Code JavaScript lié à la page photographer.html
import { photographers } from "../constructor/constructor_photographers.js";
import { profilFactory } from "../factories/photographerPage.js";
import { Media } from "../constructor/media.js";
import { mediaListing } from "../constructor/mediaListing.js";
import { displayFilterMenu } from "../utils/filterMenu.js";

const linkData = "data/photographers.json";
const urlParams = new URLSearchParams(window.location.search);
const mediaList = new mediaListing();

let mediasFactory = new Media();
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

    data.media.forEach((media)=> {
         if (media.photographerId === currentPhotographer.id) {
            mediaList.addMedia(
                mediasFactory.createMedia(
                    
                    media.id,
                    media.photographerId,
                    media.title,
                    media.image,
                    media.video,
                    media.likes,
                    media.date,
                    media.price,
                    currentPhotographer.name.toLowerCase().replace(" ", "") + "/"
                )
            );
         }
     });
}
function mediaFactory() {
    let mediaFactory = [];
    
    const filters = [];
    const cardsMediaContainer = document.getElementById("cards_media_container");
    const sort = document.querySelector(".filter_option.selected")?.getAttribute("data_value");

    mediaFactory = mediaList.getMediaList(sort);
    
    mediaFactory.forEach((media) => {

        // Dom creation

        const mediaElement = media.createImg(currentPhotographer.getFolderName());
        const cardsMedia = document.createElement("article");
        const cardsMediaImg = document.createElement("a");
        const cardsMediaTitle = document.createElement("p")
        const cardsMediaFooter = document.createElement("div");
        
        // Class section

        cardsMedia.classList.add("cards_media");
        cardsMediaImg.classList.add("cards_media_img");
        cardsMediaFooter.classList.add("cards_media_footer");
        cardsMediaTitle.classList.add("cards_media_title");


        cardsMediaTitle.textContent = `${media.title}`;

        cardsMediaContainer.append(cardsMedia);
        cardsMedia.append(cardsMediaImg, cardsMediaFooter);
        cardsMediaImg.append(mediaElement);
        cardsMediaFooter.append(cardsMediaTitle);

        return filters;
    });
}

//Fonction pour afficher la page

function displayPage() {
    document.title = "-" + currentPhotographer.name;

    profilFactory(currentPhotographer, mediaFactory);
    displayFilterMenu(mediaFactory);
    mediaFactory();
}