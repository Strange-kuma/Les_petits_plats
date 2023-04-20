let dropdownbtn = document.querySelectorAll(".ingredient-link")



 for (let i = 0; i < dropdownbtn.length; i++) {
    dropdownbtn[i].addEventListener("click", function() {
        console.log(dropdownbtn[i]);
        
     });
 }