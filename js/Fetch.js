//-------------------------------------
//variable global de recuperation et mis dans un tableau qui contient toutes les recettes 
//-------------------------------------
let allRecipes = []
const fetchRecipes = async () => {
    // Récupération des pièces depuis le fichier JSON
    await fetch('js/recipes.json')
        .then((res) => res.json())
        .then((data) => allRecipes = data.recipes); 
}