//-------------------------------------
// variable  de selection des element html
//-------------------------------------
const inputSearch = document.querySelector("#Search_input")
const searchClue = document.querySelector("#search_clue")
const erreurdiv = document.querySelector("#error");
inputSearch.addEventListener('input', inputGlobalTri)

//-------------------------------------
//fonction de trie globale grace a l'input search
//-------------------------------------

async function inputGlobalTri(e) {

    await fetchRecipes();

    if (inputSearch.value.length >= "3") {
        erreurdiv.innerHTML = ``
        let sectionRecipes = document.querySelector('#section_recipe')
        sectionRecipes.innerHTML = ""
        const searchString = e.target.value.toLowerCase();
        const filteredArr = allRecipes.filter((recipe) => {
            const ings = []
            recipe.ingredients.forEach(ing => {
                ings.push(ing.ingredient)
            })
            const ingsItems = ings.toString()
            const ustensilsItems = recipe.ustensils.toString()
            return (
                recipe.name.toLowerCase().includes(searchString) ||
                recipe.appliance.toLowerCase().includes(searchString) ||
                recipe.description.toLowerCase().includes(searchString) ||
                ingsItems.toLowerCase().includes(searchString) ||
                ustensilsItems.toLowerCase().includes(searchString)
            )
        });
        recipeDisplay(filteredArr)
    } else {
        erreurdiv.innerHTML = `<p>Votre recherche doit faire 3 charactére minimum</p>`
    }
}
