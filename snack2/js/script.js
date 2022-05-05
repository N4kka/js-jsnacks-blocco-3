const totalNumbers = [];

let sum = 0;

while (sum < 50) {
    const userNumbers = parseInt(prompt("Dimmi un numero"));
    sum += userNumbers;
    if (sum < 50) {
        totalNumbers.push(userNumbers);
    }
    console.log("il numero che hai inserito é:", userNumbers);
}
console.log(totalNumbers);
console.log(sum);