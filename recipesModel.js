
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

const { faker } = require('@faker-js/faker');

class addDetails{
    static genrateChefName(){
        const randomName = faker.person.fullName();
        return randomName

    }
    static randomStars(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }

}


module.exports = {recipesFiltersModel , addDetails}