//const {currentPhotographer} = require("./photographer.js");

function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const closeBtn = document.querySelector(".close_btn");
    const maskModal = document.querySelector(".mask_modal");

    modal.classList.add("opened");
    closeBtn.focus();
    maskModal.addEventListener("click", closeModal);
    main.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "false");
    
}

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");

    modal.classList.remove("opened");
    main.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "true");
}

function verifModal(currentPhotographer) {
    const formFirstNameInput = document.querySelector(".firstName_input");
    const formLastNameInput = document.querySelector(".lastName_input");
    const formEmailInput = document.querySelector(".mail_input");
    const formMsgInput = document.querySelector(".msg_input");
    const errorMsg = document.querySelectorAll(".error_alert");

    let verifFirst;
    let verifLast;
    let verifMail;
    let verifMsg;

    //On vérifie que les champs de modal soit bien rempli

    formFirstNameInput.addEventListener("input", (e) => {
        if (e.target.value.length <= 3){
            errorMsg[0].style.display = "block";
            verifFirst = false;
        } else {
            errorMsg[0].style.display = "none";
            verifFirst = true;
        }
    });

    formLastNameInput.addEventListener("input", (e)=> {
        if (e.target.value.length <= 3) {
            errorMsg[1].style.display = "inline";
            verifLast = false;
        } else {
            errorMsg[1].style.display = "none";
            verifLast= true;
        }
    });

    formEmailInput.addEventListener("input", (e) => {
        const mailRegex = /\S+@\S+\.\S+/;
        if (e.target.value.search(mailRegex) === 0) {
            errorMsg[2].style.display = "none";
            verifMail = true;
        } else if (e.target.value.search(mailRegex) === -1) {
            errorMsg[2].style.display = "inline";
            verifMail = false;
        }
    });

    formMsgInput.addEventListener("input", (e) => {
        if (e.target.value.length <= 3) {
            errorMsg[3].style.display = "inline";
            verifMsg = false;
        } else {
            errorMsg[3].style.display = "none";
            verifMsg = true;
        }
    });

    // Envoi du formulaire

    document.getElementById("contact").addEventListener("submit", function(e) {
        e.preventDefault();
        if (
            verifFirst === true &&
            verifLast === true &&
            verifMail === true &&
            verifMsg === true
        ) {
            const modalTitle = document.querySelector(".modal_title");
            const close = document.querySelector(".close_btn");
            const bannerModal = document.querySelector(".modal_form");

            bannerModal.style.display = "none";
            bannerModal.setAttribute("aria-hidden", "true");
            close.focus();

            modalTitle.innerHTML = `Votre message a bien été envoyé à <br>${currentPhotographer.name}`;
            modalTitle.classList.add("msg_valid");

            //console.log de l'entrée utilisateur :

            let datas = new FormData(bannerModal);
            for (let i of datas.entries()) {
                console.log(i[0], ":", i[1]);
            }
        }
    });
}

export { verifModal, displayModal, closeModal };