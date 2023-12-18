class APIManger{

    constructor(ingredient,gluten,dieary){
        this.dataR 
        this.ingredient=ingredient
        this.gluten=gluten
        this.dieary=dieary
    }

    fetchDataFromUrl(){
      
       return fetch(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${this.ingredient}`)
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
            
            this.checkBoxFilter(dataRecipes)
        }) 
    
    }
    
    checkBoxFilter(dataRecipes){
        
        if((this.dieary == "true")&&(this.gluten == "true")){

            const glutenfree = this.filterData(dataRecipes,glutenIngredients)
            this.dataR=(this.filterData(glutenfree,dairyIngredients))

        }else if(this.dieary=="true"&&this.gluten=="false"){
            this.dataR=(this.filterData(dataRecipes,dairyIngredients))

        }else if(this.dieary=="false"&&this.gluten=="true"){
            this.dataR=(this.filterData(dataRecipes,glutenIngredients))

        }else if(this.dieary == "false"&&this.gluten=="false"){  
            this.dataR=(dataRecipes)
        }else{
            this.dataR="I think you have error in the fetch Data"
        }

    }

    filterData (recipes , filteredIngredients) {
        console.log(recipes)
        return recipes.filter(recipe => !recipe.ingredients
            .find(ingredient => filteredIngredients.includes(ingredient)))
    }
}
module.exports = APIManger