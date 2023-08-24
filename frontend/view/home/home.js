/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

import Article from '../../js/article.js';
import ArticleManager from '../../js/articleManager.js';
import { loadConfig } from '../../js/config.js';
import { addFavorite } from '../../js/favoriesManager.js';


loadConfig().then(data => {
    const config = data

    fetch(config.host + '/api/article')
        .then(data => data.json())
        .then(jsonListeArticles => {
            for (let jsonArticle of jsonListeArticles) {
            let article = new Article(jsonArticle);
            document.querySelector(".container").innerHTML += `<div class="col-12 mt-5">
                                                                    <div class="card article">
                                                                        <div class="card-header ">
                                                                            <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.getFormattedDate()}</span></h5>
                                                                        </div>
                                                                        <img src="http://localhost:4000/${article.image}" class="card-img-top">
                                                                        <span data-id="${article.id}" class="fa-stack fa-2x addFavorite">
                                                                            <i class="fas fa-star fa-stack-1x"></i>
                                                                            <i class="far fa-star fa-stack-1x"></i>
                                                                        </span>
                                                                        <div class="card-body">
                                                                            <p class="card-text">${article.content}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>`;
            }
            let stars = document.querySelectorAll(".addFavorite")
            for (let star of stars) {
                star.addEventListener('click', () => {
                    addFavorite(star.dataset.id);
                    star.setAttribute('class', 'fa-stack fa-2x addFavorite activated');
                })
            }
        })
        
});