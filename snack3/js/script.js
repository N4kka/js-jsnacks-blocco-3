const teams = [
    {
        nome: "Juventus",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti : 0,
        falliSubiti: 0
    },
    {
        nome: "Torino",
        puntiFatti : 0,
        falliSubiti: 0
    }
];

// const puntiFalli = teams.forEach((element, index) => {
//     let points = getRandomInt();
//     let foul = getRandomInt();
    
//     if(teams.puntiFatti === 0) {
//         teams.puntiFatti.push(points);
//     } else if (teams.falliSubiti === 0) {
//         const falliSubiti = foul;
//     } else {
//         console.log("doesn't work");
//     }
//     console.log("Punti fatti:",points,"Falli subiti:", foul);
// });
// console.log(teams, "cosa succede?",puntiFalli);

for (let i = 0; i < teams.length; i++ ) {
    const points = getRandomInt();
    const fouls = getRandomInt();
    if(teams.puntiFatti === 0) {
        teams[puntiFatti] = points;
    } else if (teams.falliSubiti === 0){ 
        teams[falliSubiti] = fouls;
    }
    console.log(points);
};
console.log(teams);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
}