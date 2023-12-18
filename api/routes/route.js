const express = require('express')

// Import required module
const APIManger = require('./../../APIManger')
const router = express.Router()



dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]



router.get('/recipes/:ingredient',function(req,res){
    const ingredient = req.params.ingredient
    const gluten  = req.query.gluten
    const dieary = req.query.dieary
    
   let data = new APIManger(ingredient,gluten,dieary)
   data.fetchDataFromUrl().then(()=>{
    if(typeof data.dataR == "string"){
        res.status(404).send(data.dataR)
    }else{

        res.status(200).send(data.dataR)
    }
   })


})


module.exports = router