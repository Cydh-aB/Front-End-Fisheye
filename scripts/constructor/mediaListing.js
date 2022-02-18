//Constructor class pour tableau + méthode de tri

export class mediaListing {
    constructor() {
        this.mediaList = [];
    }

    addMedia(media){
        this.mediaList.push(media);
    }

    getMediaList(sort) {
        const localMediaList = this.mediaList.slice();
        let returnList = [];

        if (sort === "popularite") {
            localMediaList.sort((a, b) => b.likes - a.likes);
        } else if (sort === "date") {
            localMediaList.sort((a, b) => b.date - a.date);
        } else if (sort === "titre") {
            localMediaList.sort(function (a, b) {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA < titleB){
                    return -1;
                }
                if (titleA > titleB){
                    return 1;
                }
                return 0;
            });    
            
        }
        
        returnList = localMediaList.slice();
        return returnList;
    }

    getLikes() {
        let sum = 0;
        this.mediaList.forEach((media) => {
            sum += media.likes;
        });

        return sum;
    }
}