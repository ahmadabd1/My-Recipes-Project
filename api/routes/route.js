const express = require('express')

// Import required module

const router = express.Router()

router.get('/recipes/:word',function(req,res){
    const input = req.params.word
    console.log(input)
    fetch(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${input}`)
    .then(x => {
        
        return x.json()
    })
    .then(y => {
        const dataRecipes = y.results.map((data)=>{
            return{
                title : data.title,
                idMeal : data.idMeal,
                imgUrl:  data.thumbnail,
                href:data.href,
                ingredients: data.ingredients

            }
        })
        
        
        res.send(dataRecipes)
    }) 

})


module.exports = router