

function displayLightbox(media, mediaFactory, currentPhotographer) {
    let currentMedia = media;
    const lightboxModal = document.querySelector(".lightbox");
    const slideContainer = document.querySelector(".container_slide");
    const btnClose = document.querySelector(".close");
    const next = document.querySelector(".right");
    const previous = document.querySelector(".left");
    const titleMedia = document.querySelector(".lightbox_media_title");
    const mediaImg = document.createElement("img");
    const mediaVideo = document.createElement("video");

    next.addEventListener("click", nextSlide);
    previous.addEventListener("click", previousSlide);
    btnClose.addEventListener("click", closeLightbox);

    lightboxModal.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            closeLightbox(e, media);
        }
        if (e.code === "ArrowRight") {
            nextSlide(e);
        }
        if (e.code === "ArrowLeft") {
            previousSlide(e);
        }
    });

    function nextSlide(e) {
        e.preventDefault;
        if (mediaFactory.indexOf(currentMedia) + 1 >= mediaFactory.length) {
            currentMedia = mediaFactory[0];
            
        } else {
            currentMedia = mediaFactory[mediaFactory.indexOf(currentMedia) + 1];
        }
        displayContent();
    }

    function previousSlide(e) {
        e.preventDefault;
        if (mediaFactory.indexOf(currentMedia) <= +0) {
            currentMedia = mediaFactory[mediaFactory.length -1];
            displayContent(currentMedia);
        } else {
            currentMedia = mediaFactory[mediaFactory.indexOf(currentMedia) -1];
            displayContent(currentMedia);
        }
    }

    function closeLightbox() {
        const lightboxModal = document.querySelector(".lightbox");
        const main = document.getElementById("main");
        lightboxModal.style.display = "none";
        main.style.display = "block";
    }

    displayContent(currentMedia);
    
    function displayContent() {
        if (currentMedia.type === "jpg") {
            mediaVideo.replaceWith(mediaImg);
            const linkImg = `assets/photographers/${currentPhotographer.getFolderName()}/`;
            mediaImg.src = linkImg + currentMedia.image;
            titleMedia.textContent = `${currentMedia.title}`;
            mediaImg.alt = currentMedia.image;
            slideContainer.appendChild(mediaImg);
        } else if (currentMedia.type === "mp4") {
            mediaVideo.src = `assets/photographers/${currentPhotographer.getFolderName()}/${currentMedia.video}`;
            titleMedia.textContent = `${currentMedia.title}`;
            mediaImg.replaceWith(mediaVideo);
            mediaVideo.setAttribute("alt", currentMedia.video);
            mediaVideo.autoplay = true;
            mediaVideo.loop = true;
            mediaVideo.load();
            slideContainer.appendChild(mediaVideo);
        }
    };
    
}

function openLightBox() {
    const main = document.getElementById("main");
    const close = document.querySelector(".close");
    const lightboxModal = document.querySelector(".lightbox");
    lightboxModal.style.display = "flex";
    close.focus();
    main.style.display = "none";
}

export {displayLightbox, openLightBox};