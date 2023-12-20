
const configs = require('./recipesConfig')

class recipesFiltersModel{


    static checkBoxFilter(dataRecipes, gluten, dieary) {
        let dataR = dataRecipes
        if (dieary == "true"){
            dataR = this.filterData(dataR, configs.dairyIngredients)
        }
         if (gluten == "true") {
             dataR = this.filterData(dataR, configs.glutenIngredients)  
        }
        return dataR
    }

    static filterData(recipes, filteredIngredients) {
        return recipes.filter(recipe => !recipe.ingredients
            .find(ingredient => filteredIngredients.includes(ingredient)))
    }


    
}

// console.log(recipesFiltersModel.checkBoxFilter)

module.exports = recipesFiltersModel