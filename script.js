/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// creo un array di ogetti
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
let pesoMinore = biciclette[0];

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
