const recipeDisplay = async () => {
    await fetchRecipes();

    let sectionRecipes = document.querySelector('#section_recipe')
 
    sectionRecipes.innerHTML = allRecipes.map((Recipes) => {

        let recipeIngredients = Recipes.ingredients
        let ingredientsHtml = recipeIngredients.map((ing)=>
          ` <li>
        <span>${ing.ingredient}</span> : ${ing.quantity} ${ing.unit}
          </li>`
        ).join("")
        return `
        <article>
        <div class="legendecard">
        <div class="title">
        <h3>${Recipes.name}</h3>
        <span><ion-icon name="time"></ion-icon> ${Recipes.time} min</span>
        </div>
        <div class="content">
        <div class="ingredient">
        <ul>
        ${ingredientsHtml}
        </ul>
        </div>
        <div class="descriptif">
        <p>${Recipes.description}</p>
        </div>
        </div>
        </div>
        </article>
        
        `}).join("")


}
recipeDisplay();
