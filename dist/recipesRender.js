
const resultsRecipesTemplate = $("#resultsRecipes-template")
const sourceRecipes = resultsRecipesTemplate.html()
const templateRecipes = Handlebars.compile(sourceRecipes)


class Render {
    constructor() {
        this.cartData = []
    }
    displayTheRecipes(dataRecipes) {
        showDivResult.empty()
        let someHTML = templateRecipes({ dataRecipes: dataRecipes })
        showDivResult.append(someHTML)
    }
    addToCart(idMeal, data) {
        let obj = data.find(meal => meal.idMeal == idMeal)
        this.cartData.push(obj)
    }
    displayTheCart() {
        this.displayTheRecipes(this.cartData)
        $(".btnaddcart").hide()
    }
    deletFromTheCart(idMealdelete){
        const indexById = this.cartData.findIndex((obj) => obj.idMeal === idMealdelete);
        this.cartData.splice(indexById,1)
        this.displayTheCart()
    }
}

