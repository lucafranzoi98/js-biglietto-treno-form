// Descrizione:
//  Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// La risposta finale (o output) sarà anch’essa da scrivere in solo console.

//prendi i valori degli input
//calcola il prezzo in base a età e distanza con if else
//premendo calcola > console con function

const calcElement = document.querySelector("button");
calcElement.addEventListener("click", function(){
   
   const userDistance = Number(document.getElementById("userDistance").value);
   const userAge = Number(document.getElementById("userAge").value);

   let price = userDistance * 0.21;

   if (userAge < 18) {
      price = price * 0.8;
   } else if (userAge > 65){
      price = price * 0.6;
   } else {
      price = price;
   }
   
   console.log(price);
}
);