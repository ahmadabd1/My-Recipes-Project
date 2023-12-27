
const configs = require('./recipesConfig')
const { faker, ur } = require('@faker-js/faker');
const { default: axios } = require("axios")

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

class GifImage{
    constructor(){
    }

    getUrlGif(numOfImage){
        return axios.get(`${configs.GIFFY_API}${numOfImage}`)
    }

    swapImageToGif(dataRecipes,url_gif){
        for(let index=0;index<dataRecipes.length;index++){
            dataRecipes[index].imgUrl= url_gif[index]
        }
        return dataRecipes
    }
}
module.exports = {recipesFiltersModel , addDetails ,GifImage}