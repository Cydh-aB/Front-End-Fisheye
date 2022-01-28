function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/photographers_id_photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const p1 = document.createElement( 'p' );
        p1.textContent = tagline;
        const p2 = document.createElement( 'p' );
        p2.textContent = price + "€/jour";
        p2.className = 'price';

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}