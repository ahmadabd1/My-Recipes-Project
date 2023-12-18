const sourceRecipes = $("#resultsRecipes-template").html()
const templateRecipes = Handlebars.compile(sourceRecipes)

const showDivResult = $("#results")
const searchBox = $(".search-box")

const displayTheRecipes = function (dataRecipes) {
    showDivResult.empty()
    let someHTML = templateRecipes({ dataRecipes: dataRecipes })
    showDivResult.append(someHTML)

}

