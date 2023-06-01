const form = document.querySelector('form');
const input = document.querySelector('#query');
const resultatDiv = document.querySelector('#resultat');
const videoIframe = document.querySelector('#video');

form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value;
    // Effectuez une recherche YouTube avec la requête et mettez à jour l'URL de l'iframe avec le premier résultat
    var videoUrl = `${query}`;
    videoUrl = videoUrl.replace("watch?v=", "embed/");
    
    // Mettre à jour l'attribut "src" de l'iframe existante avec le nouvel URL
    videoIframe.setAttribute('src', videoUrl);

    // Afficher l'iframe dans la div "resultat"
    resultatDiv.appendChild(videoIframe);
});

const button = document.querySelector('button');