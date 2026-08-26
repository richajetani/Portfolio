const openButton = document.getElementById("openNeighbourlinkWalkthrough");
const modal = document.getElementById("videoModal");
const closeButton = document.querySelector(".close");

openButton.addEventListener("click", function(){
    modal.style.display = "flex"; // when the user clicks the button the diaply becomes "flex", meaning the user can see the popup now.
});

closeButton.addEventListener("click", function(){
    modal.style.display = "none"; // when the user clicks the close button the display becomes "none", meaning the user cant see the popup anymore.
});