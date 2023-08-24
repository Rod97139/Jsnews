/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

export const addFavorite = (articleId) => {
    let listFavorites = getFavorites();
    listFavorites.push(articleId);
    saveFavorites(listFavorites);
}

export const getFavorites = () => {
    let listFavorites = localStorage.getItem('listFavorites');
    if (listFavorites) {
        return JSON.parse(listFavorites);
    } else {
        return [];
    }
}

export const saveFavorites = (listFavorites) => {
    localStorage.setItem('listFavorites', JSON.stringify(listFavorites));
}