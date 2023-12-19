const sourceRecipes = $("#resultsRecipes-template").html()
const templateRecipes = Handlebars.compile(sourceRecipes)

const showDivResult = $("#results")
const searchBox = $(".search-box")
class Render{

    displayTheRecipes(dataRecipes) {
        showDivResult.empty()
        let someHTML = templateRecipes({ dataRecipes: dataRecipes })
        showDivResult.append(someHTML)
    
    }
}

