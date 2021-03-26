let cardthree = document.querySelector("#three");
let cardlinkthree = document.querySelector("#linkthree");


///on hover of the card


cardthree.addEventListener('mouseover', show );
function show() {


    cardlinkthree.style.visibility = "visible";

   
}

cardthree.addEventListener('mouseout', hide);
function hide() {
    
    cardlinkthree.style.visibility = "hidden";
   

}