export class photographers {
    constructor (name, id, city, country, tagline, price, portrait) {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    getFolderName() {
       var folder = this.name.split(' ');
       return folder[0];
    }
}

