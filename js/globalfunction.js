//-------------------------------------
// function d'affichage des card 
//-------------------------------------
const initCard = async () => {
    await fetchRecipes();
    recipeDisplay(allRecipes);
}
initCard()

//-------------------------------------
//fonction de fermuter des dropdown au click sur la page 
//-------------------------------------
// function fermetureDropdown() {
//     // fonction de fermeture des dropdowns
//     window.onclick = () => {
//         if (dropdownIngredient.style.width = "1200px") {
//             dropdownIngredient.style.width = "200px"
//             dropdownIngredient.style.height = "30px"
//             dropdownIngredient.style.flexDirection = "row"
//             dropdownIngredient.innerHTML = `
//             <p>Ingredient</p><ion-icon name="arrow-dropdown"></ion-icon>`
//         }
//     }
// }
// fermetureDropdown()