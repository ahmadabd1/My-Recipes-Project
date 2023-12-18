const sourceRecipes = $("#resultsRecipes-template").html()
const templateRecipes = Handlebars.compile(sourceRecipes)



const displayTheRecipes = function (dataRecipes) {
    $("#results").empty()
    let someHTML = templateRecipes({ dataRecipes: dataRecipes })
    $("#results").append(someHTML)

}


$("#results").on("click", ".card-img-top", function () {
    let inputValue = $(".search-box").val()
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');
    $.get(`/recipes/${inputValue}?gluten=${checkBoxGluten}&dieary=${checkBoxDietary}`).then(data => {
        
        console.log(data)
        const searchObject = data.find((ind) => ind.imgUrl == $(this).attr('src'));
        alert(searchObject.ingredients[0])
        // displayTheRecipes(data)
    })
})




$("#searchBtn").on("click", () => {
    let inputValue = $(".search-box").val()
    
    var checkBoxGluten = $("#Gluten").is(':checked');
    var checkBoxDietary = $("#Dietary").is(':checked');

    $.get(`/recipes/${inputValue}?gluten=${checkBoxGluten}&dieary=${checkBoxDietary}`).then(data => {
       
        displayTheRecipes(data)
    })

})

