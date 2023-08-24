const calcElement = document.getElementById("calc");
calcElement.addEventListener("click", function(e){
   
   const userDistance = Number(document.getElementById("userDistance").value);
   const userAge = document.getElementById("selectAge").value;

   console.log(userAge);

   let price = userDistance * 0.21;

   if (userAge == "Under 18") {
      price = price * 0.8;
   } else if (userAge == "Over 65"){
      price = price * 0.6;
   } else {
      price = price;
   }

   price = price.toFixed(2);

   const ticketName = document.getElementById("userName").value;
   const ticketSurname = document.getElementById("userSurname").value;

   document.getElementById("ticketName").innerHTML = ticketName + " " + ticketSurname;

   const ticketAge = document.getElementById("selectAge").value;
   document.getElementById("ticketAge").innerHTML = ticketAge;

   document.getElementById("ticketPrice").innerHTML = price + " Euro";
   e.preventDefault();
}
);
