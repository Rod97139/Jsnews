/**
 * Gestion des articles en objet, gère le tri par date et le formatage des dates pour affichage
 */

class ArticleManager {
    constructor(listeArticles) {
        this.listeArticles = listeArticles;
    }

    sort() {
       return this.listeArticles.sort((a, b) => {
            return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate)) ? 1 : -1;
        });
    }
    
}

export default ArticleManager;