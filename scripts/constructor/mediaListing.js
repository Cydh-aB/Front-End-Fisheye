//Constructor class pour tableau + méthode de tri

export class mediaListing {
    constructor() {
        this.mediaListing = [];
    }

    addMedia(media){
        this.mediaListing.push(media);
    }

    getMediaList(sort) {
        const localMediaListing = this.mediaListing.slice();
        let returnList = [];

        if (sort === "popularite") {
            localMediaListing.sort((a, b) => b.likes - a.likes);
        } else if (sort === "date") {
            localMediaListing.sort((a, b) => b.date - a.date);
        } else if (sort === "titre") {
            localMediaListing.sort(function (a, b) {
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
            
        } else {
            return localMediaListing.slice();
        }

        return returnList;
    }
}