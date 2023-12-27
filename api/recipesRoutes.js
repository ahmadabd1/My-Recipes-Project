const express = require('express')
const router = express.Router()
const axios = require('axios')

const configs = require('../recipesConfig')
const recipessModel = require('../recipesModel')

const  modelImage = new recipessModel.GifImage()

router.get('/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    const gluten = req.query.gluten
    const dieary = req.query.dairy
    axios.get(`${configs.URLDATAINGREDIENT}/${ingredient}`)
        .then(inRecipesdata => {
            const dataRecipes = inRecipesdata.data.results.map((data) => {
                return {
                    title: data.title,
                    idMeal: data.idMeal,
                    imgUrl: data.thumbnail,
                    href: data.href,
                    ingredients: data.ingredients,
                    chefName:recipessModel.addDetails.genrateChefName(),
                    ratingStars:recipessModel.addDetails.randomStars(1,5)
                }
            })
            modelImage.getUrlGif(dataRecipes.length).then(urlGif=>{
                let arrgiffy =[]
                for(let i=0;i<urlGif.data.data.length;i++){
                    arrgiffy.push(urlGif.data.data[i].embed_url)
                }
                
                const newdataRecipes = modelImage.swapImageToGif(dataRecipes,arrgiffy)
                
                const finallyRecipes = recipessModel.recipesFiltersModel.checkBoxFilter(newdataRecipes, gluten, dieary)
                if (typeof finallyRecipes == "string") {
                    res.status(404).send(finallyRecipes)
                } else {
    
                    res.status(200).send(finallyRecipes)
                }
            })
        })
})


module.exports = router