//Code JavaScript lié à la page photographer.html
import { photographers } from "../constructor/constructor_photographers.js";
import { profilFactory } from "../factories/photographerPage.js";
import { Media } from "../constructor/media.js";
import { mediaListing } from "../constructor/mediaListing.js";
import { displayFilterMenu } from "../utils/filterMenu.js";

const linkData = "data/photographers.json";
const urlParams = new URLSearchParams(window.location.search);
const mediaList = new mediaListing();
const main = document.getElementById("main");

let mediasFactory = new Media();
let currentPhotographer;
let totalLikes = [];
let totalLikesPhotographer;

//Récupération des données

window.addEventListener("load", () => {
    fetch(linkData)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log (`error, type : ${response.status}`);
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
            media.getLikes;

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
    const sort = document.querySelector(".filter_option.selected")?.getAttribute("data-value");
    cardsMediaContainer.innerHTML = "";
    mediaFactory = mediaList.getMediaList(sort, ... filters);
    
    mediaFactory.forEach((media) => {

        // Dom creation

        const mediaElement = media.createImg(currentPhotographer.getFolderName());
        const cardsMedia = document.createElement("article");
        const cardsMediaImg = document.createElement("a");
        const cardsMediaTitle = document.createElement("p")
        const cardsMediaFooter = document.createElement("div");

        const cardsMediaHeaderLike = document.createElement("div");
        const cardsMediaCompteurLike = document.createElement("p");
        const heartLink = document.createElement("button");
        const heart = document.createElement("i");
        
        // Class section

        cardsMedia.classList.add("cards_media");
        cardsMediaImg.classList.add("cards_media_img");
        cardsMediaFooter.classList.add("cards_media_footer");
        cardsMediaTitle.classList.add("cards_media_title");
        cardsMediaHeaderLike.classList.add("header_like");
        cardsMediaCompteurLike.classList.add("compteur");
        heartLink.classList.add("heart_link");
        heart.classList.add("far");
        heart.classList.add("fa-heart");
        heart.classList.add("heart");

        cardsMediaCompteurLike.setAttribute("aria-label", `likes`);
        cardsMediaCompteurLike.setAttribute("aria-label", `Nombre de likes ${media.likes}`);
        heartLink.setAttribute("aria-label", "Aimer cette photo");
        heartLink.setAttribute("role", "button");
    
        

        cardsMediaCompteurLike.textContent = `${media.likes}`;
        cardsMediaTitle.textContent = `${media.title}`;

        cardsMediaContainer.append(cardsMedia);
        cardsMedia.append(cardsMediaImg, cardsMediaFooter);
        cardsMediaImg.append(mediaElement);
        cardsMediaFooter.append(cardsMediaTitle, cardsMediaHeaderLike);
        cardsMediaHeaderLike.append(cardsMediaCompteurLike, heartLink);
        heartLink.append(heart);

        compteurLikes(totalLikes);

        //fonction compteur likes

        function compteurLikes() {
            heartLink.addEventListener("click", () => {
                if(heart.classList.contains("fas")) {
                    media.likes--;
                    heart.classList.remove("fas");
                    heart.classList.add("far");
                    cardsMediaCompteurLike.textContent = media.likes;
                    heart.classList.remove("heart_anim");
                    displayInfo();
                } else {
                    media.likes++;
                    heart.classList.remove("far");
                    heart.classList.add("fas");
                    cardsMediaCompteurLike.textContent = media.likes;
                    heart.classList.add("heart_anim");
                    displayInfo();
                }
            });
        }
    
    });
}

//Fonction pour afficher la page

function displayPage() {
    document.title = "-" + currentPhotographer.name;

    profilFactory(currentPhotographer, mediaFactory);
    displayFilterMenu(mediaFactory);
    displayInfo(mediaFactory);
    mediaFactory();
}

function displayInfo() {
    const totalLikesContainer = document.createElement("div");
    const priceContainer = document.createElement("div");
    const price = document.createElement("p");

    const totalLikesNb = document.createElement("div");
    const heart = document.createElement("i");

    heart.classList.add(`fas`);
    heart.classList.add(`fa-heart`);
    heart.classList.add(`heart`);
    heart.classList.add(`heart-global`);

    priceContainer.classList.add("price_container");
    price.classList.add("price");
    totalLikesContainer.classList.add("total_likes_container");
    totalLikesNb.classList.add("total_likes");
    totalLikesNb.textContent = `${mediaList.getLikes()}`;
    price.textContent = `${currentPhotographer.price}€/ jour`;

    main.append(totalLikesContainer);
    totalLikesNb.append(heart);
    priceContainer.append(price);
    totalLikesContainer.append(totalLikesNb, priceContainer);
}