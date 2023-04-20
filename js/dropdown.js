let dropdownIngredient = document.querySelector('.Ingredient')
let dropdownAppareil = document.querySelector('.Appareil')
let dropdownUstencile = document.querySelector('.Ustencile')
let dropdown = document.querySelectorAll('.dropdown')
dropdownIngredient.innerHTML = `
<p>Ingredient</p><ion-icon name="arrow-dropdown"></ion-icon>
`
dropdownAppareil.innerHTML = `<p>Appareil</p><ion-icon name="arrow-dropdown"></ion-icon>`
dropdownUstencile.innerHTML = `<p>Ustencile</p><ion-icon name="arrow-dropdown"></ion-icon>`

//-------------------------------------
//fonction d'affichage de dropdown ingredient /*--DEBUT--*/
//-------------------------------------
dropdownIngredient.addEventListener('click', () => {
    dropdownIngredient.style.width = "1200px"
    dropdownIngredient.style.height = "800px"
    dropdownIngredient.style.flexDirection = "column"
    dropdownIngredient.innerHTML = `
    <input type="search" placeholder="Rechercher un ingrédient" name="" id="">
    <div class="dropdown-content-ingredient"></div>
    `
    dropdowncontentIngredient()
})
async function dropdowncontentIngredient() {
    await fetchRecipes();
    let dropdownContentIngredient = document.querySelector('.dropdown-content-ingredient')
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
    dropdownContentIngredient.innerHTML = tabIngredients.forEach(
        (ingredient) => {
            ingredientList += `<li><a class="ingredient-link" >${ingredient}</a></li>`;
        }
    );
    dropdownContentIngredient.innerHTML = `
          <div class='Dplistingredient'> <ul> ${ingredientList}</ul></div>
          `;
}
//-------------------------------------
//fonction d'affichage de dropdown ingredient /*--FIN--*/
//-------------------------------------


//-------------------------------------
//fonction d'affichage de dropdown appareil /*--DEBUT--*/
//-------------------------------------
dropdownAppareil.addEventListener('click', () => {
    dropdownAppareil.innerHTML = `<input type="search" placeholder="Rechercher un ingrédient" name="" id="">`
    dropdownAppareil.style.width = "1000px"
    dropdownAppareil.style.height = "200px"
    dropdownAppareil.style.flexDirection = "column"
    dropdownAppareil.innerHTML = `
    <input type="search" placeholder="Rechercher un appareil" name="" id="">
    <div class="dropdown-content-appareil"></div>
    `
    dropdowncontentAppareil()
})
async function dropdowncontentAppareil() {
    await fetchRecipes();
    let dropdownContentAppareil = document.querySelector('.dropdown-content-appareil')
    const deleteDuplicates = (array) => {
        let cleanDuplicate = [];
        array.forEach((item) => {
            cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
        });
        return cleanDuplicate;
    };
    let allAppareil = [];
    allRecipes.forEach((appliances) => {
        allAppareil.push(appliances.appliance);
    });
    let tabAppareil = deleteDuplicates(allAppareil);
    let AppareilList = "";
    dropdownContentAppareil.innerHTML = tabAppareil.forEach(
        (appliance) => {
            AppareilList += `<li><a class="appareil-link" >${appliance}</a></li>`;
        }
    );
    dropdownContentAppareil.innerHTML = `
          <div class='Dplistingredient'> <ul> ${AppareilList}</ul></div>
          `;
}
//-------------------------------------
//fonction d'affichage de dropdown appareil /*--FIN--*/
//-------------------------------------
//-------------------------------------
//fonction d'affichage de dropdown ustenciles /*--DEBUT--*/
//-------------------------------------
dropdownUstencile.addEventListener('click', () => {
    dropdownUstencile.innerHTML = `<input type="search" placeholder="Rechercher un ingrédient" name="" id="">`
    dropdownUstencile.style.width = "1000px"
    dropdownUstencile.style.height = "800px"
    dropdownUstencile.style.flexDirection = "column"
    dropdownUstencile.innerHTML = `
    <input type="search" placeholder="Rechercher un ingrédient" name="" id="">
    <div class="dropdown-content-ustencil"></div>
    `
    dropdowncontentUstencile()
})

async function dropdowncontentUstencile() {
    await fetchRecipes();
    let dropdownContentUstencile = document.querySelector('.dropdown-content-ustencil')
    const deleteDuplicates = (array) => {
        let cleanDuplicate = [];
        array.forEach((item) => {
            cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
        });
        return cleanDuplicate;
    };
    let allUstencile = [];
    allRecipes.forEach((ustensils) => {
        allUstencile.push(ustensils.ustensils);
    });
    let tabUstencile = deleteDuplicates(allUstencile);
    let UstencileList = "";
    dropdownContentUstencile.innerHTML = tabUstencile.forEach(
        (appliance) => {
            UstencileList += `<li><a class="ustenciles-link" >${appliance}</a></li>`;
        }
    );
    dropdownContentUstencile.innerHTML = `
          <div class='Dplistingredient'> <ul> ${UstencileList}</ul></div>
          `;
}
//-------------------------------------
//fonction d'affichage de dropdown ustenciles /*--FIN--*/
//-------------------------------------

