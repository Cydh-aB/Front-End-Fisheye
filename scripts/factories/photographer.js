function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/photographers_id_photos/${portrait}`;
    const lienPage = "photographer.html?id=" + id;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const urlPhotographer = document.createElement( 'a' );
        urlPhotographer.setAttribute("href", lienPage)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "");
        img.setAttribute("aria-hidden", "true");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const p1 = document.createElement( 'p' );
        p1.textContent = tagline;
        const p2 = document.createElement( 'p' );
        p2.textContent = price + "€/jour";
        p2.className = 'price';

        article.appendChild(urlPhotographer);
        urlPhotographer.appendChild(img);
        urlPhotographer.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}