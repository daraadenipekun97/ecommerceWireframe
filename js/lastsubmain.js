let cardfour = document.querySelector("#four");
let cardlinkfour = document.querySelector("#linkfour");


///on hover of the card


cardfour.addEventListener('mouseover', show );
function show() {


    cardlinkfour.style.visibility = "visible";

   
}

cardfour.addEventListener('mouseout', hide);
function hide() {
    
    cardlinkfour.style.visibility = "hidden";
   

}