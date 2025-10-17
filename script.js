/*
Snack 1
Creare un array di oggetti: [✓]
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. [✓]
Stampare a schermo la bici con peso minore. [✓]

Snack2**
Creare un array di oggetti di squadre di calcio. [✓]
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. [✓]
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. [✓]
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. [✓]
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. [✓]
*/

// creo un array di oggetti per le bici
const biciclette = [

    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

    // descrizione 1a bici 
  { nome: "Mountain Pro", peso: 12.5, },

    // descrizione 2a bici
  { nome: "City Ride", peso: 10.8, },

    // descrizione 3a bici
  { nome: "Speedster", peso: 8.9, },

    // descrizione 4a bici
  { nome: "Trail Master", peso: 13.2, },

    // descrizione 5a bici
  { nome: "Eco Road", peso: 9.7, },
]


console.log(biciclette);

// variabile di supporto
let pesoMinore = biciclette[1];

    // ciclo per trovare il peso di tutte le biciclette
    for (let i = 0; i < biciclette.length; i++) {
         console.log(biciclette[i].peso);
        
        if (biciclette[i].peso < pesoMinore.peso) {
            pesoMinore = biciclette[i];
        }
    }
    console.log(`La bicicletta che pesa di meno è ${pesoMinore.nome} e pesa ${pesoMinore.peso} kg`);

const biciLeggeraEl = document.getElementById("biciLeggera");
biciLeggeraEl.innerHTML = `La bicicletta che pesa di meno è ${pesoMinore.nome} e pesa ${pesoMinore.peso} kg`;



///

// Creo un array di oggetti per le squadre di calcio
const squadre = [
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 }
];
// console.log(squadre);


// creo array vuoto per nome e falli subiti
const nomiFalli = [];

// ciclo nell'array per prendere gli oggetti singolarmente
for (let i = 0; i < squadre.length; i++) {
    const statistiche = squadre[i];
    // console.log(statistiche);
    // console.log(statistiche.puntiFatti);

    // se ho "0" nelle nelle proprietà “punti” fatti e “falli subiti”.
    if (statistiche.puntiFatti === 0 && statistiche.falliSubiti=== 0){
        // genero randomicamente dei numeri per puntiFatti e falliSubiti
        statistiche.puntiFatti = Math.floor(Math.random() *98) +1;
        statistiche.falliSubiti = Math.floor(Math.random() *98) +1;
    }

    // pusho l'oggetto aggiornato nell'array vuoto 
    nomiFalli.push ({
    // prendo tutti nomi delle squadre
    nome: statistiche.nome,
    // prendo tutti i falli subiti delle squadre
    falliSubiti: statistiche.falliSubiti,
})

}
// log delle squadre con tutte le proprietà
console.log(squadre);
// log solo di nomi e falliSubiti
console.log(nomiFalli);
