// Ecco sono gli esercizi da fare oggi pomeriggio. Create una cartella separata per ogni snack :cartella_file:

// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const firstNumbers = [
    1, 3, 5, 6, 8, 10, 15, 17, 23
];

const secondNumbers = [
    4, 6, 8, 16, 21, 44
];

console.log("This is the original length of the two arrays",firstNumbers, secondNumbers);

for(let i = 0; i < secondNumbers.length; i++) {
    const arrayItems = secondNumbers[i];
    const generatedNumbers = getRandomInt();
    if(secondNumbers.length < firstNumbers.length) {
        secondNumbers.push(getRandomInt());
    }
}
console.log("This is the updated length of the two arrays",firstNumbers, secondNumbers);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}