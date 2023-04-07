let ButtonIngredient = document.querySelector("#dropbtn1")
let ButtonAppareil = document.querySelector("#dropbtn2")
let ButtonUstensile = document.querySelector("#dropbtn3")

let dropdownContentsIngredient = document.querySelector('#myDropdown')
let dropdownContentsAppareil = document.querySelector('#myDropdown2')
let dropdownContentsUstensile = document.querySelector('#myDropdown3')


// document.querySelectorAll(".dropbtn").forEach(button => {
//     button.addEventListener('click', event => {
//        dropdowncontent.classList.toggle("show")

//     });
// });



async function dropdowncontent() {
    await fetchRecipes();



    ButtonIngredient.addEventListener('click', function () {
        dropdownContentsIngredient.classList.toggle("show");
        dropdownContentsIngredient.innerHTML = allRecipes.map((recipes) => {
          


            let ingredient =recipes.ingredients
       

                let ingredientList = ingredient.map((ing) =>
                    `<li><a href="">${ing.ingredient}</a></li>`
                ).join("")
                return `

                <div><ul>${ingredientList}</ul></div>
                `
            }).join("")
        })

            ButtonAppareil.addEventListener('click', function () {
                dropdownContentsAppareil.classList.toggle("show");
                dropdownContentsAppareil.innerHTML = allRecipes.map((recipes) => {
                    let appareil = recipes.appliance


                    let appareilList = appareil.map((ing) =>
                        `<li><a href="">${ing.appliance}</a></li>`
                    ).join("")
                    return `
          
            <div><ul>${appareilList}</ul></div>
            `
                }).join("")
            })
        ButtonUstensile.addEventListener('click', function () {
            dropdownContentsUstensile.classList.toggle("show");

        })

        // let ustensils = recipes.ustensils
    }
dropdowncontent()

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                dropdownContentsIngredient.innerHTML = ""
                dropdownContentsAppareil.innerHTML = ""
            }
        }
    }
}