let ButtonIngredient = document.querySelector("#dropbtn1")
let ButtonAppareil = document.querySelector("#dropbtn2")
let ButtonUstensile = document.querySelector("#dropbtn3")

ButtonIngredient.addEventListener('click', function () {
    document.querySelector('#myDropdown').classList.toggle("show");
   
    
})
ButtonAppareil.addEventListener('click', function () {
    document.querySelector('#myDropdown2').classList.toggle("show");
  
})
ButtonUstensile.addEventListener('click', function () {
    document.querySelector('#myDropdown3').classList.toggle("show");
   
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 
