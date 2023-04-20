let ButtonIngredient = document.querySelector("#dropbtn1");
let ButtonAppareil = document.querySelector("#dropbtn2");
let ButtonUstensile = document.querySelector("#dropbtn3");

let dropdownContentsIngredient = document.querySelector("#myDropdown");
let dropdownContentsAppareil = document.querySelector("#myDropdown2");
let dropdownContentsUstensile = document.querySelector("#myDropdown3");


//-------------------------------------
//fonction d'affichage du dropdown ingredient
//-------------------------------------
async function dropdowncontentIngredient() {
  await fetchRecipes();

  ButtonIngredient.addEventListener("click", function () {
    const deleteDuplicates = (array) => {
      let cleanDuplicate = [];
      array.forEach((item) => {
        cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
      });
      return cleanDuplicate;
    };
    let allIngredients = [];
    allRecipes.map((recipe) => {
      recipe.ingredients.forEach((ing) => {
        allIngredients.push(ing.ingredient);
      });
    });
    let tabIngredients = deleteDuplicates(allIngredients);
    let ingredientList = "";
    dropdownContentsIngredient.classList.toggle("show");
    dropdownContentsIngredient.innerHTML = tabIngredients.forEach(
      (ingredient) => {
        ingredientList += `<li><a href="">${ingredient}</a></li>`;
      }
    );
    dropdownContentsIngredient.innerHTML = `
        <div class='Dplistingredient'> <ul> ${ingredientList}</ul></div>
        `;
  });
}
//-------------------------------------
//fonction d'affichage du dropdown appareil 
//-------------------------------------
function dropdowncontentAppareil() {
  ButtonAppareil.addEventListener('click', function () {
    const deleteDuplicates = (array) => {
      let cleanDuplicate = [];
      array.forEach((item) => {
        cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
      });
      return cleanDuplicate;
    };
    dropdownContentsAppareil.classList.toggle("show");
    let tabAppareil = deleteDuplicates(allRecipes.appliance);
    let AppareilList = "";
    dropdownContentsAppareil.classList.toggle("show");
    dropdownContentsAppareil.innerHTML = tabAppareil.forEach(
      (Appareil) => {
        AppareilList += `<li><a href="">${Appareil}</a></li>`;
      }
    );
    dropdownContentsAppareil.innerHTML = `
        <div class='Dplistingredient'> <ul> ${AppareilList}</ul></div>
        `;
  })
}



