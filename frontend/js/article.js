/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class Article {
    constructor(jsonArticle) {
        // this.id = jsonArticle.id;
        // this.title = jsonArticle.title;
        // this.content = jsonArticle.content;
        // this.author = jsonArticle.author;
        // this.date = new Date(jsonArticle.date);
        // this.date = this.date.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'});
        //appliquer en une ligne une copie de tout les propriétés de jsonArticle dans this Article
        jsonArticle && Object.assign(this, jsonArticle);
    }

    getFormattedDate(article) {
        let timestamp = Date.parse(this.publicationDate);
        let date = new Date(timestamp);
        return date.toLocaleDateString();
    }
}

export default Article;