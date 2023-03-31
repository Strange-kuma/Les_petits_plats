let allRecipes = []
const fetchRecipes = async () => {
    // Récupération des pièces depuis le fichier JSON
    await fetch('js/recipes.json')
        .then((res) => res.json())
        .then((data) => allRecipes = data.recipes); 
        
       
}