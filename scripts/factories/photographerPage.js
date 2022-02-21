// Factory pour générer les pages dynamiquement

function profilFactory(currentPhotographer) {
    const urlParams = new URLSearchParams(window.location.search);

    //Chemin vers la photo du photographe.

    const lienPhoto = "/assets/photographers/photographers_id_photos/" + currentPhotographer.portrait;
    
    //Création du DOM

    const profilBody = document.createElement("div");
    const profilTitle = document.createElement("h1");
    const profilLocation = document.createElement("p");
    const profilTagline = document.createElement("p");
    const containerImgProfil = document.createElement("div");
    const profilImg = document.createElement("img");
    const btn_contact = document.querySelector(".contact_button");
    const banner = document.querySelector(".photograph_header");
    
    // class - attributs HTML

    profilBody.classList.add("profil_body");
    containerImgProfil.classList.add("profil_img");
    profilTitle.classList.add("profil_body_title");
    profilLocation.classList.add("profil_body_location");
    profilTagline.classList.add("profil_body_tagline");
    profilImg.src = lienPhoto;
    profilTitle.setAttribute("lang", "fr");
    profilImg.setAttribute("alt", "${currentPhotographer.name}");
    profilImg.classList.add("profil_portrait");

    profilTitle.textContent = currentPhotographer.name;
    profilLocation.textContent = currentPhotographer.city + ", " + currentPhotographer.country;
    profilTagline.textContent = currentPhotographer.tagline;


    // éléments => DOM

    banner.appendChild(profilBody);
    banner.appendChild(btn_contact);
    banner.appendChild(containerImgProfil);
    profilBody.appendChild(profilTitle);
    profilBody.appendChild(profilLocation);
    profilBody.appendChild(profilTagline);

    containerImgProfil.appendChild(profilImg);

    return (banner);
}

export { profilFactory };