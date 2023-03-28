let allRecipes = []

const reponse = fetch('js/recipes.json').then((res) => res.json())
 reponse.then((data) => {
    data.recipes
    console.log(data.recipes)
    allRecipes = [...data.recipes]
    console.log(allRecipes)
})
