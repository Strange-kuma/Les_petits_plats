const inputSearch = document.querySelector("#Search_input")
const searchClue = document.querySelector("#search_clue")
const erreurdiv = document.querySelector("#error");
inputSearch.addEventListener('input', inputGlobalTri)

async function inputGlobalTri(e) {

    await fetchRecipes();

    if (inputSearch.value.length >= "3") {
        erreurdiv.innerHTML = ``
        let sectionRecipes = document.querySelector('#section_recipe')
        sectionRecipes.innerHTML = ""
        const searchString = e.target.value.toLowerCase();
        const filteredArr = allRecipes.filter(
            el => el.name.toLowerCase().includes(searchString)
                || el.ingredients.includes(searchString)
                || el.description.includes(searchString)
        )

        console.log(recipeDisplay(filteredArr));
        // probleme affichage des tri de card pourtant le trie s'effectue sur console
        return recipeDisplay(filteredArr)

    } else {
        erreurdiv.innerHTML = `<p>Votre recherche doit faire 3 charactére minimum</p>`
    }
}