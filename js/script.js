/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.



1- con un prompt chiediamo all'utente pari o dispari e un numero da uno a 5
2- creiamo una funzione che genera un numero casuale da 1 a 5
3- sommiamo i numeri
4- attraverso una funzione dichiariamo chi ha vinto
*/


//PARI E DISPARI

//creiamo le variabili dei dati dell'utente

var evenOrOdd = prompt('scegli pari o dispari');
var userNumber = prompt('scegli un nuemro da 1 a 5');

console.log(userNumber);

//numero estratto 
var computerNumber = getComputerNumber(1, 6);

console.log(computerNumber);

//sommo

var sum = parseInt(userNumber) + computerNumber;
console.log(sum);

//applico la funzione pari

console.log(isEven(sum));

//verifico l'esito

if (isEven(sum) && evenOrOdd == 'pari') {
    console.log('hai detto pari ed è pari')
}
else if (!isEven(sum) && evenOrOdd == 'pari') {
    console.log('hai detto pari ed è dispari')
}
else if (!isEven(sum) && evenOrOdd == 'dispari') {
    console.log('hai detto dispari ed è dispari')
}
else {
    console.log('hai detto dispari ed è pari')
}





//funzione numero casuale

function getComputerNumber(min, max,) {

    return Math.floor(Math.random() * (max - min) + min);
}

//funzione pari o dispari

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}


