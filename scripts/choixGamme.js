$(document).ready(function() {
    getAllGammes();
});

function getAllGammes() {
    var containerGamme = $('#container-gamme');
    containerGamme.empty();

    var divGammeTemplate = "<div class='gamme'><input type='radio' class='radioGamme' name='radio-gamme' value='%idGamme%'/><img src='%imgGamme%'/><h6>%nomGamme%</h6></div>"

    $.getJSON('http://localhost/mmbssymfony/web/app_dev.php/api/getallgamme',
        function (json) {
            for (var i = 0; i < json.length; i++) {
                var nomGamme  = json[i].nomGamme;
                var idGamme  = json[i].idGamme;
                var imgGamme = '../../assets/maison-' + (i+1) + '.jpg';
                var divGamme = divGammeTemplate.replace('%nomGamme%', nomGamme).replace('%imgGamme%', imgGamme).replace('%idGamme%', idGamme);
                containerGamme.append(divGamme);
            }
    });
}

function continueSetGamme() {
    // On récupère l'id de la gamme pour l'utiliser sur les views suivantes
    var checkedValue = $('.radioGamme:checked').val();

    // Set id gamme en local storage pour être réutilisé si besoin?
    // Utiliser cookie plutôt que Local Storage?
    localStorage.setItem("idGamme", checkedValue);

    // GOTO next page
    // TODO REPLACE WITH CORRECT URL
    window.location.href = 'accueilMadera.html';
}