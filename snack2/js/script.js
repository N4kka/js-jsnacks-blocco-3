const totalNumbers = [];

const userNumbers = parseInt(prompt("dimmi un numero"));

for(let i = 0; i < 50; i++) {
    const items = totalNumbers[i];
    if(totalNumbers <= 50) {
        const sumNumbers = userNumbers.reduce(
            (previousValue, currentValue) => previousValue + currentValue, totalNumbers,
                totalNumbers.push(sumNumbers)
        )
    } else {
        console.log("niente");
    }
};
console.log(totalNumbers, userNumbers);