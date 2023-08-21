/**
 * Gère l'affichage et les interactions de la page de contact
 */

document.querySelector('.form input[type="button"]') 
.addEventListener('click', () => {
    var valid = true;
    for(let input of document.querySelectorAll(".form input, .form textarea")) {
        // valid = valid && input.reportValidity();
        valid &= input.reportValidity();
        if (!valid) {
            break;
        }
    }
    if (valid) {
        alert('Votre message a bien été envoyé');
    }
})