//Constructor pour creer un nouveau media image/video

export class Media {

    //fonction de tri entre image ou video

    createMedia(id, photographerId, title, image, video, likes, date, price) {
        if (image) {
            const photo = new Photo();
            //photo.type = type; 
            
            
            // photo.id = id;
            photo.photographerId = photographerId;
            photo.title = title;
            photo.image = image;
            photo.likes = likes;
            photo.date = new Date(date);
            photo.price = price;
            photo.type = "jpg";

            return photo;

        } else if (video) {
            const shortVideo = new Video();
            //shortVideo.type = type;
            
            shortVideo.date = date;
            shortVideo.id = id;
            shortVideo.video = video;
            shortVideo.likes = likes;
            shortVideo.photographerId = photographerId;
            shortVideo.title = title;
            shortVideo.type = "mp4";

            return shortVideo;
        }
    }

}

export class Photo extends Media {
    createImg(photographer) {
        const linkToPhoto = `./assets/photographers/${photographer}/`;
        const cardMediaImg = document.createElement("img");

        cardMediaImg.src = linkToPhoto + this.image;
        cardMediaImg.alt = this.title;
        cardMediaImg.classList.add("media-img");

        return cardMediaImg;
    }
}

export class Video extends Media {
    createImg(photographer) {
        const linkToPhoto = `/assets/photographers/${photographer}/`;
        const cardMediaVideo = document.createElement("video");
        cardMediaVideo.loop = true;
        cardMediaVideo.muted = true;

        cardMediaVideo.src = linkToPhoto + this.video;
        cardMediaVideo.alt = this.alt;
        cardMediaVideo.classList.add ("media_img");

        return cardMediaVideo;
    }
}