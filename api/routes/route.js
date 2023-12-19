const express = require('express')
// Import required module
const router = express.Router()
const axios = require('axios')


dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]

const filterData = function(recipes , filteredIngredients) {
    console.log(recipes)
    return recipes.filter(recipe => !recipe.ingredients
        .find(ingredient => filteredIngredients.includes(ingredient)))
}

 const checkBoxFilter = function(dataRecipes,gluten,dieary){
        
    if((dieary == "true")&&(gluten == "true")){
        const glutenfree = filterData(dataRecipes,glutenIngredients)
        dataR=(filterData(glutenfree,dairyIngredients))
        return dataR
    }else if(dieary=="true"&&gluten=="false"){
        dataR=(filterData(dataRecipes,dairyIngredients))
        return dataR
    }else if(dieary=="false"&&gluten=="true"){
        dataR=(filterData(dataRecipes,glutenIngredients))
        return dataR
    }else if(dieary == "false"&&gluten=="false"){  
        dataR=(dataRecipes)
        return dataR
    }else{
        dataR="I think you have error in the fetch Data"
        return dataR
    }

}

router.get('/recipes/:ingredient',function(req,res){
    const ingredient = req.params.ingredient
    const gluten  = req.query.gluten
    const dieary = req.query.dairy
    console.log(ingredient,gluten,dieary)
    axios.get(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`)
    .then(y => {
        const dataRecipes = y.data.results.map((data)=>{
            return{
                title : data.title,
                idMeal : data.idMeal,
                imgUrl:  data.thumbnail,
                href:data.href,
                ingredients: data.ingredients
            }
        })
      
       const finallyRecipes= checkBoxFilter(dataRecipes,gluten,dieary)
       if(typeof finallyRecipes == "string"){
           res.send(finallyRecipes)
       }else{
   
           res.status(200).send(finallyRecipes)
       }
    }) 

})


module.exports = router