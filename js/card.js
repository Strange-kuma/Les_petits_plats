const recipeDisplay = async (listofrecipes) => {
    

    let sectionRecipes = document.querySelector('#section_recipe')
 
    sectionRecipes.innerHTML = listofrecipes.map((Recipes) => {

        let recipeIngredients = Recipes.ingredients
        let ingredientsHtml = recipeIngredients.map((ing)=>
          ` <li>
        <span>${ing.ingredient}</span> : ${ing.quantity ? ing.quantity.toString().trim() : ""} ${ing.unit ? ing.unit.toLowerCase().trim() : ""}
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


