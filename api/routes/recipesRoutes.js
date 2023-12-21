const express = require('express')
const router = express.Router()
const axios = require('axios')

const configs = require('../../recipesConfig')
const recipessModel = require('../../recipesModel')

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

            const finallyRecipes = recipessModel.recipesFiltersModel.checkBoxFilter(dataRecipes, gluten, dieary)
            if (typeof finallyRecipes == "string") {
                res.status(404).send(finallyRecipes)
            } else {

                res.status(200).send(finallyRecipes)
            }
        })

})


module.exports = router