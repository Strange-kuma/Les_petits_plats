const inputSearch = document.querySelector("#Search_input")
const searchClue = document.querySelector("#search_clue")
const erreurdiv = document.querySelector("#error");

async function inputGlobalTri() {
    await fetchRecipes();

    searchClue.addEventListener('click', () => {
        inputSearch.value.toLowerCase().trim()

        if (inputSearch.value.length >= "3") {
            erreurdiv.innerHTML = ``
         
         

        } else {
            erreurdiv.innerHTML = `<p>Votre recherche doit faire 3 charactére minimum</p>`
        }

    })

}
inputGlobalTri();