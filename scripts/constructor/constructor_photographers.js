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

    get folderName() {
        return this.name.toLowerCasee().replace(" ", "");
    }
}