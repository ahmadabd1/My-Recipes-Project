const sourceRecipes = $("#resultsRecipes-template").html()
const templateRecipes = Handlebars.compile(sourceRecipes)
let val;


const displayTheRecipes = function (dataRecipes) {
    $("#results").empty()
    let someHTML = templateRecipes({ dataRecipes: dataRecipes })
    $("#results").append(someHTML)

}


$("#results").on("click", ".card-img-top", function () {
    $.get(`/recipes/${val}`).then(data => {
        console.log(data)
        const searchObject = data.find((ind) => ind.imgUrl == $(this).attr('src'));
        alert(searchObject.ingredients[0])
    })
})



$("#searchBtn").on("click", () => {
    let inputValue = $(".search-box").val()
    val = inputValue
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');

    $.get(`/recipes/${inputValue}?gluten=${checkBoxGluten}&dieary=${checkBoxDietary}`).then(data => {
        // myFunction(data)
        displayTheRecipes(data)
    })

})

