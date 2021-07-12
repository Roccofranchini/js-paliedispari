/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


1- chiedere con un prompt una parola all'utente
2- creare una funzione per capire se la parola inserita è palindroma con un for discendente
*/

// raccogliamo la parola dell'utente
var risultato = document.getElementById('display');
var userWord = prompt('inserire una parola');
var message = '';

//creiamo una funzione per verificare se è palindroma

function isPal(word) {
    var esito = false;
    var letters = word.split('');

    console.log(letters);
    console.log(word.length);

    var result = '';

    for (var i = (word.length - 1); i >= 0; i--) {
        var letter = letters[i];

        result += letter;
    }

    console.log(result);
    console.log(word);

    if (word === result) {
        esito = true;
    }

    return esito;

}


if (isPal(userWord)) {
    message = 'La parola ' + userWord + ' è palindroma';
}

else {
    message = 'La parola ' + userWord + ' non è palindroma';
}

risultato.innerHTML = message;
