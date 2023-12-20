const express = require('express')
const router = express.Router()
const axios = require('axios')

const configs = require('../../recipesConfig')
const recipesFiltersModel = require('../../recipesFiltersModel')

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
                    ingredients: data.ingredients
                }
            })

            const finallyRecipes = recipesFiltersModel.checkBoxFilter(dataRecipes, gluten, dieary)
            if (typeof finallyRecipes == "string") {
                res.status(404).send(finallyRecipes)
            } else {

                res.status(200).send(finallyRecipes)
            }
        })

})


module.exports = router