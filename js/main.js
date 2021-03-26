let card = document.querySelector(".cardo");
let cardlink = document.querySelector(".hover");


///on hover of the card


card.addEventListener('mouseover', show );
function show() {


    cardlink.style.visibility = "visible";

   
}

card.addEventListener('mouseout', hide);
function hide() {
    
    cardlink.style.visibility = "hidden";
   

}


