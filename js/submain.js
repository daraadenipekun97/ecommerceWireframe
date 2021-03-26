let cardtwo = document.querySelector("#two");
let cardlinktwo = document.querySelector("#linktwo");


///on hover of the card


cardtwo.addEventListener('mouseover', show );
function show() {


    cardlinktwo.style.visibility = "visible";

   
}

cardtwo.addEventListener('mouseout', hide);
function hide() {
    
    cardlinktwo.style.visibility = "hidden";
   

}