const express = require('express')

// Import required module

const router = express.Router()



dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]


const filterData = (recipes , filteredIngredients) => {
    console.log(recipes)
    return recipes.filter(recipe => !recipe.ingredients
        .find(ingredient => filteredIngredients.includes(ingredient)))
}

router.get('/recipes/:ingredient',function(req,res){
    const ingredient = req.params.ingredient
    const gluten  = req.query.gluten
    const dieary = req.query.dieary

    console.log(`${ingredient} , ${gluten }  , ${dieary}`)
    fetch(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`)
    .then(x => { 
        return x.json()
    }).then(y => {
        const dataRecipes = y.results.map((data)=>{
            return{
                title : data.title,
                idMeal : data.idMeal,
                imgUrl:  data.thumbnail,
                href:data.href,
                ingredients: data.ingredients
            }
        })
        if((dieary=="true")&&(gluten=="true")){
            const glutenfree = filterData(dataRecipes,glutenIngredients)
            res.send(filterData(glutenfree,dairyIngredients))

        }else if(dieary=="true"&&gluten=="false"){
            res.send(filterData(dataRecipes,dairyIngredients))
        }else if(dieary=="false"&&gluten=="true"){
            res.send(filterData(dataRecipes,glutenIngredients))
        }else if(dieary=="false"&&gluten=="false"){  
            res.send(dataRecipes)
        }else{
            res.send("I think you have error in the fetch Data")
        }
    }) 

})


module.exports = router